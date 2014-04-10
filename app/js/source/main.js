(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#bttn').click(doStuff);
    $('#bttn2').click(doStuff2);
    $('#bttn3').click(doStuff3);
    $('#bttn4').click(doStuff4);
    $('#bttn5').click(doStuff5);
    $('#bttn6').click(doStuff6);
    $('#bttn7').click(doStuff7);
  }

  function doStuff(){
    $('h1').css('color', 'red');
    $('h2').css('background-color', '#AABBCC');
    $('h3').text('Seth');
  }

  function doStuff2(){
    $('#bttn').text('WoooHooo');
  }

  function doStuff3(){
    $('body').addClass('alert');
  }

  function doStuff4(){
    $('body').removeClass('alert');
  }

  function doStuff5(){
    $('body').toggleClass('alert');
  }

  function doStuff6(){
    var x = $('#tb1').val();
    $('h1').text(x);
    $('h1').text(x.toUpperCase());
  }

  function doStuff7(){
    var x = $('#tb1').val();
    $('h3').css('color', x);
  }

})();
