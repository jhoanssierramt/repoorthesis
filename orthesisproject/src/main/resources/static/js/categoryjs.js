var urlBaseCategoria = "/api/Category";

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
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>ACCIONES</th>
                  </tr>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].description}</td>
                   <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${items[i].id}, '${items[i].name}','${items[i].description}')">
                        Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="eliminar(${items[i].id})">
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
    $("#tituloModalCategoria").html('Nueva Categoria');
    $("#id").val('');
    $("#nombre").val('');
    $("#descripcion").val('');
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
    var id = $("#id").val();
    var msg;
    var ruta;
    if (id !== 'undefined' && id !== null && id.length > 0) {
        ruta = urlBaseCategoria + "/update";
        payload = {
            id: +$("#id").val(),
            name: $("#nombre").val(),
            description: $("#descripcion").val()
        };
        method = "PUT";
        msg = "se ha actualizado la categoria";
    } else {
        ruta = urlBaseCategoria + "/save";
        payload = {
            name: $("#nombre").val(),
            description: $("#descripcion").val()
        };
        method = "POST";
        msg = "se ha creado la categoria";
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

var editar = function (id, nombre,descripcion) {
    $("#tituloModalCategoria").html('Actualizar Categoria');
    $("#id").val(id);
    $("#nombre").val(nombre);
    $("#descripcion").val(descripcion);
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
                mostrarMensaje('Se ha eliminado la categoria');
                cerrarModal();
                consultar();
            }
        },
    });
}


