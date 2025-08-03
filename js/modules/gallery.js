export function renderGallery(data) {
  const container = document.getElementById("gallery");
  container.innerHTML = data.gallery
    .map(
      (img) => `
    <img src="${img}" alt="Gallery image" />
  `
    )
    .join("");
}
