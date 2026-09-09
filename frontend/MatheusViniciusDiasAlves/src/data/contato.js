// Ponto único de verdade dos contatos. Se mudar telefone ou e-mail, muda aqui
// e o site inteiro acompanha (Serviços, Contato e os dados estruturados).

export const contato = {
  email: "matheusviniciusdiasalves@gmail.com",
  telefone: "(43) 98850-2932",
  // formato internacional, sem símbolos — é o que o link do WhatsApp exige
  whatsapp: "5543988502932",
  github: "https://github.com/MatheusViniciusDiasAlves",
  linkedin: "https://www.linkedin.com/in/matheusviniciusdiasalves/",
};

export function linkWhatsApp(mensagem) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function linkEmail(assunto) {
  return `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}`;
}
