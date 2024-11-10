const alfabeto = {
    'a': "🦇",
    'b': "⛰️",
    'c': "🦀",
    'd': "🌮",
    'e': "🎹",
    'f': "📊",
    'g': "🍤",
    'h': "🌴",
    'i': "🛑",
    'j': "🐬",
    'k': "🥁",
    'l': "✅",
    'm': "🌜",
    'n': "🐍",
    'o': "☀️",
    'p': "🧢",
    'q': "🎺",
    'r': "📈",
    's': "⚡",
    't': "☂️",
    'u': "↩️",
    'v': "🚩",
    'w': "🌛",
    'x': "⚔️",
    'y': "☔",
    'z': "👠",
    ' ': "   "
};


let result = '';    
let caracterInvalid = 0;
let cripDesc = 0;
var splitter = new GraphemeSplitter();


function criptografar(){

    this.frase = document.getElementById("texto1").value;
    this.frase = this.frase.toLowerCase();
    let fr = Object.entries(frase);
    
    fr.forEach(i =>{
        
        if(alfabeto.hasOwnProperty(i[1])){
            result += alfabeto[i[1]];
        }else{
            console.log(`insira um valor válido: ${i[1]}`);
            result += i[1];
        }
    });

    return result;
}

function descriptografar(){

    this.frase = document.getElementById("texto2").value;
    let entries = Object.entries(alfabeto).map(([key, val]) => [val, key]);
    let graphemes = splitter.splitGraphemes(this.frase);
    let alfabetoEmoji = Object.fromEntries(entries);
    
    graphemes.forEach(i =>{

        if(alfabetoEmoji.hasOwnProperty(i)){
            result += alfabetoEmoji[i];
        }else{
            console.log(`insira um valor válido: ${i}`);
            result += i;
        }
    });

    return result;
}

function inputCrip(){
    result = "";

    document.getElementById("texto2").value = criptografar();

    const texto1 = document.getElementById("texto1");
    const textoL = texto1.value.toLowerCase();
    const img = document.getElementById("img");
    const textimg = document.getElementById("textimg");

    if (textoL === "lany") {
        img.style.display = "block";
        textimg.style.display = "block";
    } else {
        img.style.display = "none";
        textimg.style.display = "none";
    }
}
function inputDesc(){
    result = "";

    document.getElementById("texto1").value = descriptografar();
}
