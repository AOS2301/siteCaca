function validarFormulario(botao){
    var equipeAtu =  botao.value.trim().toUpperCase();
    var equipes =  ['FLEMIS' , 'IFRATELI' , 'AA' , 'LOTUS' , 'ECO'];
    if(equipes.includes(equipeAtu)){
        var resposta = confirm("Você tem certeza que esta é sua equipe?");
        if (resposta) {
            window.location.href = "home.html?team=" + encodeURIComponent(equipeAtu);
        } else {
           return;
        } 
    } else{
        alert("Escreva uma equipe válida!");
        return;
    }
}