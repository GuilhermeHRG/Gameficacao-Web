// Função para calcular o progresso
function calcularProgresso() {
    const camposObrigatorios = document.querySelectorAll('input[required]');
    const totalCampos = camposObrigatorios.length;
    let dataNasc = document.getElementById('datanasc');
    let camposPreenchidos = 0;
    var dataNascValid = false;
    camposObrigatorios.forEach(function (campo) {
        if (campo.value.trim() !== '') {
            camposPreenchidos++;
            
        }
    });

    const progresso = (camposPreenchidos / totalCampos) * 100;

    // Atualizar o valor da barra de progresso
    document.getElementById('progresso').value = progresso;
    if (progresso>=100){
        progresso.classList.add('explodir');
    }
}

// Chamar a função sempre que um campo for preenchido ou perder o foco
const campos = document.querySelectorAll('input[required]');
campos.forEach(function (campo) {
    campo.addEventListener('input', calcularProgresso);
    campo.addEventListener('blur', calcularProgresso);
});


    document.addEventListener("DOMContentLoaded", function () {
        // Aguarde até que o conteúdo da página seja carregado
    
        // Mostre a tela de saudação
        const telaDeSaudacao = document.querySelector(".tela-de-saudacao");
        telaDeSaudacao.style.opacity = "1";
    
        // Oculte a tela de saudação após um atraso (por exemplo, 3 segundos)
        setTimeout(function () {
            telaDeSaudacao.style.opacity = "0";
            telaDeSaudacao.style.display = "none";
    
            // Mostre o conteúdo do site
            const conteudo = document.querySelector(".conteudo");
            conteudo.style.display = "block";
        }, 3000); // 3 segundos
    });
    
    function validarDataNascimento() {
        var dataNascimento = new Date(document.getElementById("datanasc").value);
        var dataAtual = new Date();
        var dataErroElement = document.getElementById("dataErro");
        
        if (dataNascimento > dataAtual) {
            dataErroElement.style.display = "block"; // Exibe a mensagem de erro
            document.getElementById("datanasc").style.borderColor = "red"; // Muda a cor da borda para vermelho
          } else {
            dataErroElement.style.display = "none";
            dataNascValid = true; // Esconde a mensagem de erro
            document.getElementById("datanasc").style.borderColor = ""; // Volta a cor da borda ao padrão
          }
        }
        
        // Adicionar um ouvinte de evento para chamar a função de validação quando a data for alterada
        document.getElementById("datanasc").addEventListener("change", validarDataNascimento);