$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")

        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings:["Ux/Ui Designer","Website Developer","Bug Bounty Hunter"],
        typeSpeed:100,
        backspeed:60,
        loop:true
    });
    var typed = new Typed(".typing-2",{
        strings:["Ux/Ui Designer","Website Developer","Bug Bounty Hunter"],
        typeSpeed:100,
        backspeed:60,
        loop:true
    });
 
});

