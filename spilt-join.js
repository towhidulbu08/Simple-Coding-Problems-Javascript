//1.spilt,2.slice,3.substr,4.substring,5.concat,6.join
const lyrics='Ami Tumi Jabo Jannate Inshahallah. Jannat Is The Only Succes.Hereafter is Truth.Be Carefull Fear The Almighty Allah.'
//spilt-->spilt a string into substring using specified separator and return them as an array..
const partsSpilt=lyrics.split(' ')
//console.log(lyrics.split(''))
//slice--> return a section of a string 
const partial=lyrics.slice(5,8)
console.log(partial)
//substring--> returns the substring at the specified location within a string
const partial2=lyrics.substring(5,8)
console.log(partial2)
//concat---> returns a string that contains the concatenation of two or more strings

var add=partial.concat()
//join--> adds all the elements of an array into a string , separated by specified separator string
const lines=
[
    'Ami Tumi Jabo Jannate Inshahallah',
    ' Jannat Is The Only Succes',
    'Hereafter is Truth',
    'Be Carefull Fear The Almighty Allah',
    ''
  ]
  const stringJoin=lines.join('. ')
  console.log(stringJoin)
