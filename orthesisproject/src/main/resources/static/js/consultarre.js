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
        //Esta transformación permite que las fechas se vean adecuadamente
        //Sin embargo no sé como cambiar la zona horaria (Jhoan Sierra)
        let initDateRow = new Date(items[i].startDate);
        let initDateRowFormmated = initDateRow.toISOString().split('T')[0];

        let finalDateRow = new Date(items[i].devolutionDate);
        let finalDateRowFormmated = finalDateRow.toISOString().split('T')[0];

        tabla +=`<tr>
                   <td>${items[i].idReservation}</td>
                   <td>${initDateRowFormmated}</td>
                   <td>${finalDateRowFormmated}</td>
                   <td>${items[i].status}</td>
                   <td>${items[i].score}</td>
                   <td>
                        <button onclick="eliminarre(${items[i].idReservation})">Eliminar</button>
                        <a href="detallere.html?id=${items[i].idReservation}">Editar</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}