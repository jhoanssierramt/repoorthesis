function actualizarorth(){
    console.log("ejecutando funcion para actualizar");
    console.debug("actualizando...");
    let ortopedic = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        year: +$("#year").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val(),
        description: $("#description").val()
    };

    console.log(ortopedic);

    $.ajax({
        url: "http://localhost:8080/api/Ortopedic/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(ortopedic),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la órtesis');
            }
        },
    });
}