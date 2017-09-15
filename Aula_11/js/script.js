window.onload = function() {
    
    let botao = document.getElementById('imc_id');

    botao.addEventListener("click", function() {
        let altura = document.getElementById('altura_id').value;
        let quilos = document.getElementById('quilos_id').value;
        
        if(altura !== '' && quilos !== '') {
            
            var div = document.getElementById("imc_id");
            div.style.display = 'none';
            
            let quadrado = (altura*altura);
            let imc = quilos/quadrado;
            let type;
            
            if(imc < 16) {
                type='Magreza grave';
            } else if( imc >= 16 && imc < 17 ) {
                type='Magreza moderada';
            } else if( imc >= 17 && imc < 18.5 ) {
                type='Magreza leve';
            } else if( imc >= 18.5 && imc < 25 ) {
                type='Saudável';
            } else if( imc >= 25 && imc < 30 ) {
                type='Sobrepeso';
            } else if( imc >= 30 && imc < 35 ) {
                type='Obesidade';
            } else if( imc >= 35 && imc < 40 ) {
                type='Obesidade severa';
            } else if( imc >= 40 ) {
                type='Obesidade mórbida';
            };
            
            let valor = document.getElementById('valor_id');
            valor.innerHTML = Number(imc.toFixed(1));
            
            let tipo = document.getElementById('tipo_id');
            tipo.innerHTML = type;
            
            let resultado = document.getElementById('resultado_id');
            resultado.style.display = 'flex';
            
        } else {
            alert('Um ou mais campos não se encontrão prenchidos!');
        };
        
    });
    
    
    let voltar = document.getElementById('img_id');
    
    voltar.addEventListener("click", function() {
        let resultado = document.getElementById('resultado_id');
        resultado.style.display = 'none';
        
        var div = document.getElementById("imc_id");
        div.style.display = 'block';
    });
    
}