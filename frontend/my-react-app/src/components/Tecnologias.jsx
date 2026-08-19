import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiLinux,
    SiKalilinux,
    SiGit,
    SiNetlify,
    SiClaude,
    SiGooglegemini,
    SiFigma
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { DiMsqlServer, DiPhotoshop } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { VscVscode, VscAzure } from "react-icons/vsc";
import {
    TbBrandAdobeXd,
    TbBrandAdobePremiere,
    TbBrandAdobeAfterEffect,
    TbBrandPowershell
} from "react-icons/tb";
import { FaWindows } from "react-icons/fa";


function Tecnologias() {

    const tecnologias = [
        { nome: "HTML", icone: SiHtml5 },
        { nome: "CSS", icone: SiCss },
        { nome: "JavaScript", icone: SiJavascript },
        { nome: "TypeScript", icone: SiTypescript },
        { nome: "React", icone: SiReact },
        { nome: "Bootstrap", icone: SiBootstrap },
        { nome: "Tailwind CSS", icone: SiTailwindcss },
        { nome: "Node.js", icone: SiNodedotjs },
        { nome: "Python", icone: SiPython },
        { nome: "MySQL", icone: SiMysql },
        { nome: "PostgreSQL", icone: SiPostgresql },
        { nome: "SQL Server", icone: DiMsqlServer },
        { nome: "Oracle", icone: GrOracle },
        { nome: "Docker", icone: SiDocker },
        { nome: "Linux", icone: SiLinux },
        { nome: "Kali Linux", icone: SiKalilinux },
        { nome: "Git", icone: SiGit },
        { nome: "VS Code", icone: VscVscode },
        { nome: "Netlify", icone: SiNetlify },
        { nome: "ChatGPT", icone: RiOpenaiFill },
        { nome: "Claude Code", icone: SiClaude },
        { nome: "Gemini", icone: SiGooglegemini },
        { nome: "Figma", icone: SiFigma },
        { nome: "Adobe XD", icone: TbBrandAdobeXd },
        { nome: "Photoshop", icone: DiPhotoshop },
        { nome: "Premiere Pro", icone: TbBrandAdobePremiere },
        { nome: "After Effects", icone: TbBrandAdobeAfterEffect },
        { nome: "Windows 11", icone: FaWindows },
        { nome: "PowerShell", icone: TbBrandPowershell },
        { nome: "Azure", icone: VscAzure }
    ];


    return (
        <section
            id="tecnologias"
            className="relative z-10 text-white px-6 py-24"
        >

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    Tecnologias
                </h2>

                <p className="text-slate-300 text-center mt-4">
                    Tecnologias que estou estudando e utilizando nos meus projetos.
                </p>


                <div className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    gap-4
                    mt-12
                ">

                    {tecnologias.map((tecnologia) => {

                        const Icone = tecnologia.icone;

                        return (
                            <div
                                key={tecnologia.nome}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    p-5
                                    rounded-2xl
                                    bg-slate-900/40
                                    border
                                    border-white/10
                                    backdrop-blur-sm
                                    hover:bg-slate-900/70
                                    hover:border-white/20
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
                            >

                                <Icone
                                    className="
                                        text-5xl
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <span className="text-sm text-slate-300 text-center">
                                    {tecnologia.nome}
                                </span>

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
}

export default Tecnologias;
