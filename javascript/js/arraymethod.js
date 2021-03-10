// array -> string, number, objek, function, campuran

let nilai = [
    {nama:"budi", ipa:90, bahasa:80, matematika: 70},
    {nama:"joni", ipa:100, bahasa:70, matematika: 80},
    {nama:"siti", ipa:90, bahasa:80, matematika: 60},
    {nama:"tejo", ipa:70, bahasa:80, matematika: 70},
];

let nama = ["budi", "joni", "siti", "tejo"];

//nama.push("ani", "roma");

//console.log(nama.shift());

//nama.unshift("bobi", "roki");

//console.log (nama.slice(3, 4));

let mapel = ['ipa', 'bahasa', 'matematika'];

//console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn" , "sejarah"]));

//console.log(nama.pop());

//console.log(nilai[0].nama);

//console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a){
//     console.log(a);
// })

// nama.forEach(a => console.log(a));

// nilai.filter(function(a){
//     if (a.ipa > 80){
//         console.log(a);
//     }
// });

// nilai.filter(a => (a.ipa>80 ? console.log (a) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map((a) => [a.nama, a.ipa]);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.ipa);
// }, 0);

let hasil = nilai.reduce((a, b) => (a=a+b.ipa), 0);

console.log(hasil);