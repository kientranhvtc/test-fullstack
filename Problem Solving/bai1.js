let solve = function(a,b){
    let c = [];
    for (let i=0;i<a.length;i++){
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                a.splice(i,1);
                b.splice(j,1);
            }
        }
    }
    a = a.concat(b);
    console.log(a);
}

solve([1, 2, "a"],[1, 3, "b"])