const chocolates = document.querySelectorAll('.chocolate');
const messageBox = document.querySelector('.message-box');
const messageText = document.getElementById('message');

const messages = [
  "You’re sweeter than chocolate… and way more addictive.",
  "Your one simle😀 is enough for my daily calories needs.",
  "You don’t try to be cute🐼,because its inbuilt in u ❤️.",
  "You have the kind of charm people finding in moon 🥮at night.",
  "You feel like comfort… with a little trouble mixed in 😏",
  "Some people talk. You just glow.",
  "You’re proof that simple can still be stunning.",
  "Iam happy to have u in my life .",
  "Life without u never exist for me .",
  "If I had one chocolate left, I’d still share it with you.",
  "You’re soft… but not weak,you are honest and brave.",
  "You’re the reason chocolates exist.",
  "You don’t steal hearts, People give it to u.",
  "You’re calm, but I know you’re chaos in disguise.",
  "This is getting unfair… how a person can be that much  hot 🫠🔥.",
  "Okay last one…  you’re favorite part of my life and for me u are unreplaceable 🍫❤️"
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
      }, 2800);
    }

    createHearts();
  });
});

function shareChocolate() {
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "Chocolate for you 🍫",
      text: "Open this chocolate and see something special ❤️",
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied! Share it ❤️");
  }
}

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





