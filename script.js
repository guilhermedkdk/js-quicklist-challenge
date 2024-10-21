const form = document.querySelector("form");
const item = document.querySelector("#item");
const checklist = document.querySelector("#checklist");
const removedWarning = document.querySelector(".removed-warning");
const warningCloseButton = document.querySelector(
  ".removed-warning img[src*='delete']"
);

removedWarning.style.display = "none";

form.onsubmit = (event) => {
  event.preventDefault();

  const newItem = document.createElement("div");
  newItem.classList.add("item");

  const newInput = document.createElement("input");
  newInput.type = "checkbox";

  const newSpan = document.createElement("span");
  newSpan.innerText = item.value;
  newSpan.classList.add("paragraph");

  const newImg = document.createElement("img");
  newImg.src = "assets/icons/trash.svg";

  newImg.onclick = () => {
    newItem.remove();

    removedWarning.style.display = "flex";

    setTimeout(() => {
      removedWarning.style.display = "none";
    }, 3000);
  };

  newItem.append(newInput, newSpan, newImg);
  checklist.append(newItem);

  item.value = "";
};

warningCloseButton.onclick = () => {
  removedWarning.style.display = "none";
};
