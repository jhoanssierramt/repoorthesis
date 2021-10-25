$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id');
        console.log("id:"+id);
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "http://localhost:8080/api/Category/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);

            try { 
                llenarDatos(respuesta);
            } catch (e) {
                console.log(e);
                $("#boton").hide();
                alert('No se encuentra categoria con el id '+id);
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
    $("#description").val(item.description);
}