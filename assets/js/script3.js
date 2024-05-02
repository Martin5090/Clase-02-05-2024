$(document).ready(function(){
    $('#btnEnviar').click(function(){
        let formData = {
            username: $('#username').val(),
            password: $('#password').val()
        };
        $ajax({
            url: 'https://ejemplo.com/login',
            type: 'POST',
            dataType: 'json',
            data: formData,
            success: function(response){
                console.log('Respuesta del servidor:', response);
            },
            error: function (xhr, status, error){
                console.log('Error al enviar la solicitud:', error);
            }

        });
    });
});