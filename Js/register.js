let form = document.getElementById("form");
let submit = document.getElementById("submit");
let hasil = document.getElementById("hasil");
let hasilregister = [];
let hapusLogin = document.getElementById("login");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const konfirpassword = document.getElementById("konfirpassword");

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

  if (nama === "") {
    nama_status = false;
  } else {
    nama_status = true;
  }

  if (konfirpassword !== password) {
    konfirpassword_status = false;
  } else {
    konfirpassword_status = true;
  }
  if (email_status && password_status && nama && konfirpassword) {
    simpanData();
    hasil.style.color = "green";
    hasil.innerHTML = "Anda Berhasil Mendaftar";
    hapusLogin.remove();
    submit.innerHTML = `<button id="submit" type="submit" class="button"  onclick="location.href='loginpage.html'">Lanjutkan Kogin</button>`;
  } else {
    hasil.style.color = "red";
    hasil.innerHTML = "Enter valid data";
  }
  // simpanData();
  hapus();
});

function simpanData() {
  // HasilLogin.push(form);
  let HasilDaftar = {
    Key: "0",
    nama: nama.value,
    mail: email.value,
    Password: password.value,
  };
  hasilregister.push(HasilDaftar);
  let Daftar = JSON.stringify(hasilregister);
  localStorage.setItem("register", Daftar);
}
function hapus() {
  form.reset();
}
