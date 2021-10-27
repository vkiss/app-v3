import linkBlank from "$/assets/icons/external-link.svg";

export default ( link ) => {
  return [
    {
      "type": "link",
      "icon": linkBlank,
      "title": "abrir em uma nova janela",
      "link": link
    }
  ];
};
