$(document).ready(function(){
    $(".medias").on({
        mouseenter: function(){
            $(this).css("background-color", "gray")
        },
        mouseleave: function(){
            $(this).css("background-color", "#8f8985")
        }
    }) 

    $("#topId").hide()
    $(window).scroll(function(){
        var t = $(this).scrollTop()
        if (t >= 300)
            $("#topId").show(300)
        else
            $("#topId").hide(300)
    })

    $("#topId").click(function(){
        $('html').animate({
            'scrollTop': 0
        }, 1000)
    })


    $(".cha25 .con25").click(function(){
        var c = $(this).attr('data')
        $(".carousel-inner .carousel-item img").attr("src", `${c}`)
    })
    


})