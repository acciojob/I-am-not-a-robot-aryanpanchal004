//your code here
const images = document.querySelectorAll(".image-grid img");
const verifyBtn = document.getElementById("verify-btn");
const result = document.getElementById("result");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("selected");
  });
});

verifyBtn.addEventListener("click", () => {
  const selected = document.querySelectorAll(".selected");
  let correct = true;

  selected.forEach(img => {
    if (img.dataset.type !== "car") {
      correct = false;
    }
  });

  const totalCars = [...images].filter(img => img.dataset.type === "car").length;
  const selectedCars = [...selected].filter(img => img.dataset.type === "car").length;

  if (correct && selected.length === totalCars) {
    result.textContent = "✅ Verified!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
  }
});
