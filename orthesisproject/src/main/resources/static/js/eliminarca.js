function eliminarca(identificador){
    console.log("ejecutando funcion para eliminar");

    let reserva = {
        id: +identificador
    };

    console.log(reserva);

    $.ajax({
        url: "http://localhost:8080/api/Category/"+identificador,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        //data: JSON.stringify(reserva),
        statusCode:{
            204:function(){
                alert('Se ha eliminado la categoria');
            }
        },
    });
}