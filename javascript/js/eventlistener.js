function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("coba eventlistener");
}

//judul.addEventListener("click", coba);

judul.onclick = coba;