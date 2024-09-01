function sumArray(array) {

  if(!array || array.length<3){
    return 0;
    }
  
  let min = Math.min(...array);
  let max = Math.max(...array);
  
  let sum = array.reduce((acc,num)=>{
    return acc + num
  },0)
  sum -=min
  sum -=max     
 return sum                        
}