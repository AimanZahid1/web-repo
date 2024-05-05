$(document).ready(function () {
    var textRotate = $(".txt-rotate").attr("data-rotate");
    if (textRotate) {
      var rotateText = JSON.parse(textRotate);
      rotateText.reverse(); // Reverse the array for better visual effect
  
      var currentIndex = 0;
  
      setInterval(function () {
        $(".txt-rotate").fadeOut(function () {
          $(this)
            .text(rotateText[currentIndex])
            .fadeIn();
        });
  
        currentIndex = (currentIndex + 1) % rotateText.length;
      }, 2000); // Change this value to adjust rotation speed
    }
  });
  
  
  $(document).ready(function(){
    $(".tf__subscribe_text").hide();
  
    $("#toggleBtn").click(function(e){
      e.preventDefault();
      if ($(".tf__subscribe_text").is(":visible")) {
        $(".tf__subscribe_text").slideUp();
      } else {
        $(".tf__subscribe_text").slideDown();
      }
    });
  });