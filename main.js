$('#btn').click(function(){
    $.ajax({
        url:'http//lar.daugavpils.rtu.lv/echo1.php/',
        method:"GET",
        success:function(data){
           $('#text').html(data)
           $('#changeColor').css('display',"inline-block")
        },
        error:function (request, status, error) {
            alert(error);
        }
    })
})


$('#changeColor').click(function(){
    $("#text").css("color","red")
    $(this).html("Refresh")
    $(this).click(function(){
        location.reload()
    })
})
