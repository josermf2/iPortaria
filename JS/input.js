document.addEventListener('DOMContentLoaded', function() {

    botao = document.querySelector('.botao')  

    escrever_aviso = document.querySelector('.escrever_aviso')
    
    botao.addEventListener('click', function(event) {
        escrever_aviso.value = 'Escreva um aviso...'
    })
})