import { useEffect, useRef } from "react";

function CubeBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const pre = backgroundRef.current;

    const RAMP = "¨>!*&@";
    const K = 5.0;
    const FPS = 30;

    const AMBIENT = 0.16;
    const DITHER = 0.05;

    const LIGHT = (() => {
      const [x, y, z] = [-0.45, 0.78, -0.55];
      const magnitude = Math.hypot(x, y, z);

      return [
        x / magnitude,
        y / magnitude,
        z / magnitude
      ];
    })();

    const LAYERS = [
      {
        spanF: 0.16,
        speed: 1.2,
        bright: 0.40,
        spin: 0.06,
        cubes: [
          [0.06, 0.16],
          [0.40, 0.10],
          [0.70, 0.20],
          [0.24, 0.86],
          [0.58, 0.80],
          [0.93, 0.74]
        ]
      },

      {
        spanF: 0.30,
        speed: 3.4,
        bright: 0.70,
        spin: 0.10,
        cubes: [
          [0.15, 0.30],
          [0.86, 0.24]
        ]
      },

      {
        spanF: 0.44,
        speed: 5.5,
        bright: 1.0,
        spin: 0.14,
        cubes: [
          [0.56, 0.62]
        ]
      }
    ];

    const V = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1]
    ];

    const F = [
      { v: [0, 1, 2, 3], n: [0, 0, -1] },
      { v: [5, 4, 7, 6], n: [0, 0, 1] },
      { v: [1, 5, 6, 2], n: [1, 0, 0] },
      { v: [4, 0, 3, 7], n: [-1, 0, 0] },
      { v: [3, 2, 6, 7], n: [0, 1, 0] },
      { v: [4, 5, 1, 0], n: [0, -1, 0] }
    ];

    let cols = 0;
    let rows = 0;
    let aspect = 1;

    let zbuf;
    let lay;
    let shade;
    let fid;
    let out;

    function rot(p, sa, ca, sb, cb, sc, cc) {
      let [x, y, z] = p;
      let temp;

      temp = y * ca - z * sa;
      z = y * sa + z * ca;
      y = temp;

      temp = x * cb + z * sb;
      z = -x * sb + z * cb;
      x = temp;

      temp = x * cc - y * sc;
      y = x * sc + y * cc;
      x = temp;

      return [x, y, z];
    }

    function measure() {
      const probe = document.createElement("span");

      probe.textContent = "M".repeat(100);

      probe.style.cssText =
        "position:absolute;visibility:hidden;white-space:pre;font:inherit";

      pre.appendChild(probe);

      const cw = probe.getBoundingClientRect().width / 100;

      probe.remove();

      const ch = parseFloat(
        getComputedStyle(pre).lineHeight
      );

      cols = Math.max(
        20,
        Math.floor(window.innerWidth / cw)
      );

      rows = Math.max(
        10,
        Math.floor(window.innerHeight / ch)
      );

      aspect = ch / cw;

      const size = cols * rows;

      zbuf = new Float32Array(size);
      lay = new Int8Array(size);
      shade = new Float32Array(size);
      fid = new Int32Array(size);
      out = new Array(size);
    }

    function tri(a, b, c, sh, id, depth) {
      const area =
        (b.x - a.x) * (c.y - a.y) -
        (b.y - a.y) * (c.x - a.x);

      if (Math.abs(area) < 1e-9) {
        return;
      }

      const inverse = 1 / area;

      const x0 = Math.max(
        0,
        Math.floor(Math.min(a.x, b.x, c.x))
      );

      const x1 = Math.min(
        cols - 1,
        Math.ceil(Math.max(a.x, b.x, c.x))
      );

      const y0 = Math.max(
        0,
        Math.floor(Math.min(a.y, b.y, c.y))
      );

      const y1 = Math.min(
        rows - 1,
        Math.ceil(Math.max(a.y, b.y, c.y))
      );

      for (let y = y0; y <= y1; y++) {
        const py = y + 0.5;

        for (let x = x0; x <= x1; x++) {
          const px = x + 0.5;

          const w0 =
            ((b.x - px) * (c.y - py) -
              (b.y - py) * (c.x - px)) *
            inverse;

          if (w0 < 0) continue;

          const w1 =
            ((c.x - px) * (a.y - py) -
              (c.y - py) * (a.x - px)) *
            inverse;

          if (w1 < 0) continue;

          const w2 = 1 - w0 - w1;

          if (w2 < 0) continue;

          const index = y * cols + x;

          const z =
            w0 * a.w +
            w1 * b.w +
            w2 * c.w;

          if (
            lay[index] > depth ||
            (lay[index] === depth &&
              z <= zbuf[index])
          ) {
            continue;
          }

          lay[index] = depth;
          zbuf[index] = z;
          shade[index] = sh;
          fid[index] = id;
        }
      }
    }

    function draw(time) {
      zbuf.fill(0);
      lay.fill(-1);
      shade.fill(0);
      fid.fill(-1);

      LAYERS.forEach((layer, depth) => {
        const span = Math.max(
          3,
          layer.spanF * rows / 2
        );

        const k = span * 3.0;

        const hw = Math.ceil(
          span * aspect * 2.2
        );

        const period = cols + 2 * hw;

        layer.cubes.forEach(([fx, fy], cubeIndex) => {

          const a =
            0.42 +
            time *
              layer.spin *
              (0.6 + cubeIndex * 0.17);

          const b =
            0.9 +
            time *
              layer.spin *
              (1 + cubeIndex * 0.23);

          const c =
            0.15 +
            time * layer.spin * 0.4 +
            cubeIndex;

          const sa = Math.sin(a);
          const ca = Math.cos(a);

          const sb = Math.sin(b);
          const cb = Math.cos(b);

          const sc = Math.sin(c);
          const cc = Math.cos(c);

          const cx =
            ((fx * cols +
              layer.speed * time +
              hw) %
              period +
              period) %
              period -
            hw;

          const bob =
            Math.sin(
              time * 0.28 +
              cubeIndex * 1.7
            ) *
            span *
            0.18;

          const cy = Math.min(
            rows - span,
            Math.max(
              span,
              fy * rows + bob
            )
          );

          const points = V.map((vertex) => {

            const [x, y, z] = rot(
              vertex,
              sa,
              ca,
              sb,
              cb,
              sc,
              cc
            );

            const w = 1 / (z + K);

            return {
              x:
                cx +
                k *
                  aspect *
                  w *
                  x,

              y:
                cy -
                k *
                  w *
                  y,

              w
            };
          });

          F.forEach((face, faceIndex) => {

            const normal = rot(
              face.n,
              sa,
              ca,
              sb,
              cb,
              sc,
              cc
            );

            if (normal[2] >= -0.02) {
              return;
            }

            const light =
              Math.max(
                0,
                normal[0] * LIGHT[0] +
                  normal[1] * LIGHT[1] +
                  normal[2] * LIGHT[2]
              );

            const brightness =
              (AMBIENT +
                (1 - AMBIENT) * light) *
              layer.bright;

            const id =
              ((depth * 8 +
                cubeIndex) *
                6 +
                faceIndex) +
              1;

            const [
              i0,
              i1,
              i2,
              i3
            ] = face.v;

            tri(
              points[i0],
              points[i1],
              points[i2],
              brightness,
              id,
              depth
            );

            tri(
              points[i0],
              points[i2],
              points[i3],
              brightness,
              id,
              depth
            );
          });
        });
      });

      const top = RAMP.length - 1;

      for (
        let y = 0, i = 0;
        y < rows;
        y++
      ) {
        for (
          let x = 0;
          x < cols;
          x++, i++
        ) {

          if (lay[i] < 0) {
            out[i] = " ";
            continue;
          }

          const grain =
            ((((x * 374761393) ^
              (y * 668265263)) >>>
              0) %
              1000) /
              1000 -
            0.5;

          let index = Math.round(
            (shade[i] +
              grain * DITHER) *
              top
          );

          const edge =
            (x > 0 &&
              fid[i - 1] !== fid[i]) ||
            (x < cols - 1 &&
              fid[i + 1] !== fid[i]) ||
            (y > 0 &&
              fid[i - cols] !== fid[i]) ||
            (y < rows - 1 &&
              fid[i + cols] !== fid[i]);

          if (edge) {
            index++;
          }

          const ceiling = Math.round(
            top *
              LAYERS[lay[i]].bright
          );

          out[i] =
            RAMP[
              Math.max(
                0,
                Math.min(
                  ceiling,
                  index
                )
              )
            ];
        }
      }

      const lines = new Array(rows);

      for (let y = 0; y < rows; y++) {
        lines[y] = out
          .slice(
            y * cols,
            y * cols + cols
          )
          .join("");
      }

      pre.textContent =
        lines.join("\n");
    }

    measure();

    let animationFrame;
    let clock = 0;
    let last = 0;

    function handleResize() {
      measure();
      draw(clock);
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      draw(6);
    } else {

      function loop(milliseconds) {

        if (
          milliseconds - last >=
          1000 / FPS
        ) {
          last = milliseconds;
          clock = milliseconds / 1000;
          draw(clock);
        }

        animationFrame =
          requestAnimationFrame(loop);
      }

      animationFrame =
        requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };

  }, []);

  return (
    <pre
      ref={backgroundRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        margin: 0,
        font: '4px/4.6px Consolas, "DejaVu Sans Mono", ui-monospace, monospace',
        color: "#FFFFFF",
        whiteSpace: "pre",
        background: "#000000",
        maskImage:
          "radial-gradient(110% 80% at 50% 42%, transparent 0 18%, #000 56%)"
      }}
    />
  );
}

export default CubeBackground;