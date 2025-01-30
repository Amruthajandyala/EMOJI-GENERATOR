const clickme= document.querySelector('#btn')
console.log("clickme",clickme)
const output = document.querySelector(".output")
console.log("output",output)

const url ="https://emoji-api.com/emojis?access_key=4dacc15219d9890c2f538d1b361a15b8b643274b";

function getRandom(n){
    return Math.floor(Math.random()*n)
}

clickme.addEventListener("click",async() => {
    let getData=await fetch(url);
    getData = await getData.json()
    console.log("getData length",getData.length);
    console.log("getData",getData);
    console.log(getRandom(getData.length),"getRandom")
    console.log("random getRandomData",getData[getRandom(getData.length)])
    const randomN=getRandom(getData.length)
    const character=getData[randomN].character
    const unicode =getData[randomN].unicodeName
    console.log(character)
    console.log(unicode)

    clickme.textContent = character
    output.textContent = unicode
})