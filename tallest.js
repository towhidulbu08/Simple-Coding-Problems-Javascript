//find the largest numbers in an array
function maxInArray(numbers){
   let largest=numbers[0]
         for(var i=0;i<numbers.length;i++){
            var index=numbers[i];
            var element=index;
            if(element>largest){
               largest=element;
            }
           
           
         }
         return largest;
        
         
}
const heights=[200,190,120,165,137];
const tallest=maxInArray(heights)
console.log(tallest)