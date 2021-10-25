function guardar(){
    console.log("ejecutando funcion guardar");

    let message = {
        idMessage: +$("#idMessage").val(),
        messageText: $("#messagetext").val(),
        client: {idClient: +$("#idClient").val()},
        ortopedic: {id: +$("#id").val()}
    }; 

    console.log(message);

    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha registrado el mensaje');
            }
        },
    });
}