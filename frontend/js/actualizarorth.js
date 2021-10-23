function actualizar(){
    console.log("ejecutando funcion para actualizar");
    let message = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log(message);

    $.ajax({
        url: "localhost:8080/api/Ortopedic/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la orthesis');
            }
        },
    });
}