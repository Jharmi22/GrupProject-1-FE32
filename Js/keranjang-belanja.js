let array = [];
let array1 = [];
let dataprice = [];
datakuantitiy = [];
datakuantitiy1 = [];
namanama = [];
listtotal = {};
let TOTAL = {}

let keranjangBelanjaobat = document.getElementById("keranjang-belanjaobat");
let obat = JSON.parse(localStorage.getItem("cartobat"));

const belanja = () =>{
  localStorage.setItem('total_belanja',JSON.stringify(TOTAL))
}
const convert = (arr) => {
  const res = {};
  arr.forEach((obj) => {
    const key = `${obj.id}`;
    if (!res[key]) {
      res[key] = { ...obj, count: 0 };
    }
    res[key].count += 1;
  });
  return Object.values(res);
};

let reduceobat = convert(obat);

reduceobat.forEach((obat) => {
  const harga = parseInt(obat.price.replace("Rp","").replace(".",""))
  const jml = parseInt(obat.count)
  listtotal[obat.id] = {"harga":harga,"qty":obat.count}
  keranjangBelanjaobat.innerHTML += `
    <div class="row d-flex justify-content-between keranjangbelanja" id="keranjang-${obat.id}">
  <div class="col-2 rincianbarang gambar" style="text-align: center;">
    <img src=${obat.image} alt="" style="width:50%">
  </div>
  <div class="col-2 rincianbarang kata nama" style="text-align: center;" id="nama${obat.id}">
    ${obat.nama}   
  </div>
  <div class="col-2 rincianbarang-${obat.id}-${obat.nama}  kata jenis" style="text-align: center;" id="value-${obat.id}">
   Rp. <span class="total-rincianbarang" id="${obat.id}-${obat.nama}_${obat.price}">${harga * obat.count}</span>
  </div>
  <div class="col-2 rincianbarang kuantitas" style="text-align: center;">


  <input type="number" id="numberPlace" autocomplete="off" class="w-100 jumlah-quantity" min="1" nama="${obat.id}-${obat.nama}" value=${jml} />


</div>
  <div class="col-2 rincianbarang kata" style="text-align: center;">
  <button id="hapusitem-${obat.id}" ><span class="material-icons">
  delete
  </span>
  </button>
    </div>
    </div>

    `;
  let plusbutton = document.querySelectorAll(`.plusCartobat`);
  let jml_qty = document.querySelectorAll(".jumlah-quantity");
  let totalpriceobat = document.querySelectorAll(".total-rincianbarang");

  plusbutton.forEach((element) => {
    element.addEventListener("click", function (event) {
      let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
      quantityFind.forEach((quantity) => {
        if (quantity.nama === element.nama) {
          quantity.value = Number(quantity.value) + 1;
          totalprice = [];
        }
      });
      totalpriceobat.forEach((total) => {
        if (total.id.split("_")[0] === element.nama) {
          total.textContent = Number(total.textContent) + Number(total.id.split("_")[1]);
        }
      });
    });
  });

  function set_total() {
    var total_semua = 0
    let quantityFind = document.querySelectorAll(`.jumlah-quantity`);
    var total = 0
    quantityFind.forEach((quantity) => {
      total += parseInt(quantity.value)
    });

    for (const i of Object.values(listtotal)) {
      console.log(i);
      total_semua += parseInt(i["harga"]) * parseInt(i["qty"])
    }
    document.querySelector("#jumlahbarang").innerText = total;
    let totalpembayaran = document.getElementById("totalpembayaran").innerText = total_semua
    TOTAL["jumlah"] = total_semua
    TOTAL["qty"] = total
  }
  set_total();
  jml_qty.forEach((element) => {
    element.addEventListener("change", function (event) {
      listtotal[obat.id]["qty"] = element.value
      
      set_total();


      // totalpriceobat.forEach((total) => {
      //   if (total.id.split("_")[0] === element.nama) {
      //     total.textContent = Number(total.textContent) - Number(total.id.split("_")[1]);
      //   }
      // });
    });
  });
  let hapusButton = document.querySelector(`#hapusitem-${obat.id}`);
  let hapusobat = document.querySelector(`#keranjang-${obat.id}`);

  hapusButton.onclick = function () {
    alert("Data sudah dihapus");
    hapusobat.remove();
    const items = JSON.parse(localStorage.getItem("cartobat"));
    const filtered = items.filter((item) => item.id !== obat.id);
    localStorage.setItem("cartobat", JSON.stringify(filtered));
    refresh();
  };

  function refresh() {
    window.location.reload();
  }
  var totkun = 0;
  var total = 0;

  let gambarproduk = `${obat.image}`;
  let quantity = parseInt(document.getElementById("numberPlace").value);
  let pricebarang = parseInt(document.getElementById(`${obat.id}-${obat.nama}_${obat.price}`).innerHTML);

  namanama.push(gambarproduk);
  datakuantitiy.push(quantity);
  array.push(pricebarang);

  for (i = 0; i < array.length; i++) {
    total += array[i];
    // console.log(total);
  }

  for (i = 0; i < datakuantitiy.length; i++) {
    totkun += datakuantitiy[i];
  }
  let jumlahbarang = document.querySelector("#jumlahbarang");
  let totalpembayaran = document.getElementById("totalpembayaran");
  jumlahbarang.innerHTML = totkun;
  totalpembayaran.innerHTML = total;
});

// let quantity = parseInt(document.getElementById("numberBuah").value);
// quantity++;

// cartobatButtons.forEach(() => {

// });
//hapus element


  
 
  
 

  