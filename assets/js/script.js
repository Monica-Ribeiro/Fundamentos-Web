/*pode acessar o DOM por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClasse()
por seletor: querySelector()

case sensitive = reconhce letras maisculas e minusculas
para o querySelector funcionar tem que colocar a # 
*/

let nome =window.document.getElementById('nome')
let email =document.querySelector('#email')
let assunto =document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector ('#mapa')
nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length< 3){
        txt.innerHTML = 'Nome invalido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome valido'
        txt.style.color ='green'
        nomeOk = true
    }
}
    function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')
        
        if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
            txtEmail.innerHTML = 'E-mail invalido'
            txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'E-mail valido'
            txtEmail.style.color = 'green'
            emailOk = true
        }

    }

    function validaAssunto(){
        let txtAssunto = document.querySelector('#txtAssunto')
        if (assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres'
        txt.style.color ='red'
        txtAssunto.style.display = 'block'
        }else{
            txtAssunto.style.display ='none'
            assuntoOk = true
        }
    }

    function enviar(){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
            alert('Formulario enviado com sucesso!')
        }else{
            alert('Preencha o formulario corretamente antes de enviar...')
        }
    }

        
    

    function mapaZoom(){
        mapa.style.width = '800px'
        mapa.style.height ='600px'
    }

    function mapaNormal(){
        mapa.style.width = '400px'
        mapa.style.height ='250px'
    }

