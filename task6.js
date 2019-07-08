var n = n;
function generateNumberTriangle(n) {
    var width = (2 * n) -1; 
    var midpoint = Math.floor(width / 2);
    let level = '';

    for(var i = 0; i < n; i++){  
        level = '';
        for(var j = 0; j < width; j++){
            if(j < midpoint-i || j > midpoint+i){
                level += '.';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }
}
generateNumberTriangle(6);

