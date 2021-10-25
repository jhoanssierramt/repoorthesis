function guardarct(){
    console.log("ejecutando funcion guardar");

    let client = {
        id: +$("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: +$("#age").val(),
    }; 

    console.log(client);

    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha registrado el cliente');
            }
        },
    });

}