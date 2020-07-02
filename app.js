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
    // console.log(click.innerText);
    let urutan = Math.floor(Math.random()*bakso.length)
    click.innerText = bakso[urutan]
    window.alert(`kamu mau makan ${bakso[urutan]} ga?`);
})

// click.addEventListener("click", function(){
//     let urutan = Math.floor(Math.random()*bakso.length)
// })