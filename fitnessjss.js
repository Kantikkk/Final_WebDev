
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')

//Dispaly Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

//Animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero',{
    duration: 0.6,
    optacity:0,
    y:-150,
    stagger:0.3

});

gsap.from('.animate-services',{
    scrollTrigger: '.animate-services',
    duration: 0.5,
    optacity:1,
    x:-150,
    stagger:0.12

});

gsap.from('.animate-img',{
    scrollTrigger: '.animate-img',
    duration: 1.2,
    optacity:0,
    x:-200,
    

});

gsap.from('.animate-membership',{
    scrollTrigger: '.animate-membership',
    duration: 0.5,
    optacity:1,
    y:-150,
    stagger:0.12

});

function submitForm() {
    // Get values from the input fields
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
  
    // Validate the form fields
    if (street === "" || city === "" || state === "" || zip === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    // Perform any additional processing or validation here
  
    // Display a success message and clear the form
    alert("Billing address submitted successfully!");
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
  }
  