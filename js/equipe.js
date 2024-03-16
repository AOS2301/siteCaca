var team = new URLSearchParams(window.location.search).get("team");
var bannerDiv = document.getElementById("banner");
var nomeEquipeDiv = document.getElementById("nomeEquipe");
if (team === "FLEMIS") {
    bannerDiv.innerHTML = "<div class='green-banner'>Equipe Flemis</div>";
    nomeEquipeDiv.innerHTML = "Flemis 🍀";
    botaoEinput.innerHTML = "<div class='informacao'> <input type='text' class='senha' id='validar'> <input type='submit' class='fase' value='Verificar' onclick='verificarResposta()' </div>";
} else if (team === "IFRATELI") {
    bannerDiv.innerHTML = "<div class='grey-banner'>Equipe I-Frateli</div>";
    nomeEquipeDiv.innerHTML = "I-Frateli 🐇";
} else if (team === "LOTUS") {
    bannerDiv.innerHTML = "<div class='pink-banner'>Equipe Lotus</div>";
    nomeEquipeDiv.innerHTML = "Lotus 🐈";
} else if (team === "ECO") {
    bannerDiv.innerHTML = "<div class='blue-banner'>Equipe ECO</div>";
    nomeEquipeDiv.innerHTML = "ECO 🔱";
} else if (team === "AA") {
    bannerDiv.innerHTML = "<div class='white-banner'>Equipe AA</div>";
    nomeEquipeDiv.innerHTML = "AA 🦅";
}

