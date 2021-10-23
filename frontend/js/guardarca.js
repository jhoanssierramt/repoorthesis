function guardarca(){
    console.log("ejecutando funcion guardar");

    let category = {
        id: +$("#id").val(),
        name: $("#name").val(),
        description: $("#description").val()
    }; 

    console.log(category);

    $.ajax({
        url: "http://localhost:8080/api/Category/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(category),
        statusCode:{
            201:function(){
                alert('Se ha registrado la categoria');
            }
        },
    });
}