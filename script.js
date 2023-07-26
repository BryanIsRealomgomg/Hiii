let chosenDoor;
let revealedDoor;
let hasWon = false;

function getRandomDoor() {
  return Math.floor(Math.random() * 8) + 1;
}

function revealDoor(winningDoor, chosenDoor) {
  let revealed = getRandomDoor();
  while (revealed === chosenDoor || revealed === winningDoor) {
    revealed = getRandomDoor();
  }
  return revealed;
}

function showParagraph(paragraphId) {
  const paragraphs = document.querySelectorAll(".door-paragraph");
  paragraphs.forEach((p) => (p.style.display = "none"));
  document.getElementById(paragraphId).style.display = "block";
}

function selectDoor(doorNumber) {
  if (hasWon) return;

  chosenDoor = doorNumber;
  revealedDoor = revealDoor(winningDoor, chosenDoor);

  const message = document.getElementById("message");
  message.innerText = ``;

  document.getElementById(`door${chosenDoor}`).disabled = true;
  document.getElementById(`door${revealedDoor}`).disabled = true;

  if (chosenDoor === winningDoor) {
    hasWon = true;
    message.innerText += " ";
  } else {
    message.innerText += " !";
  }

  showParagraph(`door${chosenDoor}-paragraph`);
  document.getElementById("reset").style.display = "block";
}

function resetGame() {
  chosenDoor = null;
  revealedDoor = null;
  hasWon = false;

  const doors = document.getElementsByClassName("door");
  for (let i = 0; i < doors.length; i++) {
    doors[i].disabled = false;
  }

  const message = document.getElementById("message");
  message.innerText = "Select a door:";

  const paragraphs = document.querySelectorAll(".door-paragraph");
  paragraphs.forEach((p) => (p.style.display = "none"));

  document.getElementById("reset").style.display = "none";
}

const winningDoor = getRandomDoor();

document.getElementById("door1").addEventListener("click", function () {
  selectDoor(1);
});
document.getElementById("door2").addEventListener("click", function () {
  selectDoor(2);
});
document.getElementById("door3").addEventListener("click", function () {
  selectDoor(3);
});
document.getElementById("door4").addEventListener("click", function () {
  selectDoor(4);
});
document.getElementById("door5").addEventListener("click", function () {
  selectDoor(5);
});
document.getElementById("door6").addEventListener("click", function () {
  selectDoor(6);
});
document.getElementById("door7").addEventListener("click", function () {
  selectDoor(7);
});
document.getElementById("door8").addEventListener("click", function () {
  selectDoor(8);
});

document.getElementById("reset").addEventListener("click", function () {
  resetGame();
});
