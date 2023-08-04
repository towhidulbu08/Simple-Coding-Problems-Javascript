//1.spilt,2.slice,3.substr,4.substring,5.concat,6.join
const lyrics='Ami Tumi Jabo Jannate Inshahallah. Jannat Is The Only Succes.Hereafter is Truth.Be Carefull Fear The Almighty Allah.'
//spilt-->return an array..
const partsSpilt=lyrics.split(' ')
//console.log(lyrics.split(''))
//slice--> return an small section of a string using index
const partial=lyrics.slice(5,8)
console.log(partial)
//substring
const partial2=lyrics.substring(5,8)
console.log(partial2)
//concat.


//join.
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
