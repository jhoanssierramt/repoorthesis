function consultar(){
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
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
                    <th>MESSAGETEXT</th>
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].idMessage}</td>
                   <td>${items[i].messageText}</td>
                   <td>
                        <button onclick="eliminar(${items[i].idMessage})" >Eliminar</button>
                        <a href="detallems.html?id=${items[i].idMessage}" >Editar Mensaje</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}