import divider from "$/controllers/context-menu/content/divider";

import emailIcon from "$/assets/icons/email.svg";
import copyIcon from "$/assets/icons/copy.svg";

export default [
  {
    "icon": emailIcon,
    "iconAdjust": 2,
    "title": "escrever um e-mail",
    "type": "link",
    "link": document.getElementById( "email-link-desktop" ).href
  },
  // {
  //   "icon": logoXP,
  //   "title": "temos vagas para front end",
  //   "link": "mailto:vinicius.kiss@xpi.com.br?subject=Interesse na vaga de Front end"
  // },
  divider,
  {
    "icon": copyIcon,
    "type": "copy",
    "iconAdjust": 2,
    "title": "copiar endereço de e-mail",
    "copy": "contato@vkiss.com.br"
  }
];
