let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça Login!"
        : "Não tem conta? Cadastre-se!";
    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p> Email Inválido!</p></div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta!</p></div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='sucesso'><p> Cadastrado com sucesso!</p></div>";
    } else {
        let salva = localStorage.getItem(email);
        if (salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso!</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados Incorretos!</p></div>";
        }
    }
    document.getElementById("form-login").reset();
    window.location.href = "pagina.html";

     document.getElementById("form-cadastre-se").reset();
     window.location.href = "index.html";

    function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (email === '' || senha === '' || confirmarSenha === '') {
    alert('Preencha todos os campos!');
  } else if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
  } else {
    window.location.href = 'home.html';
  }
}

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;


  const emailSalvo = localStorage.getItem('email');
  const senhaSalva = localStorage.getItem('senha');

  if (email === '' || senha === '') {
    alert('Preencha todos os campos!');
  } else if (email !== emailSalvo || senha !== senhaSalva) {
    alert('Email ou senha incorretos!');
  } else {
    alert('Login realizado com sucesso!');
    window.location.href = 'index.html';
  }
}

function mostrarMensagem(texto, tipo) {
  const msg = document.getElementById('mensagem');
  msg.className = `alert alert-${tipo}`;
  msg.textContent = texto;
}

function cadastrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (email === '' || senha === '' || confirmarSenha === '') {
    mostrarMensagem('Preencha todos os campos!', 'danger');
  } else if (senha !== confirmarSenha) {
    mostrarMensagem('As senhas não coincidem!', 'danger');
  } else {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    mostrarMensagem('Cadastro realizado com sucesso!', 'success');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1500);
  }
}




}