const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");

// Event delegation

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("panel")) {
    removeActiveClasses();
    e.target.classList.add("active");
  }
});

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
