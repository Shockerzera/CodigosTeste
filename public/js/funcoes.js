// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    //var usucrack = getElementById(b_usuario);

    //var h1LoginUsuario = document.getElementById(h1LoginUsuario);

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;
        //usucrack.innerHTML = b_usuario;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

