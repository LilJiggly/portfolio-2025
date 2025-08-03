export function renderTechStack(data) {
  const container = document.getElementById("techstack");
  container.innerHTML = `
    <h2>Tech Stack</h2>
    <ul>
      ${data.techStack.map((tech) => `<li>${tech}</li>`).join("")}
    </ul>
  `;
}
