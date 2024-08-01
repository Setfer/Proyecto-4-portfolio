import "./links.css"

export const link = (texto, clase = "", enlace = "#") => {
  return `<a href= "${enlace}" class =" link ${clase}"> ${texto}</a>`;
};

