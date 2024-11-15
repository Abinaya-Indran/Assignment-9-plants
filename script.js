
// Toggle Night Mode
document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
  });
  
  // Scroll Bookmarking for Active Section
  window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    let currentSection = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

// Function to show the next slide
function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Automatically change slides every 3 seconds
setInterval(showNextSlide, 3000);
