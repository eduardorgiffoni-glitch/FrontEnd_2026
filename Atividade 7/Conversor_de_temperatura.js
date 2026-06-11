let celsius = document.getElementById("celsius");

let fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", function () {

    let c = Number(celsius.value);

    let f = (c * 9/5) + 32;

    fahrenheit.value = f.toFixed(2);
});

fahrenheit.addEventListener("input", function () {

    let f = Number(fahrenheit.value);

    let c = (f - 32) * 5/9;

    celsius.value = c.toFixed(2);
});
