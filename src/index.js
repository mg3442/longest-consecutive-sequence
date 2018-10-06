module.exports = function longestConsecutiveLength(array) {
  const obj = {};
  let count = 1;
  let max = 0;
  for( let i = 0; i < array.length; i++ ){

    if( !obj[array[i]] ){

        obj[array[i]] = true;
    }
}
  
  for( let pos in obj ){

      if( obj[pos] && obj[( parseInt(pos) + 1 )] ){

          count++;
      }
      else {

          if(count > max){

              max = count;
          }
          count = 1;
      }
  }

  return max;

}
