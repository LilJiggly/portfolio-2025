export function renderCTA(data) {
  const container = document.getElementById("cta");
  container.innerHTML = `
    <a href="${data.cta.url}" target="_blank">
      <button>${data.cta.label}</button>
    </a>
  `;
}
