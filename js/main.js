jQuery(document).ready(function($){
    $(window).on("scroll",function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > 100){
            $("header").addClass("sticky")
        }else{
            $("header").removeClass("sticky");
        }
    })


    /** Type Writer Effect */
    var wordsArray = ["Beautiful","Responsive","Highly Optimized","Lightning Fast","Highly Secured","Eye Catchy"];
    new TypeIt('.ajds',{strings:wordsArray,breakLines: false,loop:true,speed:120,deleteSpeed:100}).go();

})