document.addEventListener("DOMContentLoaded", () => {
    var erroLogin = document.getElementById("erroUsuario");
    const botaoEntrar = document.querySelector("#usuarioAcessar");
    
    botaoEntrar.addEventListener("click", () => {
        console.log("Redirecionando...")
            var valorEmail = document.getElementById("loginUsuario").value;
            var valorSenha = document.getElementById("senhaUsuario").value;
            
            if (valorEmail === "adm" && valorSenha === "adm"){
                console.log*("Logado com sucesso");
                window.location.href = "inicio.html"
            }
            else{
                console.log("Email ou Senha Incorretos, Tente Novamente.");
                document.getElementById("erroUsuario").innerText = "Email ou Senha Incorretos, Tente Novamente.";
            };
    });
  });