$( document ).ready(function() {

  $(function(){
      $("#NavbarIndex").load("./common/Navbar/navbarIndex.html");
      $("#Navbar").load("./common/Navbar/navbar.html");

      var i = 0, howManyTimes = 10000;
      function f() {
          $('#counter').text(parseInt($('#counter').text()) + 1);
          i++;
          if( i < howManyTimes ){
              setTimeout( f, 300 );
          }
      }
      f();

  });

});
