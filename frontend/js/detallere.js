$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id');
        console.log("id:"+id);
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "http://localhost:8080/api/Reservation/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);

            try { 
                llenarDatos(respuesta);
            } catch (e) {
                console.log(e);
                $("#boton").hide();
                alert('No se encuentra reserva con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    let initDate = new Date(item.startDate);
    let initDateFormatted = initDate.toISOString().split('T')[0];
    console.log(initDateFormatted);

    let finalDate = new Date(item.devolutionDate);
    let finalDateFormatted = finalDate.toISOString().split('T')[0];
    console.log(finalDateFormatted);
    

    $("#id").val(item.idReservation);
    $("#startDate").val(initDateFormatted);
    $("#devolutionDate").val(finalDateFormatted);
    $("#status").val(item.status);
}