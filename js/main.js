// slider works
$(window).on("load",function(){
    // console.log("hii")
    //home section slideshow
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    // console.log(slideLen)

    function slideShow(){
        console.log(slideIndex)
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
});


// brides grooms hie and show
$(document).ready(function(){

    //nav toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        };
    })

    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    //scrollIt
    $.scrollIt({
        topOffset: -50
    });

    //people Filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        // if ($(this).hasClass("active")){
        //     return;            
        // }
        // else{
        // peopleFilter($(this).attr("data-target"))
        // }

        // anothr way
        if (!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"))
        }
    })
    function peopleFilter(target){
        console.log(target)
      $(".filter-btn").removeClass("active");
      $(".filter-btn[data-target='"+target+"']").addClass("active");
      $(".people-item").hide();
      $(".people-item[data-category='"+target+"']").fadeIn();
    }

    //gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup img").css("max-height",wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;

    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();

    })

    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
        // console.log(itemIndex)
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
        // console.log(itemIndex)
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        // console.log(imgSrc);
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }

    //close X button popup nd hide gallery popup
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    //hide gallery popup when clicked outside of gp-container
    $(".gallery-popup").click(function(event){
        // console.log(event.target)
        if($(event.target).hasClass("open")){
            // console.log("true")
            $(".gallery-popup").removeClass("open");
        }
    })
})



















