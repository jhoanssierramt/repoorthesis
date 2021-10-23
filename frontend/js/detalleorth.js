$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id');
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "localhost:8080/api/Ortopedic/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            //Respuesta puede ser 1 o 0:
            if (respuesta.items.length==1){
                llenarDatos(respuesta.items[0]);
            }else{
                $("#botonActualizarDetalle").hide();
                alert('No se encuentra el mensaje con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id").val(item.id);
    $("#name").val(item.name);
    $("#brand").val(item.brand);
    $("#year").val(item.year);
    $("#description").val(item.description);

}