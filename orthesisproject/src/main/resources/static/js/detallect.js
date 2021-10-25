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
        url: "http://localhost:8080/api/Client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            
            try { 
                llenarDatos(respuesta);
            } catch (e) {
                console.log(e);
                $("#boton").hide();
                alert('No se encuentra el cliente con el id '+id);
            }
           

            //if (respuesta.items.length==1){
            //    llenarDatosCliente(respuesta.items[0]);
            //}else{
            //    $("#boton").hide();
            //    alert('No se encuentra el cliente con el id '+id);
            //}
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#idClient").val(item.idClient);
    $("#email").val(item.email);
    $("#password").val(item.password);
    $("#name").val(item.name);
    $("#age").val(item.age);
    
}