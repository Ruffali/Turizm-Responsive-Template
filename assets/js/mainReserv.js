$(document).ready(function () {
    // Header-lang
    
        $(".lang").click(function(){
         $(".insideLang").slideToggle()
        })
    
        $(".insideLang li").click(function(){
    
          var txt =   $(this).html();
          var angle = $(".lang .angle")
          $(".lang a").html(txt)
    
        })
    
        // Header-lang-end
    
    // scroll
    if($(window).scrollTop()<200){
        $(".scrollToTop").hide()
    }
    
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $(".scrollToTop").fadeIn(1000);
        }else{
            $(".scrollToTop").fadeOut(1000);
        }
    });
    
    $(".scrollToTop").click(function(){
        $("html, body").animate({scrollTop : 0},2000);
        return false;
    })
    
    // scroll-end
   

    // Slider

var activeIndex = 0;
var slider = document.querySelector('.slider');
var left = document.querySelector('.fa-arrow-circle-left');
var right = document.querySelector('.fa-arrow-circle-right');
var allImages = document.querySelectorAll(".wrapper li img");
var numberDiv = document.querySelector('.number');

left.onclick = function(){
    slideLeft();
}
right.onclick = function(){
    slideRight();
}

document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
        slideLeft();
    }else if(event.keyCode == 39){
        slideRight();
    }
})

for(var i = 0; i < allImages.length; i++){
    (function(){
        var current = i;
        var img = allImages[i];
        img.onclick = function(){
            activeIndex = current;
            Slide();
        }
    }())
}
function Slide(){
    // This changes Slider background
    var imgSource = allImages[activeIndex].getAttribute("src");
    slider.style.backgroundImage = "url(" + imgSource + ")";
    slider.classList.add("animation");
    setTimeout(function(){
        slider.classList.remove("animation");
    },1000)

    //This updates number div
    numberDiv.innerHTML = activeIndex+1;

    // This changes active
    var active = document.querySelector('.active');
    active.classList.remove("active");
    allImages[activeIndex].parentElement.classList.add("active");
}
function slideRight(){
    if(activeIndex == allImages.length - 1){
        activeIndex = 0;
    }else{
        activeIndex++;
    }
    Slide();
}
function slideLeft(){
    if(activeIndex == 0){
        activeIndex = allImages.length - 1;
    }else{
        activeIndex--;
    }
    Slide();
}

setInterval(function(){
    slideRight();
    Slide();
}, 4500);

    // slider-end



    // besir
    $('.right').click(function () {
        rightSlide();
    });
    $('.left').click(function () {
        leftSlide();
    });
    function rightSlide() {
        if (i > -(l - 1) * 100) {
            i -= 100;
            $('.inner').css("left", i + "%");
        } else {
            i = 0;
            $('.inner').css("left", i + "%");
        }
    }
    function leftSlide() {
        if (i < 0) {
            i += 100;
            $('.inner').css("left", i + "%");
        } else {
            i = -(l - 1) * 100;
            $('.inner').css("left", i + "%");
        }
    }
    var l = $('.slide').length;
    var i = 0;
    $('.inner').css('width', l * 100 + "%")
    $('.slide').css('width', 100 / l + "%")
    $('.wrapper .pic').click(function () {
        $('.carusel').css("display", "block");
        $('.scrollToTop').css("display", "none");
        $('.inner').css("left", $(this).index() * (-100) + "%");
        i = $(this).index() * (-100);
        $("body").css("overflow-y","hidden");
    });
    $('#close').click(function () {
        $('.carusel').css("display", "none");
        $("body").css("overflow-y","visible");
        
    });
   
    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            rightSlide();
        } else if (event.keyCode == 37) {
            leftSlide();
        } else if (event.keyCode == 27) {
            $('.carusel').css("display", "none");
        }
    });
    

    // besir-end
    });
    
    