

function printStairs(n) {
    var n = n;
    var space, hash, stairs;

    for (var i = 0; i < n; i++){
        hash = i + 1;
        stairs = ' '.repeat(space) + '#'.repeat(hash);
        console.log(stairs);    
    }  
}

printStairs(13);