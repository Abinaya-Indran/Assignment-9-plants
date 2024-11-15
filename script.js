
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

//   let currentSlide = 0;
// const slides = document.querySelectorAll(".carousel-slide");

// // Function to show the next slide
// function showNextSlide() {
//   slides[currentSlide].classList.remove("active");
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add("active");
// }

// Automatically change slides every 3 seconds
setInterval(showNextSlide, 3000);
// Function to filter products
function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Update active button
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Activate the clicked button
  event.target.classList.add('active');

  // Display products based on category
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
  // Remove active class from all answers and questions
  const answers = document.querySelectorAll('.answer');
  const questions = document.querySelectorAll('.faq-question');
  answers.forEach(answer => answer.classList.remove('active'));
  questions.forEach(question => question.classList.remove('active'));

  // Add active class to the selected answer and question
  document.getElementById(answerId).classList.add('active');
  event.target.classList.add('active');
}




let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

// Function to show the next slide
function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Automatically change slides every 3 seconds
// setInterval(showNextSlide, 3000);


// const accordionItems = document.querySelectorAll('.questions__item')
// // 
// accordionItems.forEach((item) =>{
//     const accordionHeader = item.querySelector('.questions__header')

//     accordionHeader.addEventListener('click', () =>{
//         const openItem = document.querySelector('.accordion-open')

//         toggleItem(item)

//         if(openItem && openItem!== item){
//             toggleItem(openItem)
//         }
//     })
// })

// const toggleItem = (item) =>{
//     const accordionContent = item.querySelector('.questions__content')

//     if(item.classList.contains('accordion-open')){
//         accordionContent.removeAttribute('style')
//         item.classList.remove('accordion-open')
//     }else{
//         accordionContent.style.height = accordionContent.scrollHeight + 'px'
//         item.classList.add('accordion-open')
//     }

// }
// function showAnswer(answerId) {
//   // Remove active class from all answers and questions
//   const answers = document.querySelectorAll('.answer');
//   const questions = document.querySelectorAll('.faq-question');
//   answers.forEach(answer => answer.classList.remove('active'));
//   questions.forEach(question => question.classList.remove('active'));

//   // Add active class to the selected answer and question
//   document.getElementById(answerId).classList.add('active');
//   event.target.classList.add('active');
// }
function handleSubscription(event) {
  event.preventDefault(); // Prevent form submission
  
  const email = document.getElementById("email").value;
  
  if (email) {
      // Simulate a 404 error response
      alert("404 Error: The requested page could not be found.");
      
      // Optionally clear the email input after submission attempt
      document.getElementById("email").value = '';
  }
  
  return false; // To ensure form does not redirect
}


