// Portfolio Grid Generator
class PortfolioGrid {
  constructor() {
    this.gridContainer = document.getElementById("portfolioGrid");
    this.projects = [];
    this.init();
  }

  async init() {
    try {
      await this.loadProjects();
      this.renderGrid();
    } catch (error) {
      console.error("Error initializing portfolio:", error);
      this.showError();
    }
  }

  async loadProjects() {
    const response = await fetch("data/projects.json");
    if (!response.ok) {
      throw new Error("Failed to load projects data");
    }
    this.projects = await response.json();
  }

  renderGrid() {
    this.gridContainer.innerHTML = "";

    this.projects.forEach((project) => {
      const gridItem = this.createGridItem(project);
      this.gridContainer.appendChild(gridItem);
    });
  }

  createGridItem(project) {
    const item = document.createElement("a");
    item.className = "grid-item";
    item.href = project.cta.url;
    item.target = "_blank";
    item.rel = "noopener noreferrer";

    // Create image element
    const img = document.createElement("img");
    img.className = "project-image";
    img.alt = project.title;

    // Handle image loading with fallback
    img.onerror = () => {
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder-image";
      placeholder.textContent = project.title;
      if (project.backgroundColor) {
        placeholder.style.background = project.backgroundColor;
      }
      item.replaceChild(placeholder, img);
    };

    // Apply background color to the grid item
    if (project.backgroundColor) {
      item.style.backgroundColor = project.backgroundColor;
    }

    img.src = project.thumbnail;

    // Create hover overlay
    const overlay = document.createElement("div");
    overlay.className = "hover-overlay";

    // Project title
    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;

    // Tech tags container
    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tech-tags";

    // Create tech tags
    project.techStack.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = tech;
      tagsContainer.appendChild(tag);
    });

    // Assemble overlay
    overlay.appendChild(title);
    overlay.appendChild(tagsContainer);

    // Assemble grid item
    item.appendChild(img);
    item.appendChild(overlay);

    return item;
  }

  showError() {
    this.gridContainer.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 50vh;
                color: #666;
                font-size: 1.2rem;
            ">
                <p>Unable to load portfolio projects. Please try again later.</p>
            </div>
        `;
  }
}

// Initialize portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioGrid();
});

// Handle smooth scrolling and performance
window.addEventListener("scroll", () => {
  // Add any scroll-based animations here if needed
});

// Handle window resize for responsive grid
window.addEventListener("resize", () => {
  // Grid automatically adjusts with CSS Grid, but you can add custom logic here
});
