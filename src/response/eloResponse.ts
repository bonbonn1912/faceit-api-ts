import { PlayerModel } from '../interfaces/idModel';
import { MissingElo } from '../interfaces/eloResponse';

export default function getAnswerString(playerModel: PlayerModel): string {
   const missingElo : MissingElo = getLevelAndPoints(playerModel.elo);
   if(missingElo.level === 11){
    return "Invalid Query";
   }else if(missingElo.isMax){
    return `${playerModel.username} is Level 10 with ${playerModel.elo} Elo`;
   }else{
       return `${playerModel.username} is Level ${missingElo.level} with ${playerModel.elo} Elo. Elo needed for Level ${missingElo.level + 1}: ${missingElo.missingElo}.`;
   }

}

function getLevelAndPoints(elo: number) : MissingElo  {
    var missingElo: MissingElo;
    const level1: number = 1;
    const level2: number = 801;
    const level3: number = 951;
    const level4: number = 1101;
    const level5: number = 1251;
    const level6: number = 1401;
    const level7: number = 1551;
    const level8: number = 1701;
    const level9: number = 1851;
    const level10: number = 2001;
    if (elo > level1 && elo < level2) {
        missingElo = {
            isMax: false,
            level: 1,
            missingElo: level2 - elo
        }
        return missingElo;

    } else if (elo > level2 && elo < level3) {
        missingElo = {
            isMax: false,
            level: 2,
            missingElo: level3 - elo
        }
        return missingElo;

    } else if (elo > level3 && elo < level4) {
        missingElo = {
            isMax: false,
            level: 3,
            missingElo: level4 - elo
        }
        return missingElo;

    } else if (elo > level4 && elo < level5) {
        missingElo = {
            isMax: false,
            level: 4,
            missingElo: level5 - elo
        }
        return missingElo;

    } else if (elo > level5 && elo < level6) {
        missingElo = {
            isMax: false,
            level: 5,
            missingElo: level6 - elo
        }
        return missingElo;

    } else if (elo > level6 && elo < level7) {
        missingElo = {
            isMax: false,
            level: 6,
            missingElo: level7 - elo
        }
        return missingElo;

    } else if (elo > level7 && elo < level8) {
        missingElo = {
            isMax: false,
            level: 7,
            missingElo: level8 - elo
        }
        return missingElo;

    } else if (elo > level8 && elo < level9) {
        missingElo = {
            isMax: false,
            level: 8,
            missingElo: level9 - elo
        }
        return missingElo;
    } else if (elo > level9 && elo < level10) {
        missingElo = {
            isMax: false,
            level: 9,
            missingElo: level10 - elo
        }
        return missingElo;
    } else if(elo > level10){
        missingElo = {
            isMax: true,
            level: 10,
            missingElo: 0,
        }
        return missingElo;
    }
    missingElo = {
        isMax: false,
        level: 11,
        missingElo: 0,
    }
    return missingElo;
}
