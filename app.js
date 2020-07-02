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

let click = document.getElementById("click")
// let showBakso = document.getElementsByClassName("intro")

click.addEventListener("click", function(){
    // console.log('tes');
    let urutan = Math.floor(Math.random()*bakso.length)
    // console.log(click.innerText);
    click.innerText = bakso[urutan]
})