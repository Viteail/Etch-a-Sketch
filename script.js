const getContainer = document.querySelector(".container");
const getOptions = document.querySelector(".options");
const getColorSelection = document.querySelector("#color-select");
const getSquareSelection = document.querySelector("#vol-select");

const Area = document.createElement("div");
Area.classList.add("area");
getContainer.appendChild(Area);

const BUTTONCLEARCOLOR = document.createElement("button");
BUTTONCLEARCOLOR.textContent = "Clear";
getOptions.appendChild(BUTTONCLEARCOLOR);
BUTTONCLEARCOLOR.addEventListener("click", squareSelection);

function squareSelection() {
  Area.textContent = "";
  const vol = getSquareSelection.value;
  Area.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box"))
      e.target.style.backgroundColor = getColorSelection.value;
  });

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