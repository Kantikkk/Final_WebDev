$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var name = $('#name').val();
      var surname = $('#surname').val();
      var birthday = $('#birthday').val();
      var email = $('#email').val();
      var debitCard = $('#debit-card').val();
      var debitCardDate = $('#debit-card-date').val();
  
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear() % 100;
      var currentMonth = currentDate.getMonth() + 1;
      var inputDate = new Date("20" + debitCardDate.split('/')[1], debitCardDate.split('/')[0] - 1);
      var inputYear = inputDate.getFullYear() % 100;
      var inputMonth = inputDate.getMonth() + 1;
  
      if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
        alert("Invalid debit card expiration date!");
      } else {
        alert("Congratulations, your information is correct!");
      }
    });
  });
  