console.log ("Merhaba Kodlama.io")

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "Ankara"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11
console.log(euroDun)
//array
let konutKredileri = ['Konut Kredisi', 'Emlak Konut Kredisi', 'Kamu Konut Kredisi', 'Ozel Konut Kredisi']
// istersek bu dizi içerisinde sayı, isimlendirme veya tekrar dizi yazabiliriz.
console.log(konutKredileri)

console.log("<ul>")
for (let  i = 0; i<konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

{/* <ul>
    <il>Konut Kredisi</il>
    <il>Emlak Konut Kredisi</il>
    <il>Kamu Konut Kredisi</il>
    </ul> */}