$(document).ready(function(){

    $("a").click(function(){
        event.preventDefault()
    })
    $(".thoi-han .tablecontent:not(:first-child)").hide()
    $("ul.listmonths  li").click(function(){
        var idx = $(this).attr("idx")
        $(".tablecontent").hide()
        $(`.thoi-han .tablecontent:nth-child(${idx})`).show()
        $("ul.listmonths  li b").removeClass('active')
        $(`ul.listmonths  li:nth-child(${idx}) b`).addClass('active')
    })

    $("select.prepaid-percent").change(function(){
        // HC
        var phantram = $(this).val()
        var tien = phantram * 32990000
        var g = ((32990000 - tien) / 6)
        var gmt = parseFloat(g + 11000 + 98000)
        var tt = gmt * 6.1 + tien
        
        var cl = tt - 32990000
        $(".kq").text(parseFloat(tien, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".goc").text(parseFloat(g, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".gmt").text(parseFloat(gmt, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".tongTien").text(parseFloat(tt, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".cl").text(parseFloat(cl, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")

        //FE
        var lai = (32990000 - tien) * 0.0335
        var g = ((32990000 - tien) / 6) + lai
        var gmt = g + 12000 + 165000
        var tt = tien + gmt * 6
        var cl = tt- 32990000
        $(".kq").text(parseFloat(tien, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".gocFE").text(parseFloat(g, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".gmtFE").text(parseFloat(gmt, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".tongTienFE").text(parseFloat(tt, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
        $(".clFE").text(parseFloat(cl, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +" ₫")
    })  

    $(".thu-tuc").hide()
    $(".thong-tin").hide()

    $("button.bt").click(function(){
        var gtg = $('.lai-HC').html()
        var tratruoc = $('.kq').html() 
        var gmt = $('.gmt').html()
        var tong = $('.tongTien').html()
        var gt = $('.gttt').html()
        $(".r1").text(`Lãi suất ${gtg}`)
        $(".r2").text(`${tratruoc}`)
        $(".r3").text(`${gmt}`)
        $(".r4").text(`${tong}`)
        $(".gttt").html("Giấy tờ cần có: <b>CMND + Bằng lái xe / hộ khẩu</b>")
        $(".ct").html ('Công ty tài chính: <b>Home Credit</b>')
        $(".thu-tuc").show()
        $(".thong-tin").show()
    })


    $("button#duyet").click(function(){
        var ten = $('#tenId').val()
        var sdt = $('#sdtId').val()
        var cmnd = $('#cmndId').val()
        var shk = $('#shkId').val()
        if(ten == "")
        {   
            $("#tenId").css("border", "1px solid red")
            $("#e-ten").attr('style', 'color:red')
            $("#e-ten").text('Quý khách cần điền họ tên')
            
        }
        else
        {
            $("#tenId").css('border', 'solid 1px #eee')
            $("#e-ten").text('')
        }


        if(sdt == "")
        {   
            $("#sdtId").css("border", "1px solid red")
            $("#e-sdt").attr('style', 'color:red')
            $("#e-sdt").text('Quý khách cần điền số điện thoại')
        }
        else
        {
            $("#sdtId").css('border', 'solid 1px #eee')
            $("#e-sdt").text('')
        }

        if(cmnd == "")
        {   
            $("#cmndId").css("border", "1px solid red")
            $("#e-cmnd").attr('style', 'color:red')
            $("#e-cmnd").text('Quý khách cần điền đúng số CMND')
            
        }
        else
        {
            $("#cmndId").css('border', 'solid 1px #eee')
            $("#e-cmnd").text('')
        }


        if(shk == "")
        {   
            $("#shkId").css("border", "1px solid red")
            $("#e-shk").attr('style', 'color:red')
            $("#e-shk").text('Quý khách cần điền thông tin sổ họ khẩu')
        }
        else
        {
            $("#shkId").css('border', 'solid 1px #eee')
            $("#e-shk").text('')
        }


        if((ten != "" && sdt != "") && (cmnd != "" && shk != ""))
            alert('QUÝ KHÁCH ĐÃ ĐĂNG KÝ THÀNH CÔNG')

        
            
    })




})
