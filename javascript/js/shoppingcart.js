let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Apel Manalagi", gambar:"kamera.jpg", harga:10000},
    {idmenu:2, idkategori:1, menu:"Pisang Raja", gambar:"jacket.jpg", harga:13000},
    {idmenu:3, idkategori:2, menu:"Nasi Padang", gambar:"headphone.jpg", harga:12000},
    {idmenu:4, idkategori:2, menu:"Nasi Ayam", gambar:"celana.jpg", harga:16000},
];

let tampil =  tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="image">
        <img src="produk/${kolom.gambar}" alt=""/>
    </div>
    <div class="titel">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2>
    </div>
</div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelector(".btn-beli > button");
btnbeli.onclick = function () {
    console.log(btnbeli.setdata.id);
}