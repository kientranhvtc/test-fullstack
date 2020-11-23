function solve(a) {
    for(let i=0;i<a.length;i++){
        a[i].position = i+1;
    }
    a.sort((i, j) => {
        if(i.points===j.points){
            if(i.GD === j.GD){
                var namei = i.name.toUpperCase(); 
                var namej = j.name.toUpperCase();
                if (namei > namej) {
                    return -1;
                }
                if (namei < namej) {
                    return 1;
                }

                return 0;
            }
            else return j.GD - i.GD;
        }
        else return j.points - i.points;
    });
    
    console.log(a);
}
  
solve([
    {
      name: "Arsenal",
      points: 99,
      GD: 45,
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39,
    },
    {
      name: "MU",
      points: 60,
      GD: 29,
    },
    {
      name: "Liver",
      points: 99,
      GD: 43,
    },
]);