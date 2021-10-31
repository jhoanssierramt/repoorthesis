var urlBaseCategoria = "/api/Message";

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
                    <th>ID</th>
                    <th>MESSAGETEXT</th>
                    <th>ACCIONES</th>
                    </tr>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                    <td>${items[i].idMessage}</td>
                    <td>${items[i].messageText}</td>
                    <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${items[i].idMessage},'${items[i].messageText}')">
                        Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="eliminar(${items[i].idMessage})">
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
    $("#tituloModalCategoria").html('Nuevo Mensaje');
    $("#idMessage").val('');
    $("#messageText").val('');
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
    var id = $("#idMessage").val();
    var msg;
    var ruta;
    if (id !== 'undefined' && id !== null && id.length > 0) {
        ruta = urlBaseCategoria + "/update";
        payload = {
            idMessage: +$("#idMessage").val(),
            messageText: $("#messageText").val()
        };
        method = "PUT";
        msg = "se ha actualizado el Mensaje";
		
    } else {
        ruta = urlBaseCategoria + "/save";
        payload = {
            idMessage: +$("#idMessage").val(),
            messageText: $("#messageText").val()
        };
        method = "POST";
        msg = "se ha creado el Mensaje";
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

var editar = function (idMessage,messageText) {
    $("#tituloModalCategoria").html('Actualizar Mensaje');
    $("#idMessage").val(idMessage);
    $("#messageText").val(messageText);
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
                mostrarMensaje('Se ha eliminado el Mensaje');
                cerrarModal();
                consultar();
            }
        },
    });
}


