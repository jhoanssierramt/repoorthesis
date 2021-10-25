function guardarorth(){
    console.log("ejecutando funcion guardar");

    let ortopedic = {
        id: +$("#id").val(),
        name: $("#name").val(),
        brand: $("#brand").val(),
        year: +$("#year").val(),
        category: {id: +$("#categoryId").val()},
        description: $("#description").val()        
    }; 

    console.log(ortopedic);

    $.ajax({
        url: "http://localhost:8080/api/Ortopedic/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(ortopedic),
        statusCode:{
            201:function(){
                alert('Se ha registrado la órtesis');
            }
        },
    });
}