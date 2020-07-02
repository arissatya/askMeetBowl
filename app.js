let bakso = [
    'Bakso Solo',
    'Bakwan Malang',
    'Bakso Wonogiri',
    'Baso Cuanki',
    'Mie Bakso',
    'Baso Jumbo',
    'Baso Tusuk',
    'Baso Aci',
    'Bakso Ikan',
    'Bakso Spagheti',
    'Baso Cilok',
]
let minuman = [
    'Kalau minumnya Es Kelapa enak juga',
    'Es Kelapa Muda bareng baso paling juara',
    'Kalau minumannya Es Kelapa Jeruk, mix match luar biasa',
    'Makan ditemani manis sirup Es Kelapa Kopyor ga bakal salah',
    'Teman makan baso untuk yang suka berpetualang, minum Es Jeruk',
    'Minum Es Teh, buat para garis lurus',
    'Pesen minumnya Es Soda Gembira, biar hepi-hepi',
    'Apapun baksonya, minumnya Teh Botol',
    'Minum Es Teh tawar, hmm.. klasik'
]

let click = document.getElementById("click")
// let showBakso = document.getElementsByClassName("intro")

click.addEventListener("click", function(){
    // console.log('tes');
    // console.log(click.innerText);
    let urutan = Math.floor(Math.random()*bakso.length)
    let minum = Math.floor(Math.random()*minuman.length)
    click.innerText = bakso[urutan]
    window.alert(`${minuman[minum]}`);
})

// click.addEventListener("click", function(){
//     let urutan = Math.floor(Math.random()*bakso.length)
// })