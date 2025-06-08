let samosas = 0;
let multiplier = 1;

const samosaImage = document.getElementById("big-samosa");
const counter = document.getElementById("counter");
const doubleBtn = document.getElementById("double-upgrade");
const partyBtn = document.getElementById("party-upgrade");
const feastBtn = document.getElementById("feast-upgrade");

function updateCounter() {
  counter.textContent = `Samosas: ${samosas}`;
  doubleBtn.disabled = samosas < 10;
  partyBtn.disabled = samosas < 100;
  feastBtn.disabled = samosas < 1000;
}

samosaImage.addEventListener("click", () => {
  samosas += multiplier;
  updateCounter();

  // Pop animation
  samosaImage.classList.add("pop");
  setTimeout(() => {
    samosaImage.classList.remove("pop");
  }, 100);
});

doubleBtn.addEventListener("click", () => {
  if (samosas >= 10) {
    samosas -= 10;
    multiplier = 2;
    doubleBtn.disabled = true;
    updateCounter();
  }
});

partyBtn.addEventListener("click", () => {
  if (samosas >= 100) {
    samosas -= 100;
    multiplier = 5;
    partyBtn.disabled = true;
    updateCounter();
  }
});

feastBtn.addEventListener("click", () => {
  if (samosas >= 1000) {
    samosas -= 1000;
    multiplier = 10;
    feastBtn.disabled = true;
    updateCounter();
  }
});

updateCounter();
