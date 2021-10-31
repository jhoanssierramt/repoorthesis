var urlBaseCategoria = "/api/Ortopedic";

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
                    <th>NOMBRE</th>
                    <th>MARCA</th>
                    <th>AÑO</th>
                    <th>DESCRIPCION</th>
                    <th>ACCIONES</th>
                    </tr>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                    <td>${items[i].id}</td>
                    <td>${items[i].name}</td>
                    <td>${items[i].brand}</td>
                    <td>${items[i].year}</td>
                    <td>${items[i].description}</td>
                    <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${items[i].id}, '${items[i].name}','${items[i].description}','${items[i].brand}','${items[i].year}')">
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
    $("#tituloModalCategoria").html('Nueva Orthesis');
    $("#id").val('');
    $("#name").val('');
    $("#description").val('');
    $("#year").val('');
    $("#brand").val('');
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
            name: $("#name").val(),
            brand: $("#brand").val(),
            year: +$("#year").val(),
            description: $("#description").val(),
        };
        method = "PUT";
        msg = "se ha actualizado la Orthesis";
    } else {
        ruta = urlBaseCategoria + "/save";
        payload = {
            id: +$("#id").val(),
            name: $("#name").val(),
            brand: $("#brand").val(),
            year: +$("#year").val(),
            description: $("#description").val(),
        };
        method = "POST";
        msg = "se ha creado la orthesis";
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

var editar = function (id, name,description,brand,year) {
    $("#tituloModalCategoria").html('Actualizar Orthesis');
   
    $("#id").val(id);
    $("#name").val(name);
    $("#description").val(description);
    $("#year").val(year);
    $("#brand").val(brand);
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
                mostrarMensaje('Se ha eliminado la Orthesis');
                cerrarModal();
                consultar();
            }
        },
    });
}