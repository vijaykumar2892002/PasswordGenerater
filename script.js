let superStrongChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+ABCDEFGHIJKLMOPQRSTUVWXYZ";
let strongChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
let weakChars = "0123456789abcdefghijklmnopqrstuvwxyz";

let funny = ['password', 'incorrect', 'IdontKnow', 'tryAgain', 'date', 'oneToEight', 'onetwothree', 'myPHoneNumber', 'myAge', 'yourName'];
let hiddenInput = document.getElementById("hiddenInput");

//for copy password
let copyPassword = () => {
  hiddenInput.select();
  document.execCommand("copy");
}
//for sweetalert 
let showModal = (pass) => {
  swal({
    title: "Your password is :",
    text: `${pass}`,
    buttons: ["ok", "copy"]
  }).then((copy) => {
    if (copy) {
      copyPassword();
      swal(
        "Your Password has been copied", {
        icon: "success",
      })
    }
  })
}

//Password class
class Password {
  //For SuperPassword
  generateSuperPassword() {
    let password = '';
    let length = 12;
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * superStrongChars.length);
      password += superStrongChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }
  //For StrongPassword
  generateStrongPassword() {
    let password = '';
    let length = 8;
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * strongChars.length);
      password += strongChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }
  //For Week PassWord
  generateWeekPassword() {
    let password = '';
    let length = 6;
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * weakChars.length);
      password += weakChars.substring(randomNumber, randomNumber + 1);
    }
    hiddenInput.value = password;
    return password;
  }
  //For Funny password
  generateFunnyPassword() {
    let password = '';
    let randomNumber = Math.floor(Math.random() * funny.length);
    password = funny[randomNumber];
    hiddenInput.value = password;
    return password;
  }
}


//Main calling function
let showPasswordModal = (index) => {
  let password = new Password();
  let pass = '';
  switch (index) {
    case 0: {
      pass = password.generateSuperPassword();
      showModal(pass);
      break;
    }
    case 1: {
      pass = password.generateStrongPassword();
      showModal(pass);
      break;
    }
    case 2: {
      pass = password.generateWeekPassword();
      showModal(pass);
      break;
    }
    case 3: {
      pass = password.generateFunnyPassword();
      showModal(pass);
      break;
    }
  }
}