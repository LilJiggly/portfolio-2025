export function renderHeader(data) {
  const container = document.getElementById("header");
  container.innerHTML = `
    <h1>${data.title}</h1>
    <img src="${data.banner}" alt="${data.title}" />
  `;
}
