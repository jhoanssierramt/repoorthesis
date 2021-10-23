function consultarre(){
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
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
                    <th>idReservation</th>
                    <th>startDate</th>
                    <th>devolutionDate</th>
                    <th>status</th>
                    <th>score</th>
                    <th>Acciones</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].idReservation}</td>
                   <td>${items[i].startDate}</td>
                   <td>${items[i].devolutionDate}</td>
                   <td>${items[i].status}</td>
                   <td>${items[i].score}</td>
                   <td>
                        <button onclick="eliminarca(${items[i].id})" disabled>Eliminar</button>
                        <a href="detallere.html?id=${items[i].id}" disabled>Editar</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}