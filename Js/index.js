let ModalcontainerSayur = document.getElementById("list-sayur");
let ModalcontainerBuah = document.getElementById("list-buah");

fetch("https://west-broad-gerbil.glitch.me/sayur")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((sayur) => {
      ModalcontainerSayur.innerHTML += `
    <div class="Populer-modal modal fade" id=sayur-${sayur.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><b>Tutup</b></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Product details-->
                    <h2 class="text-uppercase">${sayur.name}</h2>
                    <p class="item-intro text-muted"></p>
                    <img class="img-fluid d-block mx-auto" src=${sayur.photo} alt=${sayur.name} />
                    <p></p>
                    <ul class="list-inline">
                      <li>
                        <strong>Jenis:</strong>
                        ${sayur.jenis}
                      </li>
                      <li>
                        <strong>Harga:</strong>
                        ${sayur.harga}/Kg
                      </li>
                      <li>
                        <strong>Stok:</strong>
                        ${sayur.stok} Kg
                      </li>
                    </ul>
                    <button class="btn btn-success btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onclick="location.href='list-barang.html'">
                    
                    Lihat List Barang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    });
  });

fetch("https://west-broad-gerbil.glitch.me/buah")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((buah) => {
      ModalcontainerBuah.innerHTML += `
      <div class="Populer-modal modal fade" id=buah-${buah.id} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal"><b>Tutup</b></div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    <!-- Product details-->
                    <h2 class="text-uppercase">${buah.name}</h2>
                    <p class="item-intro text-muted"></p>
                    <img class="img-fluid d-block mx-auto" src=${buah.photo} alt=${buah.name} />
                    <p></p>
                    <ul class="list-inline">
                      <li>
                        <strong>Jenis:</strong>
                        ${buah.jenis}
                      </li>
                      <li>
                        <strong>Harga:</strong>
                        ${buah.harga}/Kg
                      </li>
                      <li>
                        <strong>Stok:</strong>
                        ${buah.stok} Kg
                      </li>
                    </ul>

                    <button class="btn btn-success btn-xl text-uppercase" data-bs-dismiss="modal" type="button" onclick="location.href='list-barang.html'">
                    
                    Lihat List Barang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  });
