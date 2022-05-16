const getContainer = document.querySelector(".container");
const getOptions = document.querySelector(".options");
const getColorSelection = document.querySelector("#color-select");
const getSquareSelection = document.querySelector("#vol-select");
const getButtonColorMode = document.querySelector("#color-mode");

const Area = document.createElement("div");
Area.classList.add("area");
getContainer.appendChild(Area);

let color = getColorSelection.value;

getButtonColorMode.addEventListener("click", colorMode);

const BUTTONRANDOMCOLOR = document.createElement("button");
BUTTONRANDOMCOLOR.textContent = "Random";
getOptions.appendChild(BUTTONRANDOMCOLOR);

BUTTONRANDOMCOLOR.addEventListener("click", () => randomcolorMode());

const BUTTONCLEARCOLOR = document.createElement("button");
BUTTONCLEARCOLOR.textContent = "Clear";
getOptions.appendChild(BUTTONCLEARCOLOR);

BUTTONCLEARCOLOR.addEventListener("click", squareSelection);

function randomcolorMode() {
  getButtonColorMode.classList.remove("colormodeeffect");
  BUTTONRANDOMCOLOR.classList.add("randomcoloreffect");
  Area.removeEventListener("mouseover", applyColorMode);
  getColorSelection.removeEventListener("change", getColor);
  Area.addEventListener("mouseover", applyRandomColor);
}

function colorMode() {
  getButtonColorMode.classList.add("colormodeeffect");
  BUTTONRANDOMCOLOR.classList.remove("randomcoloreffect");
  Area.removeEventListener("mouseover", applyRandomColor);
  color = getColorSelection.value;
  getColorSelection.addEventListener("change", getColor);
  Area.addEventListener("mouseover", applyColorMode);
}

function getColor() {
  color = getColorSelection.value;
}

function applyRandomColor(e) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = color =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
}

function applyColorMode(e) {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = color;
  }
}

function squareSelection() {
  Area.textContent = "";
  Area.style.animation = "onappear 800ms ease";
  setTimeout(() => {
    Area.style.animation = "";
  }, 800);
  const vol = getSquareSelection.value;

  for (let i = 0; i < vol * vol; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    Area.appendChild(box);

    Area.style.gridTemplateColumns = `repeat(${vol}, calc(500px / ${vol}))`;
    Area.style.gridAutoRows = `calc(500px / ${vol}))`;
  }
}

getSquareSelection.addEventListener("input", showSquareSelect);
getSquareSelection.addEventListener("change", squareSelection);

function showSquareSelect() {
  const SHOWSQUARESELECT = document.querySelector(".show-vol-select");
  SHOWSQUARESELECT.textContent =
    `${getSquareSelection.value}` + " x " + `${getSquareSelection.value}`;
}

squareSelection();
colorMode();
