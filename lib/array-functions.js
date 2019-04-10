function mapArray(arr, callback) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      newArray[i] = callback(arr[i]);
    } 
  }
  return newArray;
}



module.exports = {
  mapArray,
  
};
