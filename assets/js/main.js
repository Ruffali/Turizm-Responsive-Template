$(document).ready(function () {

$(window).scroll(function(){
    var scrollSize = window.scrollY;
    if(scrollSize>20){
        $("#navbar").css("top","0px");
        $("#navbar").css("padding","15px");
        
    }else{
        $("#navbar").css("top","54px");
        $("#navbar").css("padding","20px");
    }
})




    // Coursels Starts
    $('.owl-carousel').owlCarousel({
        animateIn:"fadeIn",
        animateOut:"fadeOut",
        loop: true,
        items:2,
        stagePadding: 0,
        // margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 4500,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        // dotsEach:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    var owl = $('.section2 .owl-carousel');
    



    $('.section2 .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.section2 .customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');

    });

    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            owl.trigger('next.owl.carousel');
        }
        if (event.keyCode == 37) {
            owl.trigger('prev.owl.carousel');
        }
    });
    
    // Coursels  End

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



//   reservation

$(".flightBtn").click(function(){
    $(".hotel").addClass("non");
    $(".flight").removeClass("non");
    

})

$(".hotelBtn").click(function(){
    $(".flight").addClass("non");
    $(".hotel").removeClass("non");
    

})




// reservation-end


// video

$(".fa-play-circle").on("click",function(){

    $(".openVideo").css("display","block")
    $(".videoCamp").css("display","block")
    $("body").css("overflow-y","hidden")
    $(".scrollToTop").css("visibility","hidden")
});
$(".fa-window-close").on("click",function(){

    $('video').trigger('pause')
    $(".openVideo").css("display","none")
    $(".videoCamp").css("display","none")
    $("body").css("overflow-y","visible")
    $(".scrollToTop").css("visibility","visible")

});
// video-end

// scroll
if($(window).scrollTop()<400){
    $(".scrollToTop").hide()
}

$(window).scroll(function(){
    if($(this).scrollTop()>300){
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
       
  
// age-start
// var sel = $(".child select")

// sel.on("change",function(){
//     if($(".child select option").val()!=0){
//      $(".age").css("display","block")

//     }else{
   
        
//     }

function displayVals() {
    var singleValues = $( "#age" ).val();
    if(singleValues==0){
        $(".age").css("display","none")
    }else{
        $(".age").css("display","block")
    }
    // console.log(singleValues)
  }
   
  $( ".child select" ).change( displayVals );
  displayVals();

// });


// age-End



// calendar-START

function myFunction() {
    var now = new Date();
    var dd = now.getDate();
    var mm = now.getMonth()+1;
    var yyyy  = now.getFullYear();
    if(dd<10){
        dd = "0"+dd
    }
    if(mm<10){
        mm = "0"+mm
    }
    document.getElementById("check-in").min = yyyy+"-"+mm+"-"+dd;
    
    document.querySelector("#check-in").addEventListener("change",function(){
        // document.getElementById("check-out").min  = document.getElementById("check-in").min
    var val = document.getElementById("check-in").value;
    document.getElementById("check-out").value = val;
    document.getElementById("check-out").min = val;
    
    })


  
    
    
    
}
myFunction()
// calendar-END

   

});


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myLocation");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}