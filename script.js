const exibeUsuario = (usuario) => {
    console.log(`O usuario ${usuario.login} possui ${usuario.public_repos} seguidores!`)
}   

const iniciar = () => {
    console.log("antes do fetch");

    fetch('https://api.github.com/users/JeniferGomes07')
        .then((response) => response.json())
        .then((dados) => console.log(dados))
        .then(() => console.log('Passei do fetch'));

    console.log('depois do fetch');
};

document.addEventListener("DOMContentLoaded", iniciar);