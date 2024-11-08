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

    this.frase = document.getElementById("texto").value;
    frase = frase.toLowerCase();
    let fr = Object.entries(frase);
    
    fr.forEach(i =>{
        
        if(alfabeto.hasOwnProperty(i[1]) && caracterInvalid == 0){
            result += alfabeto[i[1]];
        }else if (caracterInvalid == 0){
            console.log(`insira um valor válido: ${i[1]}`);
            result = "";
            document.getElementById("texto").value = "";
            caracterInvalid++;
        }
    });
}

function descriptografar(){

    this.frase = document.getElementById("texto").value;
    let entries = Object.entries(alfabeto).map(([key, val]) => [val, key]);
    let graphemes = splitter.splitGraphemes(this.frase);
    let alfabetoEmoji = Object.fromEntries(entries);
    
    graphemes.forEach(i =>{

        if(alfabetoEmoji.hasOwnProperty(i) && caracterInvalid == 0){
            result += alfabetoEmoji[i];
        }else if (caracterInvalid == 0){
            console.log(`insira um valor válido: ${i}`);
            result = "";
            document.getElementById("texto").value = "";
            caracterInvalid++;
        }
    });
}

function input(){
    result = "";

    if (cripDesc == 1){
        descriptografar();
    }else{
        criptografar();
    }

    document.getElementById("parag").innerText = result;
}

function criptografarDescrip(){
    cripDesc = !cripDesc;
    //1 = desc
    //0 = crip
    document.getElementById("testelegal").innerText = cripDesc;

    document.getElementById("texto").value = result;
    input();
}

function apagar(){
    document.getElementById("parag").innerText = "";
    document.getElementById("texto").value = "";
    result = "";
    this.frase = "";
    caracterInvalid = 0;
}
