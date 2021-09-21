function getComponent() {
  const element = document.createElement("button");

  element.innerText = "lazy load";
  element.addEventListener("click", (e) => {
    const user = import("./user");
  });
  return element;
}
document.body.appendChild(getComponent());
