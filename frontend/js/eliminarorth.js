function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");

    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        url: "localhost:8080/api/Ortopedic/delete",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la orthesis');
            }
        },
    });
}