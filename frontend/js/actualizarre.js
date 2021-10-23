function actualizarre(){
    console.log("ejecutando funcion para actualizar");
    let reservation = {
        idReservation: +$("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        ortopedic: $("#ortopedic").val(),
        client: $("#client").val(),
        score: $("#score").val()
    };

    console.log(reservation);

    $.ajax({
        url: "localhost:8080/api/Reservation/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reservation),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la reserva');
            }
        },
    });
}