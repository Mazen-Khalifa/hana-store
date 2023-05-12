// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }
  function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Please enter both username and password.");
    } else if (username == "admin" && password == "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  }function submitReview() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var comment = document.getElementById("comment").value;
  
    if (name == "" || email == "" || comment == "") {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your review!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("rating").value = "5";
      document.getElementById("comment").value = "";
    }
  }
  const removeBtns = document.querySelectorAll('.remove-btn');

removeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
});