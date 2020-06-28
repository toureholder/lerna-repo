// import "../dist/wiz-button";

export default {
  title: "Button"
};

export const WizButton = () => "<wiz-button>Wiz Button</wiz-button>";

export const Button = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = "Hello Button";
  btn.addEventListener("click", e => console.log(e));
  return btn;
};
