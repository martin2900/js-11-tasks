var rangeSum = function(start,end){
  var arr = [];
  for (var i = start; i <= end; i++){ 
    arr.push(i);
      }
  return arr.reduce(function(start,end){
    return start + end;   
  });
};
console.log(rangeSum(3,4));

//????????


