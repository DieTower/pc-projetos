window.onload = function() {
    
    function $(selected) {
        return document.querySelector(selected);
    };
    
    let visor = $("#visor");
    let button0 = $('#button0_id');
    let button1 = $('#button1_id');
    let button2 = $('#button2_id');
    let button3 = $('#button3_id');
    let button4 = $('#button4_id');
    let button5 = $('#button5_id');
    let button6 = $('#button6_id');
    let button7 = $('#button7_id');
    let button8 = $('#button8_id');
    let button9 = $('#button9_id');
    let buttonC = $('#buttonC_id');
    let convertButton = $('#botao_id');
    
    
    function visor_push(button) {
        let verde = convertButton.classList.contains('greenButton');
        
        function slice (num1,num2) {
            return visor.innerHTML.slice(num1,num2);
        };
        
        
        if( visor.innerHTML === "0" && button === "0" ) {
            
            $('#sifra').style.visibility = "visible";
            $('#visor').style.visibility = "visible";
            
        } else if( visor.innerHTML === "0" && button !== "0" ){
            
            visor.innerHTML = '';
            
        };
        
        let comprimento = visor.innerHTML.length;
        
        if(verde === false && comprimento <= 8) {
            
            $('#sifra').style.visibility = "visible";
            $('#visor').style.visibility = "visible";
            
            let valorReplace = visor.innerHTML.replace('.','');
            let numero = valorReplace + button;
            
            if($('#sifra').innerHTML === 'R$') {
                
                numero = defenirVisor(numero);
                
            } else if($('#sifra').innerHTML === '$') {
                
                numero = defenirVisor(numero);
                
            };
            
            visor.innerHTML = numero;
            
        };
           
    };
    
    function changeColor() {
        if(visor.innerHTML !== "0" && convertButton.classList.contains('blueButton') === true) {
            convertButton.classList.remove('blueButton');
            convertButton.classList.add('orangeButton');
        };
    };
    
    for(cont=0; cont<=9; cont++) {
        let button = document.querySelectorAll('button')[cont];
        button.addEventListener("click", function() {
            visor_push(button.value);
            changeColor();
        });
    };
    
    buttonC.addEventListener("click", function() {
        $("#visor").innerHTML = 0;
        
        if(visor.innerHTML === "0") {
            if(convertButton.classList.contains('orangeButton') === true) {
                
                convertButton.classList.remove('orangeButton');
                
            } else if(convertButton.classList.contains('greenButton') === true) {
                
                convertButton.classList.remove('greenButton');
                
                if($('#sifra').innerHTML === '$') {
                    $('#sifra').innerHTML = "R$";
                } else if($('#sifra').innerHTML === 'R$') {
                    $('#sifra').innerHTML = "$";
                };
                
            };
            
            $('#sifra').style.color = "#ffffff";
            $('#visor').style.color = "#ffffff";
            
            convertButton.classList.add('blueButton');
            
        };
    });
    
    convertButton.addEventListener("click", function() {
        
        if(visor.innerHTML === "0" && convertButton.classList.contains('RealForDollar') === true){
            
            convertButton.classList.remove('RealForDollar');
            convertButton.classList.add('DollarForReal');
            $('#sifra').innerHTML = "$";
            
        } else if(visor.innerHTML === "0" && convertButton.classList.contains('DollarForReal') === true) {
            
            convertButton.classList.remove('DollarForReal');
            convertButton.classList.add('RealForDollar');
            $('#sifra').innerHTML = "R$";
            
        };
        
        if(visor.innerHTML !== "0" && convertButton.classList.contains('orangeButton') === true) {
            convertButton.classList.remove('orangeButton');
            convertButton.classList.add('greenButton');
            
            let api = "http://api.fixer.io/latest";
            let request = new XMLHttpRequest();
            
            request.open("GET",api);
            
            request.onload = function() {
                
                let real = parseFloat(JSON.parse(request.responseText).rates.BRL);
                let dolar = parseFloat(JSON.parse(request.responseText).rates.USD);
                let visorp = parseFloat(visor.innerHTML.replace('.','').replace(',','.'));
                
                if(convertButton.classList.contains('RealForDollar') === true) {
                    
                    let resultado = (dolar / real) * visorp;
                    visor.innerHTML = resultado.toFixed(2);
                    $('#sifra').innerHTML = "$";
                    console.log('real para dolar' + ' => ' + resultado.toFixed(2));
                    
                } else if(convertButton.classList.contains('DollarForReal') === true) {
                    
                    let resultado = (real / dolar) * visorp;
                    visor.innerHTML = resultado.toFixed(2);
                    $('#sifra').innerHTML = "R$";
                    console.log('dolar para real' + ' => ' + resultado.toFixed(2));
                    
                };
                
                console.log(real + " // " + dolar + " // " + visorp);
                
            };
            
            request.send();
            
            $('#sifra').style.color = "#7ed321";
            $('#visor').style.color = "#7ed321";
        };
        
    });
    
    
}