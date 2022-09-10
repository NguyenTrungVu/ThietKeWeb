$(document).ready(function(){
    $(window).resize(function(){
        var width = $(window).width();
        console.log(width);
        if(width <= 375){
            $(".content-items .content-hide").hide()
            $("h3[type=radio]").click(function(){
                var idx = $(this).attr("idx")
                $(".content-items .content-hide").hide()
                $(`.content-items:nth-child(${idx}) .content-hide`).show()
                if($(`.content-items:nth-child(${idx}) .content-hide`).show()){
                    $("h3[type=radio]").click(function(){
                        var idx = $(this).attr("idx")
                        $(`.content-items:nth-child(${idx}) .content-hide`).hide()
                    })
                }
                else
                {
                    $("h3[type=radio]").click(function(){
                        var idx = $(this).attr("idx")
                        $(".content-items .content-hide").hide()
                        $(`.content-items:nth-child(${idx}) .content-hide`).show()
                    })
                }
            })
            
        }
        else
        $(".content-items .content-hide").show()
    })
})