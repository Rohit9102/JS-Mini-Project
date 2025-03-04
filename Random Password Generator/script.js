const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbols = "@#$%^&*()_+={}[]|<>/-=";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";

    while(length>password.length){

        password += allChars[Math.floor(Math.random() * allChars.length)];

    }

    passwordBox.value = password;

}

function copyPassword(){
passwordBox.select();
document.execCommand("copy");
}
