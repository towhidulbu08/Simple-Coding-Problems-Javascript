const lyrics='Ami Tumi Jabo Jannate Inshahallah. Jannat Is The Only Succes.Hereafter is Truth.Be Carefull Fear The Almighty Allah.'
const searchString='JanNat';
const searchStringLowerCase=searchString.toLowerCase()
//1.includesOf..
const lyricsLowerCase=lyrics.toLowerCase()
//const doesExit=lyricsLowerCase.includes(searchStringLowerCase)
const doesExitOneLine=lyrics.toLowerCase().includes(searchString.toLowerCase())
console.log(doesExitOneLine)
//2.indexOf..
console.log(lyrics.indexOf('fear'))
if(lyrics.indexOf('Fear')!==-1){
    console.log('Does Exit inside the string')
}
else{
    console.log("Doesn't Exit ")
}
//3.startsWith,endsWith
console.log(lyrics.startsWith('Ami'))
console.log(lyrics.endsWith('Allah.'))
