export const getStreak = (gamedata: any) :any =>{
    let historyString = '';
    let i : number;
    for(i = 0; i < 5; i++){
     //   console.log(gamedata[i].rating + "  /   " + gamedata[i+1].rating);
       /* if(gamedata[i+1].rating = undefined){
            console.log("ende i : " +i);
            if(gamedata[i].streak < 0){
                historyString += 'L-'
            }else{
                historyString += 'W-'
            }
        } */
        if(gamedata[i].rating < gamedata[i+1].rating){
            historyString += 'L-'
        }
        if(gamedata[i].rating > gamedata[i+1].rating)
        {
            historyString += 'W-'
        } 
    }
    return historyString;
}