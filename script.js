document.getElementById("changeBtn").onclick = () => {
  document.body.style.backgroundColor = "lightblue";
};

const hoverBox = document.getElementById("hoverBox");
hoverBox.onmouseover = () => (hoverBox.style.backgroundColor = "yellow");
hoverBox.onmouseout = () => (hoverBox.style.backgroundColor = "lightgray");

document.getElementById("keyInput").onkeyup = (e) => {
  document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
};

document.getElementById("changeBtn").ondblclick = () => {
  alert("Secret double-click unlocked!");
};

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150/FF0000",
  "https://via.placeholder.com/150/00FF00",
];
let currentImg = 0;
document.getElementById("nextImg").onclick = () => {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImg];
};

document.querySelector(".accordion-header").onclick = () => {
  const content = document.querySelector(".accordion-content");
  content.style.display = content.style.display === "block" ? "none" : "block";
};

document.getElementById("myForm").onsubmit = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = "Invalid email format";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters";
  } else {
    feedback.textContent = "Form is valid!";
  }
};
