var getReservationByPeriod = function () {
    let fi = $("#startDate").val();
    let ff = $("#devolutionDate").val();
    console.log(fi);
    console.log(ff);

    $.ajax({
        url: "/api/Reservation/report-dates/" + fi + "/" + ff,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaxFecha(respuesta);
        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
            alert('ha sucedido un problema');
        }
    });
}

var mostrarRespuestaxFecha = function (items) {
    var tabla = `<table class="table">
                  <tr>
                    <th>ID RESERVATION</th>
                    <th>START DATE</th>
                    <th>DEVOLUTION DATE</th>
                    <th>STATUS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                    <td>${items[i].idReservation}</td>
                    <td>${items[i].startDate.substring(0, 10)}</td>
                    <td>${items[i].devolutionDate.substring(0, 10)}</td>
                    <td>${items[i].status}</td>
                    </tr>`;
    }
    tabla += `</table>`;

    $("#tablaDates").html(tabla);
}

var getCountStatusReservation = function () {

    $.ajax({
        url: "/api/Reservation/report-status",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            let respuestajson = JSON.parse(JSON.stringify(respuesta, null));
            console.log(respuestajson);
            mostrarRespuestaxStatus(respuestajson);

        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
            alert('ha sucedido un problema');
        }
    });
}

var mostrarRespuestaxStatus = function (items) {
    var tabla = `<table class="table">
                  <tr>
                    <th>COMPLETED RESERVATIONS</th>
                    <th>CANCELLED RESERVATIONS</th>
                  </tr>`;



    tabla += `<tr>
                   <td>${items.completed}</td>
                   <td>${items.cancelled}</td>
                </tr>`;
    tabla += `</table>`;

    $("#tablaStatus").html(tabla);
}
var getReservationByClient = function () {

    $.ajax({
        url: "/api/Reservation/report-clients",
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {

            console.log(respuesta)
            mostrarRespuestaxClient(respuesta);

        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
            alert('ha sucedido un problema');
        }
    });
}

var mostrarRespuestaxClient = function (items) {
    var tabla = `<table class="table">
                  <tr>
                    <th>CLIENT NAME</th>
                    <th>TOTAL RESERVATIONS</th>
                  </tr>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                               <td>${items[i].client.name}</td>
                               <td>${items[i].total}</td>
                            </tr>`;
    }
    tabla += `</table>`;

    $("#tablaClient").html(tabla);
}