$(document).ready(function(){


    $(".fa-star").click(function(){
        $("i.fa-star").css('background-color', 'white')
        var i = $('.fa-star')
        var x = $(this).attr('idx')
        for(var j = 0; j < x; j++)
        {
            $(i[j]).css('background-color', 'gold')
        }
    })
    

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



    $(".minh-hoas img").click(function(){
        $(".san-pham img").attr("src", $(this).attr("src"))
    })

    $(".button i").click(function(){
        var c = $(this).attr('data')
        $(".san-pham img").attr("src", `images/${c}.jpg`)
    })
    $(".phien-ban div").click(function(){
        var x = $(this).attr('data')
        $(".san-pham img").attr("src", `images/${x}_1.jpg`)
        var img = $(".minh-hoas img")
        for(var i = 0; i < img.length; i++)
                $(img[i]).attr("src", `images/${x}_${i+1}.jpg`)
    })

    $(".xem div").click(function(){
        $(".mo-ta").css("height", "auto")
        $(this).hide()
    })

    $(".xem-dt div").click(function(){
        $(".spif").css("height", "auto")
        $(this).hide()
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