const API_URL = "http://127.0.0.1:8888/api/fruits"
console.log(API_URL);
const Lista = document.getElementById("ResultadosBusqueda")
const input = document.getElementById("myInput")

function ocultarLista() {
    Lista.innerHTML = ""
}
const getFruits = async() => {
    Lista.innerHTML = ""
    let fruits =
        await fetch(API_URL)
        .then(response => response.json())
        .then(function(data) {
            const myJSON = JSON.stringify(data);
            const respuesta = JSON.parse(myJSON)
            const fruits = respuesta.data.fruits
                //console.log(respuesta);
            return fruits

        });

    var input, filter, txtValue, count;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(fruits)
    count = 0;
    for (var i = 0; i < fruits.length; i++) {
        txtValue = fruits[i];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            Lista.innerHTML = Lista.innerHTML + "<li>" + fruits[i] + "</li>"
            count++;
        }
    }
    if (count == 0) {
        Lista.innerHTML = Lista.innerHTML + "No items were found."
    }
}