function eliminarorth(identificador){
    console.log("ejecutando funcion para eliminar");

    let ortopedic = {
        id: +identificador
    };

    console.log(ortopedic);

    $.ajax({
        url: "http://localhost:8080/api/Ortopedic/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        //data: JSON.stringify(ortopedic),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la órtesis');
            }
        },
    });
}