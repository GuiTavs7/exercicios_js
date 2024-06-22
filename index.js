// 1) ALTERANDO COR DE DIV VIA BOTÃO

// Usando classList.toggle - adiciona e remove a classe caso o usuário clique no botão (não apenas adiciona ou apenas remove)

function alterarCorDiv1(){
    const quadrado_um = document.getElementById("div_1");
    quadrado_um.classList.toggle("amarelo"); 
}

// 2) MULTIPLICANDO ITENS DO ARRAY USANDO LAÇO FOR EACH

let array = [65, 44, 12, 4];

array.forEach(element => {
    console.log (element * 10);
});

// 3) CLASSES DO QUADRADO

const quadrado_preto = document.querySelector(".quadrado_preto_filho");

quadrado_preto.addEventListener("click", () => {

    const classeAzulExiste = quadrado_preto.classList.contains("azul");

    if(classeAzulExiste){
        quadrado_preto.classList.remove("azul");
    }
    else{
        quadrado_preto.classList.add("azul");
    }
    
});

// 4) INPUTS

const inputText = document.querySelectorAll(".input_box");

inputText.forEach(input => {

    input.addEventListener("input", () => {

        if(input.value !== ""){
            input.classList.add("campo_preenchido");
        }
        else{
            input.classList.remove("campo_preenchido");
        }
    
    });

});
