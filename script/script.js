//Varible semua element
let body = document.body;

let signUpContainer = document.getElementById('signUpContainer');
let signUpTitle = document.getElementById('signUpTitle');
let signUpUser = document.getElementById('signUpUser');
let signUpPass = document.getElementById('signUpPass');
let signUpButton = document.getElementById('signUpButton');
let signUpDone = document.getElementById('signUpDone');
let signUpFail = document.getElementById('signUpFail');

let signInContainer = document.getElementById('signInContainer');
let signInTitle = document.getElementById('signInTitle');
let signInUser = document.getElementById('signInUser');
let signInPass = document.getElementById('signInPass');
let signInButton = document.getElementById('signInButton');
let signInDaftarYuk = document.getElementById('signInDaftarYuk');
let signInError = document.getElementById('signInError');
let logoutButton = document.getElementById('logoutButton');

//Menghilangkan Sign Up container saat Sign In
signUpContainer.style.display = 'none';
signUpFail.style.display = 'none';
signUpDone.style.display = 'none';
signInError.style.display = 'none';
loginAdmin.style.display = 'none';
loginNew.style.display = 'none';
loginStaff.style.display = 'none';
logoutButton.style.display = 'none';

//Function Buat Akun Baru
function signUp() {
  if (signUpUser.value !== '' && signUpPass !== '') {
    localStorage.setItem('username', signUpUser.value);
    localStorage.setItem('role', 'new account');
    localStorage.setItem('password', signUpPass.value);
    signUpDone.style.display = 'block';
    signUpFail.style.display = 'none';
  } else {
    signUpFail.style.display = 'block';
    signUpDone.style.display = 'none';
  };
};

//Function Untuk Masuk atau login
function signIn() {
  if (signInUser.value == localStorage.getItem('username') && signInPass.value == localStorage.getItem('password')) {
    localStorage.setItem('role', 'new account')
    signInContainer.style.display = 'none'
    logoutButton.style.display = 'block'
    loginNew.style.display = 'block'
    signInError.style.display = 'none'
    body.style.backgroundColor = 'white'
  } else if (signInUser.value == 'admin' && signInPass.value == 'admin') {
    localStorage.setItem('username', 'admin')
    localStorage.setItem('role', 'admin')
    signInContainer.style.display = 'none'
    logoutButton.style.display = 'block'
    loginAdmin.style.display = 'block'
    signInError.style.display = 'none'
    body.style.backgroundColor = 'white'
  } else if (signInUser.value == 'staff' && signInPass.value == 'staff') {
    localStorage.setItem('username', 'staff')
    localStorage.setItem('role', 'staff')
    signInContainer.style.display = 'none'
    logoutButton.style.display = 'block'
    loginStaff.style.display = 'block'
    signInError.style.display = 'none'
    body.style.backgroundColor = 'white'
  }
  else {
    signInError.style.display = 'block'
  }
}
if (localStorage.getItem('username')) {
  logoutButton.style.display = 'block';
  signInContainer.style.display = 'none';
  body.style.backgroundColor = 'white';
  if (localStorage.getItem('role') == 'admin') {
    loginAdmin.style.display = 'block';
  } else if (localStorage.getItem('role') == 'staff') {
    loginStaff.style.display = 'block';
  } else if (localStorage.getItem('role') == 'new account') {
    loginNew.style.display = 'block';
  };
};

//Memunculkan Sign Up container Saat MengKlik Daftar
function daftar() {
  signUpContainer.style.display = 'flex';
  signInContainer.style.display = 'none';
};

//Memunculkan SignIn Container saar MengKlik Masuk setelah Daftar
function login() {
  signUpContainer.style.display = 'none';
  signInContainer.style.display = 'flex';
};

//Functiom Untuk Logout
function logout() {
  localStorage.clear();
  location.reload();
};
