$(document).ready(function () {

    // $(window).scroll(function(){
    //     var scrollSize = window.scrollY;
    //     if(scrollSize>20){
    //         $("#navbar").css("top","0px");
    //         $("#navbar").css("padding","15px");
            
    //     }else{
    //         $("#navbar").css("top","54px");
    //         $("#navbar").css("padding","20px");
    //     }
    // })
    
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
   
    });
    
    