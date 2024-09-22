function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createBoxes(amount);
  input.value = ""; // Очищаємо значення інпуту після створення
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  // Очищаємо попередню колекцію
  boxesContainer.innerHTML = "";

  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxSize += 10; // Збільшуємо розмір кожного наступного на 10px

    boxes.push(box);
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; // Очищаємо контейнер
}
