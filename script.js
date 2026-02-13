// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Safety check (helps debugging)
console.log({ envelope, letter, letterWindow, noBtn, yesBtn });

function pinkBoom(x, y) {
  const count = 120;            
  const spread = 320;          
  const duration = 800;        

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    p.className = "boom-particle";

    
    const colors = ["#ff4fa3", "#ff7ac8", "#ff9ad5", "#ff2f7a", "#ffd1e8"];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];

    
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * spread;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    
    const size = 6 + Math.random() * 10;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    document.body.appendChild(p);

   
    p.animate(
      [
        { transform: "translate(-50%, -50%) translate(0px, 0px)", opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px)`, opacity: 0 }
      ],
      { duration, easing: "cubic-bezier(.1,.9,.2,1)" }
    );

    setTimeout(() => p.remove(), duration + 50);
  }
}

// Click Envelope
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});

// Move the NO button
noBtn.addEventListener("mouseover", () => {
  const distance = 150; // min=max=200 so just use 200
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  const rect = yesBtn.getBoundingClientRect();
  pinkBoom(rect.left + rect.width / 2, rect.top + rect.height / 2);
  catImg.src = "./meow-meme.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});








