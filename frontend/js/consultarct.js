function consultarct(){
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuesta(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>NOMBRE</th>
                    <th>EDAD</th>
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].idClient}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].age}</td>
                   <td>
                        <button onclick="eliminarct(${items[i].id})" disabled>Eliminar</button>
                        <a href="detallect.html?id=${items[i].id}" disabled>Editar</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}