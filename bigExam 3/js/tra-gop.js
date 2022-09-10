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
        if (t >= 100)
            $("#topId").show(400)
        else
            $("#topId").hide(400)
    })

    $("#topId").click(function(){
        $('html').animate({
            'scrollTop': 0
        }, 1000)
    })

    

})

$(document).ready(function(){
    $(window).resize(function(){
        var width = $(window).width();
        console.log(width);
        if(width <= 812)
        {
            $("footer .col25 ul.lien-he").hide()
            $("footer .col25 div.media").hide()
            $("footer .col25").click(function(){
                var idx = $(this).attr('idx')
                $(`footer .col25 ul.lien-he`).hide()
                $(`footer .col25:nth-child(${idx}) ul.lien-he`).show()
            })
        }
    })

})