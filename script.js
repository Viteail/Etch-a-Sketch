const getArea = document.querySelector(".area");
const getOptions = document.querySelector(".options");
const getColorSelection = document.querySelector("#color-select");

const BUTTONCLEARCOLOR = document.createElement("button");
BUTTONCLEARCOLOR.textContent = "Clear";
getOptions.appendChild(BUTTONCLEARCOLOR);

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  getArea.appendChild(box);

  box.addEventListener(
    "mouseover",
    () => (box.style.backgroundColor = getColorSelection.value)
  );
  BUTTONCLEARCOLOR.addEventListener(
    "click",
    () => (box.style.backgroundColor = "white")
  );
}
