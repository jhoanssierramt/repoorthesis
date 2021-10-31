var urlBaseCategoria = "/api/Client";

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
                    <th>CORREO</th>
					<th>CONTRASEÑA</th>
					<th>EDAD</th>
                    <th>ACCIONES</th>
                    </tr>`;

    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].idClient}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
				   <td>${items[i].password}</td>
				   <td>${items[i].age}</td>
                   <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${items[i].idClient},'${items[i].name}','${items[i].email}','${items[i].password}','${items[i].age}')">
                        Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="eliminar(${items[i].idClient})">
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
    $("#tituloModalCategoria").html('Nuevo Cliente');
    $("#idClient").val('');
    $("#name").val('');
    $("#email").val('');
	$("#password").val('');
	$("#age").val('');
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
    var id = $("#idClient").val();
    var msg;
    var ruta;
    if (id !== 'undefined' && id !== null && id.length > 0) {
        ruta = urlBaseCategoria + "/update";
        payload = {
            idClient: +$("#idClient").val(),
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            age: $("#age").val()	
        };
        method = "PUT";
        msg = "se ha actualizado el Cliente";
		
    } else {
        ruta = urlBaseCategoria + "/save";
        payload = {
            name: $("#name").val(),
            email: $("#email").val(),
            password: $("#password").val(),
            age: $("#age").val()
        };
        method = "POST";
        msg = "se ha creado el Cliente";
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

var editar = function (idClient, name, email, password, age) {
    $("#tituloModalCategoria").html('Actualizar Cliente');
    $("#idClient").val(idClient);
    $("#name").val(name);
    $("#email").val(email);
	$("#password").val(password);
	$("#age").val(age);
    $('#modalCategoria').modal('show');
}

var eliminar = function (idClient) {
    console.log("eliminando id: " + idClient)
    $.ajax({
        url: urlBaseCategoria + "/" + idClient,
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        statusCode: {
            204: function () {
                mostrarMensaje('Se ha eliminado el cliente');
                cerrarModal();
                consultar();
            }
        },
    });
}


