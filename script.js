document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    project1: {
      title: "Lads Event Key Art",
      media: [
        { type: "image", src: "assets/projects/project1-1.png" },
        { type: "image", src: "assets/projects/project1-2.png" },
        { type: "video", src: "assets/projects/project1-demo.mp4" }
      ],
      info: "Key art made for the Lads November Event, yeah I made dis myself, model and everythin.",
      software: "Blender, Substance Painter, Marmoset Toolbag"
    },

    project2: {
      title: "Procedural Environment",
      media: [
        { type: "image", src: "assets/projects/project2-1.jpg" },
        { type: "image", src: "assets/projects/project2-2.jpg" }
      ],
      info: "A fully procedural stylized environment with foliage and volumetrics.",
      software: "Blender, Unreal Engine"
    },

    project3: {
      title: "Project 3 Title",
      media: [
        { type: "image", src: "assets/projects/project3-1.png" },
        { type: "image", src: "assets/projects/project3-2.png" }
      ],
      info: "Description for project 3.",
      software: "Software used here"
    },

    project4: {
      title: "Project 4 Title",
      media: [
        { type: "image", src: "assets/projects/project4-1.png" },
        { type: "image", src: "assets/projects/project4-2.png" }
      ],
      info: "Description for project 4.",
      software: "Software used here"
    },

    project5: {
      title: "Project 5 Title",
      media: [
        { type: "image", src: "assets/projects/project5-1.png" },
        { type: "image", src: "assets/projects/project5-2.png" }
      ],
      info: "Description for project 5.",
      software: "Software used here"
    },

    project6: {
      title: "Project 6 Title",
      media: [
        { type: "image", src: "assets/projects/project6-1.png" },
        { type: "image", src: "assets/projects/project6-2.png" },
		{ type: "video", src: "assets/projects/project1-demo.mp4" }
      ],
      info: "Description for project 6.",
      software: "Software used here"
    },

    project7: {
      title: "Project 7 Title",
      media: [
        { type: "image", src: "assets/projects/project7-1.png" },
        { type: "image", src: "assets/projects/project7-2.png" }
      ],
      info: "Description for project 7.",
      software: "Software used here"
    },

    project8: {
      title: "Project 8 Title",
      media: [
        { type: "image", src: "assets/projects/project8-1.png" },
        { type: "image", src: "assets/projects/project8-2.png" }
      ],
      info: "Description for project 8.",
      software: "Software used here"
    },

    project9: {
      title: "Project 9 Title",
      media: [
        { type: "image", src: "assets/projects/project9-1.png" },
        { type: "image", src: "assets/projects/project9-2.png" }
      ],
      info: "Description for project 9.",
      software: "Software used here"
    },

    project10: {
      title: "Project 10 Title",
      media: [
        { type: "image", src: "assets/projects/project10-1.png" },
        { type: "image", src: "assets/projects/project10-2.png" }
      ],
      info: "Description for project 10.",
      software: "Software used here"
    },

    project11: {
      title: "Project 11 Title",
      media: [
        { type: "image", src: "assets/projects/project11-1.png" },
        { type: "image", src: "assets/projects/project11-2.png" }
      ],
      info: "Description for project 11.",
      software: "Software used here"
    },

    project12: {
      title: "Project 12 Title",
      media: [
        { type: "image", src: "assets/projects/project12-1.png" },
        { type: "image", src: "assets/projects/project12-2.png" }
      ],
      info: "Description for project 12.",
      software: "Software used here"
    },

    project13: {
      title: "Project 13 Title",
      media: [
        { type: "image", src: "assets/projects/project13-1.png" },
        { type: "image", src: "assets/projects/project13-2.png" }
      ],
      info: "Description for project 13.",
      software: "Software used here"
    },

    project14: {
      title: "Project 14 Title",
      media: [
        { type: "image", src: "assets/projects/project14-1.png" },
        { type: "image", src: "assets/projects/project14-2.png" }
      ],
      info: "Description for project 14.",
      software: "Software used here"
    },

    project15: {
      title: "Project 15 Title",
      media: [
        { type: "image", src: "assets/projects/project15-1.png" },
        { type: "image", src: "assets/projects/project15-2.png" }
      ],
      info: "Description for project 15.",
      software: "Software used here"
    },

    project16: {
      title: "Project 16 Title",
      media: [
        { type: "image", src: "assets/projects/project16-1.png" },
        { type: "image", src: "assets/projects/project16-2.png" }
      ],
      info: "Description for project 16.",
      software: "Software used here"
    },

    project17: {
      title: "Project 17 Title",
      media: [
        { type: "image", src: "assets/projects/project17-1.png" },
        { type: "image", src: "assets/projects/project17-2.png" }
      ],
      info: "Description for project 17.",
      software: "Software used here"
    },

    project18: {
      title: "Project 18 Title",
      media: [
        { type: "image", src: "assets/projects/project18-1.png" },
        { type: "image", src: "assets/projects/project18-2.png" }
      ],
      info: "Description for project 18.",
      software: "Software used here"
    },

    project19: {
      title: "Project 19 Title",
      media: [
        { type: "image", src: "assets/projects/project19-1.png" },
        { type: "image", src: "assets/projects/project19-2.png" }
      ],
      info: "Description for project 19.",
      software: "Software used here"
    },

    project20: {
      title: "Project 20 Title",
      media: [
        { type: "image", src: "assets/projects/project20-1.png" },
        { type: "image", src: "assets/projects/project20-2.png" }
      ],
      info: "Description for project 20.",
      software: "Software used here"
    }
  };

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");

  if (modal && modalBody && closeBtn) {
    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const data = projects[card.dataset.project];
        if (!data) return;

        const mediaHTML = data.media.map(item => {
          if (item.type === "video") {
            return `
              <video controls style="width:100%;border-radius:10px;margin-top:1em;">
                <source src="${item.src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            `;
          } else if (item.type === "image") {
            return `
              <img src="${item.src}" alt="${data.title}" class="zoomable-image"
                   style="width:100%;border-radius:10px;margin-top:1em;cursor:zoom-in;">
            `;
          }
          return "";
        }).join("");

        modalBody.innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.info}</p>
          <p><strong>Software:</strong> ${data.software}</p>
          <div class="modal-media">${mediaHTML}</div>
        `;

        modal.classList.remove("hidden");
      });
    });

    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  // === Image Zoom Overlay ===
  const zoomOverlay = document.createElement("div");
  zoomOverlay.id = "image-zoom-overlay";
  zoomOverlay.innerHTML = `<img src="" alt="Zoomed Image">`;
  document.body.appendChild(zoomOverlay);

  const zoomImg = zoomOverlay.querySelector("img");
  let scale = 1;
  let isDragging = false;
  let startX, startY;
  let translateX = 0, translateY = 0;

  document.addEventListener("click", e => {
    const img = e.target.closest(".zoomable-image");
    if (!img) return;
    zoomImg.src = img.src;
    zoomOverlay.classList.add("active");
    scale = 1;
    translateX = 0;
    translateY = 0;
    zoomImg.style.transform = `translate(0px, 0px) scale(${scale})`;
  });

  zoomOverlay.addEventListener("click", e => {
    if (e.target === zoomOverlay) zoomOverlay.classList.remove("active");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") zoomOverlay.classList.remove("active");
  });

  zoomOverlay.addEventListener("wheel", e => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    scale = Math.min(Math.max(0.5, scale - delta * 0.1), 4);
    zoomImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  });

  zoomImg.addEventListener("mousedown", e => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    zoomImg.style.cursor = "grabbing";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    zoomImg.style.cursor = "grab";
  });

   document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    zoomImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  });

  // === Background Video Fade on Tab Visibility ===
  const bgVideo = document.getElementById("bg-video");
  if (bgVideo) {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        bgVideo.style.transition = "opacity 0.8s ease";
        bgVideo.style.opacity = 0;
      } else {
        bgVideo.style.transition = "opacity 0.8s ease";
        bgVideo.style.opacity = 0.3; // match your background opacity
      }
    });
  }

  // === Scroll Arrow Functionality ===
  const arrow = document.querySelector(".scroll-arrow");
  if (arrow) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        arrow.style.opacity = 1;
      } else {
        arrow.style.opacity = 0;
      }
    });

    arrow.addEventListener("click", () => {
      window.location.href = "projects.html";
    });
  }
});
