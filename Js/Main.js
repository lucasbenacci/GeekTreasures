
function signup(e){
    event.preventDefault();
    console.log('Funcionando');

    var username = document.getElementById('Signup_user').value;
    var email = document.getElementById('Signup_email').value;
    var password = document.getElementById('Signup_password').value;

    var user = {
        username: username,
        email: email,
        password: password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('User cadastrado')

    setTimeout(function() {
        window.location.href='../Pages/Login.html';
    }, 1000);
}

function login(e){
    event.preventDefault();

    var username = document.getElementById('Login_user').value;
    var password = document.getElementById('Login_password').value;
    var result = document.getElementById('result')

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    console.log("Até aqui ta certo")

    if(user == null){
        alert("Usuário Inválido");
        console.log("1")
    }else if(username == data.username && password == data.password){
        setTimeout(function() {
            alert("Logado com sucesso");
        }, 1000);
        setTimeout(function() {
            window.location.href='../index.html';
        }, 1000);
        }else{
            alert("Senha Inválidos");
            console.log("2")
        }


}