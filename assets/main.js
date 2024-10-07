document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('message', (e) => {
        if(e.data.action === 'open') {
            document.body.style.display = 'block';

            document.getElementById('msg').value = '';
            const opcoes = document.getElementsByName('opcao');
            for (let i = 0; i < opcoes.length; i++) {
                opcoes[i].checked = false;
            }
        }
    });

    document.getElementById('close').addEventListener('click', function() {
        document.body.style.display = 'none';
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST'
        });
    });

    document.getElementById('send').addEventListener('click', function() {
        const mensagem = document.getElementById('msg').value;
        if (mensagem.length > 1) {
            const opcoes = document.getElementsByName('opcao');
            let opcaoSelecionada = false;
            let valorSelecionado = '';
    
            for (let i = 0; i < opcoes.length; i++) {
                if (opcoes[i].checked) {
                    opcaoSelecionada = true;
                    valorSelecionado = opcoes[i].value;
                    break;
                }
            }
    
            if (opcaoSelecionada) {
                document.body.style.display = 'none';
                fetch(`https://${GetParentResourceName()}/hook`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ msg: mensagem, opt: valorSelecionado })
                });
            }
        }
    });
});