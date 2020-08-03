// Materialize sideNavBar JS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
  });
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $(".sidenav-trigger").on("click", function(event) {
    var instance = M.Sidenav.getInstance(elems);
    instance.open();
  });