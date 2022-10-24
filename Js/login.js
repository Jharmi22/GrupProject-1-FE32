let form = document.getElementById("form").value;
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");
let hasilLogin = [];
let hapusRegister = document.getElementById("register");
let login = false;
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "") {
    email_status = false;
  } else {
    email_status = true;
  }

  if (password === "") {
    password_status = false;
  } else {
    password_status = true;
  }

  if (email_status && password_status) {
    simpanData();
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Enter valid data";
  }

  hapus();
});

function simpanData() {
  let HasilLogin = {
    Key: "0",
    mail: email.value,
    Password: password.value,
  };
  console.log(HasilLogin);
  let registerUser = JSON.parse(localStorage.getItem("register"));
  if (registerUser) {
    let found = registerUser.find((user) => {
      return HasilLogin.mail === user.mail && HasilLogin.Password === user.Password;
    });
    if (found) {
      console.log(found);
      localStorage.setItem("login", JSON.stringify(HasilLogin));
      hasil.style.color = "green";
      hasil.innerHTML = "Anda Berhasil Login";
      hapusRegister.classList.add("hide");
      location.href='list-barang.html'
    } else {
      alert("Akun tidak ditemukan");
    }
  }
}

// function hapus() {
//   form.reset();
// }
