function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (/\d/.test(name)) {
        nameError.textContent = "O nome não pode conter números.";
    } else {
        nameError.textContent = "";
    }
}

function validateCPF() {
    const cpf = document.getElementById('cpf').value;
    const cpfError = document.getElementById('cpfError');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfPattern.test(cpf)) {
        cpfError.textContent = "O CPF deve ter 11 dígitos numéricos e seguir o formato xxx.xxx.xxx-xx.";
    } else {
        cpfError.textContent = "";
    }
}

function applyCPFMask(input) {
    input.value = input.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function validateDOB() {
    const dob = document.getElementById('dob').value;
    const dobError = document.getElementById('dobError');
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobPattern.test(dob)) {
        dobError.textContent = "A data de nascimento deve seguir o formato dd/mm/yyyy.";
    } else {
        dobError.textContent = "";
    }
}

function applyDOBMask(input) {
    input.value = input.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2');
}

function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    const usernamePattern = /^[a-z][a-z0-9._]*$/;
    if (!usernamePattern.test(username)) {
        usernameError.textContent = "O usuário deve começar com uma letra minúscula e pode conter números, underscore e ponto final.";
    } else {
        usernameError.textContent = "";
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "O email deve estar em minúsculas e seguir o formato correto.";
    } else {
        emailError.textContent = "";
    }
}

function validatePassword() {
    const password = document.getElementById('password1').value;
    const passwordError = document.getElementById('passwordError');
    const rules = [
        { id: 'rule1', pattern: /.{8,}/, message: "Mínimo 8 caracteres" },
        { id: 'rule2', pattern: /^.{0,15}$/, message: "Máximo 15 caracteres" },
        { id: 'rule3', pattern: /[A-Z]/, message: "Pelo menos uma letra maiúscula" },
        { id: 'rule4', pattern: /[1-9]/, message: "Pelo menos um número (exceto zero)" },
        { id: 'rule5', pattern: /[^A-Za-z0-9]/, message: "Pelo menos um caractere especial" }
    ];

    let valid = true;
    rules.forEach(rule => {
        const element = document.getElementById(rule.id);
        if (rule.pattern.test(password)) {
            element.classList.remove('error');
            element.classList.add('valid');
        } else {
            element.classList.remove('valid');
            element.classList.add('error');
            valid = false;
        }
    });

    if (valid) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "A senha não atende aos requisitos.";
    }
}

function validatePasswordMatch() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const passwordMatchError = document.getElementById('passwordMatchError');
    if (password1 !== password2) {
        passwordMatchError.textContent = "As senhas não coincidem.";
    } else {
        passwordMatchError.textContent = "";
    }
}

function submitForm() {
    validateName();
    validateCPF();
    validateDOB();
    validateUsername();
    validateEmail();
    validatePassword();
    validatePasswordMatch();

    const errors = document.querySelectorAll('.error');
    let hasError = false;
    errors.forEach(error => {
        if (error.textContent !== "") {
            hasError = true;
        }
    });

    if (!hasError) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, corrija os erros antes de enviar.");
    }
}
