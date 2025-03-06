

document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
  });
  

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


setInterval(showNextSlide, 3000);

function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');
  const buttons = document.querySelectorAll('.filter-btn');


  buttons.forEach(button => {
    button.classList.remove('active');
  });
  

  event.target.classList.add('active');


  products.forEach(product => {
    if (category === 'all') {
      product.style.display = 'block';
    } else {
      if (product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });
}
function showAnswer(answerId) {

  const answers = document.querySelectorAll('.answer');
  const questions = document.querySelectorAll('.faq-question');
  answers.forEach(answer => answer.classList.remove('active'));
  questions.forEach(question => question.classList.remove('active'));


  document.getElementById(answerId).classList.add('active');
  event.target.classList.add('active');
}




let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");


function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}


function handleSubscription(event) {
  event.preventDefault(); 
  
  const email = document.getElementById("email").value;
  
  if (email) {
      
      alert("404 Error: The requested page could not be found.");
      
     
      document.getElementById("email").value = '';
  }
  
  return false; 
}


    // JavaScript function to initialize the map
    function initMap() {
      // The location (latitude and longitude)
      const location = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco
      
      // Create the map, centered at the specified location
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location,
      });

      // Add a marker at the location
      const marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    }
  
