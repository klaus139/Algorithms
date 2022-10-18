function points(games) {
    let total = 0   
    for (let i = 0; i < games.length; i++){
        if (games[i][0] > games[i][2]){
            console.log(games[i][2])
            total += 3
        } else if (games[i][0] === games[i][2]){
            total += 1
        }
    }
    return total
}
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))