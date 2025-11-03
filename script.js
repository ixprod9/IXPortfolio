document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  const links = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const tab = link.dataset.tab;

      links.forEach(l => l.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(tab)?.classList.add("active");
    });
  });

  // Modal for projects
  const projects = {
    project1: {
      title: "Stylized Character Lookdev",
      images: [
        "assets/projects/project1-1.jpg",
        "assets/projects/project1-2.jpg"
      ],
      info: "A stylized character lookdev focusing on skin shaders and lighting.",
      software: "Maya, Substance Painter, Arnold"
    },
    project2: {
      title: "Procedural Environment",
      images: [
        "assets/projects/project2-1.jpg",
        "assets/projects/project2-2.jpg"
      ],
      info: "A fully procedural stylized environment with foliage and volumetrics.",
      software: "Blender, Unreal Engine"
    }
  };

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  if (!modal || !modalBody || !closeBtn) {
    console.warn("Modal elements not found — skipping modal setup.");
    return;
  }

  // Project card click events
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const data = projects[card.dataset.project];
      if (!data) return;

      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.info}</p>
        <p><strong>Software:</strong> ${data.software}</p>
        <div class="modal-images">
          ${data.images.map(img => `<img src="${img}" style="width:100%;margin-top:1em;">`).join("")}
        </div>
      `;

      modal.classList.remove("hidden");
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });
});
