// Função para calcular o progresso
function calcularProgresso() {
    const camposObrigatorios = document.querySelectorAll('input[required]');
    const totalCampos = camposObrigatorios.length;
    let camposPreenchidos = 0;

    camposObrigatorios.forEach(function (campo) {
        if (campo.value.trim() !== '') {
            camposPreenchidos++;
        }
    });

    const progresso = (camposPreenchidos / totalCampos) * 100;

    // Atualizar o valor da barra de progresso
    document.getElementById('progresso').value = progresso;
}

// Chamar a função sempre que um campo for preenchido ou perder o foco
const campos = document.querySelectorAll('input[required]');
campos.forEach(function (campo) {
    campo.addEventListener('input', calcularProgresso);
    campo.addEventListener('blur', calcularProgresso);
});
