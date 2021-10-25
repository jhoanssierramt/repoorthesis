function actualizarct(){
    console.log("ejecutando funcion para actualizar");
    console.debug("actualizando...");
    let client = {
        idClient: +$("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val()
    };

    console.log(client);

    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}