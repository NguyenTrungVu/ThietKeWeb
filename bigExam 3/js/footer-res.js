$(document).ready(function(){
    $(window).resize(function(){
        var width = $(window).width();
        console.log(width);
        if(width <= 375)
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