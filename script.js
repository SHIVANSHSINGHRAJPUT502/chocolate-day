const chocolates = document.querySelectorAll('.chocolate');
const messageBox = document.querySelector('.message-box');
const messageText = document.getElementById('message');

const messages = [
  "You’re sweeter than chocolate… and way more addictive.",
  "If smiles were calories, you’d be illegal.",
  "You don’t try to be cute. That’s the dangerous part.",
  "You have the kind of charm people remember at night.",
  "You feel like comfort… with a little trouble mixed in 😏",
  "Some people talk. You just glow.",
  "You’re proof that simple can still be stunning.",
  "You have that ‘don’t look too long’ kind of beauty.",
  "You make silence feel warm.",
  "If I had one chocolate left, I’d still share it with you.",
  "You’re soft… but not weak.",
  "You’re the reason chocolates exist.",
  "You don’t steal hearts. People give them.",
  "You’re calm, but I know you’re chaos in disguise.",
  "This is getting unfair… you’re too sweet.",
  "Okay last one… but you’re my favorite part 🍫❤️"
];


let clickedCount = 0;

chocolates.forEach(choco => {
  choco.addEventListener('click', () => {

    // 🚫 prevent double counting
    if (choco.classList.contains("used")) return;

    const index = Number(choco.dataset.index);

    choco.classList.add('used', 'crack');
    messageText.textContent = messages[index];
    messageBox.classList.remove('hidden');

    clickedCount++;

    if (clickedCount === chocolates.length) {
      setTimeout(() => {
        document.querySelector(".final-screen").classList.add("show");
      }, 1200);
    }

    createHearts();
  });
});

function createHearts() {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.fontSize = '50px';
    heart.textContent = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}

