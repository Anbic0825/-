const buttons = Array.from(document.querySelectorAll("[data-filter]"));
const projects = Array.from(document.querySelectorAll(".project"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    buttons.forEach((item) => item.classList.toggle("active", item === button));
    projects.forEach((project) => {
      const visible = filter === "all" || project.dataset.kind === filter;
      project.classList.toggle("is-hidden", !visible);
    });
  });
});
