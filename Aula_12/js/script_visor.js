function defenirVisor (numero) {
    
    numero = numero.replace('.','');
    
    let comprimento = numero.length;
    
    function $(elemento) {
        return document.querySelector(elemento);
    }

    let sifra = $('#sifra');
    let visor = $('#visor');
    
    let valor = 0;
    let breakOrComma = '';
    let newCont = 0;
    
    /*
    for(cont=0; cont<comprimento; cont++) {
        
            if(cont%3 === 0 && cont !== 0) {
                breakOrComma = '.';
            } else {
                breakOrComma = '';
            };
        
        let valor_num1 = comprimento - cont;
        let valor_num2 = (comprimento - cont) - 1;
        valor = numero.slice(valor_num2,valor_num1) + breakOrComma + valor;
        
        //console.log(valor + " // consola");
    };
    */
    
    valor = numero.replace('.','').replace(',',''); console.log(valor);
    valor = new Number(valor);
    valor = valor.toLocaleString("pt-BR"); console.log(valor); 
    return valor;
    
};
