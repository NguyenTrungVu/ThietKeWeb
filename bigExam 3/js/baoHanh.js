$(document).ready(function(){

    $(".menu-items .group-tab").hide()
    $("button[type=radio]").click(function(){
        var idx = $(this).attr("idx")
        $(".menu-items .group-tab").hide()
        $(`.left .menu-items:nth-child(${idx}) .group-tab`).show()


        
        var idx = $(this).attr("idx")
        $(".right .content-items").hide()
        $(`.right .content-items:nth-child(${idx})`).show()
        $(".content-items .bh").hide()
        $(".content-items .bh:nth-child(1)").show()
        
        
        $("button[type=radio]").removeClass('active')
        $(this).addClass('active')
        $("button.con").removeClass('active')
        $(".group-tab div:nth-child(1) button.con").addClass('active')

        
    })

    $(".right .content-items:not(:first-child)").hide();




    $("button.con").click(function(){
        var idx = $(this).attr("idx")
        $(".content-items .bh").hide()
        $(`.content-items .bh:nth-child(${idx})`).show()
        $("button.con").removeClass('active')
        $(this).addClass('active')
    })


    

})