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
        alert("Congratulations, your are done!");
      }   
    });

    $('form input').keypress(function(event) {
      if (event.which === 13) {
        event.preventDefault();
        var $inputs = $(this).parents('form').find('input');
        var $nextInput = $inputs.eq($inputs.index(this) + 1);
        $nextInput.focus();
      }
    });

    
  $('form input').mousemove(function(event) {
    var inputName = $(this).attr('name');
    var tooltipText = '';

    switch (inputName) {
      case 'name':
        tooltipText = 'Valid name format: John Doe';
        break;
      case 'debit-card':
        tooltipText = 'Valid card number format: XXXX-XXXX-XXXX-XXXX';
        break;
      case 'debit-card-date':
        tooltipText = 'Valid expiration date format: MM/YY';
        break;
    }

    $('.tooltip').text(tooltipText);
    $('.tooltip').css({
      'top': event.pageY + 10,
      'left': event.pageX + 10
    });
  });

  $('form input').mouseenter(function() {
    $('.tooltip').show();
  });

  $('form input').mouseleave(function() {
    $('.tooltip').hide();
  });

    $('.buy-button').click(function() {
      var selectedPlan = $(this).data('plan');
      $('#package-select').val(selectedPlan);
      $('#package-select').addClass('is-selected');
  
      var personalSectionOffset = $('#personal-section').offset().top;
  
      $('html, body').animate({
        scrollTop: personalSectionOffset
      }, 200);
    });
  });
