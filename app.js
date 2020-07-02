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
    'Es Kelapa',
    'Es Kelapa Muda',
    'Es Kelapa Jeruk',
    'Es Kelapa Kopyor',
    'Es Jeruk',
    'Es Teh',
    'Es Soda Gembira',
    'Teh Botol',
    'Es Teh'
]

let click = document.getElementById("click")
// let showBakso = document.getElementsByClassName("intro")

click.addEventListener("click", function(){
    // console.log('tes');
    // console.log(click.innerText);
    let urutan = Math.floor(Math.random()*bakso.length)
    let minum = Math.floor(Math.random()*minuman.length)
    click.innerText = bakso[urutan]
    window.alert(`kamu mau minum ${minuman[minum]} ga?`);
})

// click.addEventListener("click", function(){
//     let urutan = Math.floor(Math.random()*bakso.length)
// })