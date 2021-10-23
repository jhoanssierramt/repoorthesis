function eliminarct(identificadorct){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificadorct
    };

    console.log(client);

    $.ajax({
        url: "http://localhost:8080/api/Client/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
}