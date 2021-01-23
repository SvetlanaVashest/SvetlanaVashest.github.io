$(document).ready(function () {
    $(".forms").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        var form_data = $(this).serialize();
        function setLocation(curLoc) {
            history.pushState(null, null, curLoc);
            return;
        }
        
        $.ajax({
            url: 'https://api.slapform.com/svetavashect@gmail.com',
            type: "POST",
            dataType: "json",
            url: href,
            data: {
                form_data,
                slap_captcha: false
            },
            
            success: function (response) {
                if(response.status == "success"){
                alert("Выполнено");
                } else{
                    alert ("Не выполнено: " + response.message);
                }
            },
            error: function () {
                alert("Вы уже отправляли это сообщение. ");
            }
        });
    });
});
