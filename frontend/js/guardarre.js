function guardarre(){
    console.log("ejecutando funcion guardar");

    let reservation = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        client: {idClient: +$("#idClient").val()},
        ortopedic: {id: +$("#id").val()}
    }; 

    console.log(reservation);

    $.ajax({
        url: "http://localhost:8080/api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reservation),
        statusCode:{
            201:function(){
                alert('Se ha registrado la reserva');
            }
        },
    });
}