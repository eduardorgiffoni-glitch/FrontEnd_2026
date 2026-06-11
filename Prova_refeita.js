function add() {

    var container = document.getElementById("Cards");

    var card = document.createElement("div");
    card.className = "card";
    card.style.width = "22rem";
    card.style.marginLeft = "15px";

    card.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">
                Lucas Paquetá
                <span class="badge text-bg-secondary">8,8</span>
            </h5>

            <p class="card-text">
                <strong>Nascimento:</strong> 27/08/1997 <br>
                <strong>Altura:</strong> 1,80 <br>
                <strong>Posição:</strong> Meio-campista
            </p>
        </div>
    `;

    container.appendChild(card);
}
