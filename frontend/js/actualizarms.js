function actualizar(){
    console.log("ejecutando funcion para actualizar");
    console.debug("otro mensaje");
    let message = {
        idMessage: +$("#idMessage").val(),
        messagetext: $("#messagetext").val(),

    };

    console.log(message);

    $.ajax({
        url: "localhost:8080/api/Message/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });
}