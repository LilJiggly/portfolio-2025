fetch("data/projects.json")
  .then((res) => res.json())
  .then((projects) => {
    const grid = document.getElementById("projects-grid");
    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <a href="project.html?id=${project.id}">
          <img src="${project.thumbnail}" alt="${project.title}" />
          <h2>${project.title}</h2>
        </a>
      `;
      grid.appendChild(card);
    });
  });
