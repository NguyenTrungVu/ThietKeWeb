



$(document).ready(function(){
    $("button.button").click(function(){
        var ten = $('#tenId').val()
        var sdt = $('#sdtId').val()
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


        if(ten != "" && sdt != "")
            alert("ĐĂNG KÝ THÀNH CÔNG")


        
            
    })

    $("button.btn").click(function(){
        var ten = $('#tenId').val()
        var sdt = $('#sdtId').val()
        var sp = $('#ten-sp').html()
        if(ten == "" && sdt == "")
        {
            $('.modal-title').text('CHÚ Ý')
            $('.sp').text('Cần nhập đầy đủ họ tên, số điện thoại để nhân viên liên hệ.')
            $('.ten').text('Xin cảm ơn.')
        }
        if(ten != "" && sdt != "") 
        {
            $('.modal-title').text('ĐẶT HÀNG THÀNH CÔNG')
            $('.sp').text(`Tên sản phẩm: ${sp}`)
            $('.ten').text(`Họ tên: ${ten}`)
            $('.sdt').text(`Số điện thoại: ${sdt}`)
        }
    })

    
})