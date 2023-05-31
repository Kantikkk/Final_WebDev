
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
  document.getElementById("buy-button").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("last-name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postcode = document.getElementById("postcode").value;
    var orderComments = document.getElementById("order-comments").value;
  
    // Здесь можно выполнить дополнительные действия, например, отправить данные на сервер
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Postcode:", postcode);
    console.log("Order Comments:", orderComments);
  });
  
  document.getElementById("buy-button").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("last-name").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postcode = document.getElementById("postcode").value;
    var orderComments = document.getElementById("order-comments").value;
    var cardNumber = document.getElementById("card-number").value;
    var nameOnCard = document.getElementById("name-on-card").value;
    var expirationDate = document.getElementById("expiration-date").value;
    var securityCode = document.getElementById("security-code").value;
  
    // Здесь можно выполнить дополнительные действия, например, отправить данные на сервер
    console.log("Email:", email);
    console.log("Name:", name);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Postcode:", postcode);
    console.log("Order Comments:", orderComments);
    console.log("Card Number:", cardNumber);
    console.log("Name on Card:", nameOnCard);
    console.log("Expiration Date:", expirationDate);
    console.log("Security Code:", securityCode);
  });
  