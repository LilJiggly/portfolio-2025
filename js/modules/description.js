export function renderDescription(data) {
  const container = document.getElementById("description");
  container.innerHTML = `
    <h2>Description</h2>
    <p>${data.description}</p>
  `;
}
