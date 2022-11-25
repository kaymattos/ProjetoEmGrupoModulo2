function feed(){
    {alert("Feedback enviado com sucesso!")}
    };
    
    // BOTÃO FRONT 1 SLIDE END E INFORMAÇÕES PRA MOSTRAR
    
    function saiba(){
        document.getElementById('saibaMais'); //PEGA O ID DA SECTION
        document.getElementById("saibaMais").style.display = "block"; //MOSTRA A SEÇÃO
        window.scroll(0,500); // ROLAGEM PRA SEÇÃO
     }
     
        // BOTÃO 2 SLIDE BACK-END E INFORMAÇÕES
    
    function saiba2(){
        document.getElementById('saibaMais2'); //PEGA O ID DA SECTION
        document.getElementById("saibaMais2").style.display = "block"; //MOSTRA A SEÇÃO
        window.scroll(0,500); // ROLAGEM PRA SEÇÃO
        }
    
        // BOTÃO DO 3SLIDE DEV FULL STACK E INFORMAÇÕES
    
       
    function saiba3(){
        document.getElementById('saibaMais3'); //PEGA O ID DA SECTION
        document.getElementById("saibaMais3").style.display = "block"; //MOSTRA A SEÇÃO
        window.scroll(0,500); // ROLAGEM PRA SEÇÃO
        }
    
        // CLICAR PRA PASSAR O PACOTE DEIXAR AS INFORMAÇÕES INVISIVEIS 
    
    function esconderInfo(){
        document.getElementById("saibaMais").style.display = "none";
        document.getElementById("saibaMais2").style.display = "none";
        document.getElementById("saibaMais3").style.display = "none";
        window.scroll(0,0);
    }

    // CADASTRO CEP

    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
         

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

//alerta de sucesso no e-mail
function success(){
    alert("Um código de recuperação foi enviado para seu e-mail.")
    }
    
    //função para checar se o e-mail do recupsenha está vazio
    function nulo(){
        if (document.forms['form1'].email.value === "") {
          alert("Insira um e-mail válido.");
          return false;
        }return true}
       
       
        function confirmaSenha(){
            if (document.forms['form2'].senha1.value !== document.forms['form2'].senha2.value) {
              alert("As senhas não são iguais.");
              return false;
            }return true}