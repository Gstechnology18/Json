const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./logado/home.html";
                break;
            }
        }

    }
    alert(mensagem);

}
function cadastra() {
    const campoNovoLogin = document.getElementById("campoNovoLogin");
    const campoNovaSenha = document.getElementById("campoNovaSenha");
    const campoRepSenha = document.getElementById("campoRepSenha");

    if (campoNovoLogin.value.trim() === "" || campoNovaSenha.value.trim() === "" || campoRepSenha.value.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return; // Impede o cadastro se algum campo estiver vazio
    }

    if (campoNovaSenha.value === campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("As senhas são diferentes!");
    }
}

}
function verificaseexiste{
    if 
}