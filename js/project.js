import { renderHeader } from "./modules/header.js";
import { renderGallery } from "./modules/gallery.js";
import { renderTechStack } from "./modules/techstack.js";
import { renderDescription } from "./modules/description.js";
import { renderCTA } from "./modules/cta.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("data/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      renderHeader(project);
      renderGallery(project);
      renderTechStack(project);
      renderDescription(project);
      renderCTA(project);
    } else {
      document.body.innerHTML = "<p>Project not found.</p>";
    }
  });
