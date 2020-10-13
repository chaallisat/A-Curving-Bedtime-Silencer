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

  
  // var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });
        