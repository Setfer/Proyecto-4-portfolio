import './button-style.css'



export const button = (texto, clase = "") => {
  return `<button href="#" class =" button ${clase}"> ${texto}</button>`;
};