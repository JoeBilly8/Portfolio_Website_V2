
document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
});