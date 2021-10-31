var urlBaseCategoria = "/api/Reservation";

var consultar = function(){
    $.ajax({
        url: urlBaseCategoria + "/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            actualizarTabla(respuesta);
        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
            alert('ha sucedido un problema');
        }
    });
}

var actualizarTabla = function (items) {
    var tabla = `<table class="table striped">
                    <tr>
                    <th>idReservation</th>
                    <th>startDate</th>
                    <th>devolutionDate</th>
                    <th>status</th>
                    <th>Acciones</th>
                    </tr>`;

    for (var i = 0; i < items.length; i++) {

        //Esta transformación permite que las fechas se vean adecuadamente
        //Sin embargo no sé como cambiar la zona horaria (Jhoan Sierra)
        let initDateRow = new Date(items[i].startDate);
        let initDateRowFormmated = initDateRow.toISOString().split('T')[0];

        let finalDateRow = new Date(items[i].devolutionDate);
        let finalDateRowFormmated = finalDateRow.toISOString().split('T')[0];

        tabla += `<tr>
                    <td>${items[i].idReservation}</td>
                    <td>${initDateRowFormmated}</td>
                    <td>${finalDateRowFormmated}</td>
                    <td>${items[i].status}</td>
                    <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${items[i].idReservation}, '${initDateRowFormmated}','${finalDateRowFormmated}','${items[i].status}')">
                        Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="eliminar(${items[i].idReservation})">
                        Eliminar
                    </button>
                    </td>
                </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}

$(document).ready(function () {
    console.log("document ready");
    consultar();
});

var nuevo = function () {
    $("#tituloModalCategoria").html('Nueva Reserva');
    $("#idReservation").val('');
    $("#startDate").val('');
    $("#devolutionDate").val('');
    $("status").val('');
    $('#modalCategoria').modal('show');
}

var cerrarModal = function () {
    $('#modalCategoria').modal('hide');
}

var mostrarMensaje = function (mensaje) {
    $("#mensaje").html(mensaje);
    $('#modalMensaje').modal('show');
}

var cerrarModalMensaje = function(){
    $('#modalMensaje').modal('hide');
}

var guardarCambios = function () {
    var payload;
    var method;
    var id = $("#idReservation").val();
    var msg;
    var ruta;
    if (id !== 'undefined' && id !== null && id.length > 0) {
        ruta = urlBaseCategoria + "/update";
        payload = {
            idReservation: +$("#idReservation").val(),
            startDate: $("#startDate").val(),
            devolutionDate: $("#devolutionDate").val(),
            status: $("#status").val()
            
        };
        method = "PUT";
        msg = "se ha actualizado la Reserva";
    } else {
        ruta = urlBaseCategoria + "/save";
        payload = {
            idReservation: +$("#idReservation").val(),
            startDate: $("#startDate").val(),
            devolutionDate: $("#devolutionDate").val(),
            status: $("#status").val()
        };
        method = "POST";
        msg = "se ha creado la reserva";
    }

    console.log("guardando ", payload);
    console.log("ruta ", ruta);
    console.log("method ", method);

    $.ajax({
        url: ruta,
        type: method,
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(payload),
        statusCode: {
            201: function () {
                mostrarMensaje(msg);
                cerrarModal();
                consultar();
            }
        },
    });
}

var editar = function (idReservation,startDate,devolutionDate,status) {
    $("#tituloModalCategoria").html('Actualizar Reserva');
    $("#idReservation").val(idReservation);
    $("#startDate").val(startDate);
    $("#devolutionDate").val(devolutionDate);
    $("status").val(status);
    $('#modalCategoria').modal('show');
}

var eliminar = function (id) {
    console.log("eliminando id: " + id)
    $.ajax({
        url: urlBaseCategoria + "/" + id,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode: {
            204: function () {
                mostrarMensaje('Se ha eliminado la Reserva');
                cerrarModal();
                consultar();
            }
        },
    });
}