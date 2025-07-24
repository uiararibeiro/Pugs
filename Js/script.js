document.addEventListener('DOMContentLoaded', function() {
    const botaoEnviar = document.getElementById('botaoEnviar');

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário (que recarregaria a página)

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;

            // Validação simples para garantir que os campos não estão vazios
            if (nome === '' || email === '' || telefone === '') {
                alert('Por favor, preencha todos os campos do formulário!');
                return; // Para a execução se algum campo estiver vazio
            }

            // Exibe uma mensagem de agradecimento
            alert(`Obrigado, ${nome}! Suas informações foram enviadas. Entraremos em contato em breve.`);

            // Opcional: Limpar o formulário após o envio
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefone').value = '';
        });
    }
});