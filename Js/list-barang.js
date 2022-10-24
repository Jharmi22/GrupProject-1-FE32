let containerobat = document.getElementById("container-obat");
let Modalcontainerobat = document.getElementById("list-obat");
// let containerBuah = document.getElementById("container-buah");
// let ModalcontainerBuah = document.getElementById("list-buah");
let cartobat = [];

const isiLSCartobat= localStorage.getItem("cartobat");
// const isiLSCartBuah = localStorage.getItem("cartbuah");
let login = false;
let modalBody = document.querySelector(".modal-body");

let addToCartobat = (id) => {
  let found = localStorage.getItem("login");
  if (found) {
    let objectobatLocalStorage = JSON.parse(localStorage.getItem("obat")); // ngambil dari local storage dengan key obat
    let foundobat = objectobatLocalStorage.find((obat) => {
      return obat.id === Number(id);
    });

    if (isiLSCartobat === null) {
      cartobat.push(foundobat);
      localStorage.setItem("cartobat", JSON.stringify(cartobat));
    } else {
      cartobat = JSON.parse(isiLSCartobat);
      cartobat.push(foundobat);
      localStorage.setItem("cartobat", JSON.stringify(cartobat));
    }
  } else {
    modalBody.innerHTML = `
    <header class="masthead">
      <div class="container-fluid halaman">
        <div style="background-color: rgba(0, 0, 0, 0.5); border-radius: 10px;">
          <div class="masthead-subheading">Green Store</div>
            <div style="z-index: 1" class="masthead-heading">Beli Semaunya, Bayar Seadanya</div>
          </div>
        </div>
    </header>
    <p >Silahkan Login Dulu</p>
    <button class="btn btn-success btn-xl text-uppercase"  type="button" onclick="location.href='loginpage.html'" >
       OK
    </button>
    `;
  }
};


fetch("https://63517f85dfe45bbd55c1db19.mockapi.io/Obat-obatan")
  .then((response) => response.json())
  .then((data) => {
    // menyimpan data ke local storage
    localStorage.setItem("obat", JSON.stringify(data));

    data.forEach((obat) => {
      containerobat.innerHTML += `
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="Barang-item">
        <a class="Barang-link" data-bs-toggle="modal" href=#obat-${obat.id}>
        <div class="Barang-hover">
            <div class="Barang-hover-content"><i class="fas fa-plus fa-3x"></i></div>
          </div>
          <img class="img-fluid" src=${obat.image} alt=${obat.nama} />
          </a>
           <div class="Barang-caption">
          <div class="Barang-caption-heading">${obat.nama}</div>
          <div class="Barang-caption-subheading text-muted">${obat.category}</div>
          <div class="Barang-caption-subheading text-muted">${obat.price}</div>
        </div>
      </div>
    </div>
    `;

      Modalcontainerobat.innerHTML += `
    <div class="Populer-modal modal fade" id=obat-${obat.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><b>Tutup</b></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Product details-->
                    <h2 class="text-uppercase nama-obat">${obat.nama}</h2>
                    <p class="item-intro text-muted"></p>
                    <img class="img-fluid d-block mx-auto" src=${obat.image} alt=${obat.nama} />
                    <p></p>
                    <ul class="list-inline">
                      <li>
                        <strong>Jenis:</strong>
                        ${obat.category }
                      </li>
                      <li>
                        <strong>Harga:</strong>
                        ${obat.price}
                      </li>
                    </ul>

                    <button class="btn btn-success btn-xl text-uppercase buttonobat" id=${obat.id}  type="button"><a class="btn btn-success btn-xl text-uppercase" tombol" data-bs-toggle="modal" href="#modalobat"><i class="fa fa-fw fa-shopping-cart"></i><br>Keranjang</a>
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    let cartobatButtons = document.querySelectorAll(".buttonobat");
    cartobatButtons.forEach((button) => {
      button.addEventListener("click", (e) => addToCartobat(button.id));
    });
  });

// AKhir obat

