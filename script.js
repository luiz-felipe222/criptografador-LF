
function criptografar() {
    let texto = document.getElementById("texto1").value;
    let textoCripto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, 'ines')
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let output = document.getElementById('output');
    let mensagem = output.querySelector('span');
    let imagem = output.querySelector('img');

    if (texto.length !== 0) {
        output.querySelector('h2').textContent = textoCripto;
        mensagem.textContent = "";
        imagem.src = 'LF (1)_preview_rev_1.png'; 
    } else {
        output.querySelector('h2').textContent = "";
        mensagem.textContent = "Digite algum texto para criptografar";
        imagem.src = 'LF (1)_preview_rev_1.png'; 
        alert("Digite algum texto :)");
    }
}


function descriptografar() {
    let texto = document.getElementById("texto1").value;
    let textoCripto = texto
        .replace(/enter/g, "e")
        .replace(/ines/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let output = document.getElementById('output');
    let mensagem = output.querySelector('span');
    let imagem = output.querySelector('img');

    if (texto.length !== 0) {
        output.querySelector('h2').textContent = textoCripto;
        mensagem.textContent = "";
        imagem.src = 'LF (1)_preview_rev_1.png'; 
    } else {
        output.querySelector('h2').textContent = "";
        mensagem.textContent = "Digite algum texto para descriptografar";
        imagem.src = 'LF (1)_preview_rev_1.png'; 
        alert("Digite algum texto :)");
    }
}

function copiarTexto() {
    let output = document.getElementById('output');
    let textoCopiado = output.querySelector('h2').textContent;

    if (textoCopiado.length !== 0) {
        navigator.clipboard.writeText(textoCopiado).then(function () {
         
            output.querySelector('h2').textContent = "";
            output.querySelector('span').textContent = "Texto copiado e apagado";
        }).catch(function (error) {
            console.error("Erro ao copiar o texto: ", error);
        });
    } else {
        alert("Não há texto para copiar.");
    }
}

