// https://viacep.com.br/ws/01001000/json/

let botao = document.getElementById('botao');

botao.addEventListener("click", function() {
    
    let texto = document.getElementById('texto').value;
    let api = "https://viacep.com.br/ws/" + texto + "/json/"
    let request = new XMLHttpRequest();
    
    request.open("GET", api);
    
    request.onload = function() {
        
        let resposta = JSON.parse(request.responseText);
        
        let div_logradouro = document.getElementById('logradouro');
        div_logradouro.innerHTML = resposta.logradouro;
        
        let div_bairro = document.getElementsByClassName('bairro')[0];
        div_bairro.innerHTML = resposta.bairro;
        
        let div_localidade = document.querySelector('#localidade');
        div_localidade.innerHTML = resposta.localidade;
        
    }
    
    request.send();
    
});