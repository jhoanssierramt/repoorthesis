function eliminarct(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "http://localhost:8080/api/Client/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        //data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
}