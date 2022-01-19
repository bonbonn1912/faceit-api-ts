"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAnswerString(playerModel) {
    const missingElo = getLevelAndPoints(playerModel.elo);
    if (missingElo.level === 11) {
        return "Invalid Query";
    }
    else if (missingElo.isMax) {
        return `${playerModel.username} is Level 10 with ${playerModel.elo} Elo`;
    }
    else {
        return `${playerModel.username} is Level ${missingElo.level} with ${playerModel.elo} Elo. Elo needed for Level ${missingElo.level + 1}: ${missingElo.missingElo}.`;
    }
}
exports.default = getAnswerString;
function getLevelAndPoints(elo) {
    var missingElo;
    const level1 = 1;
    const level2 = 801;
    const level3 = 951;
    const level4 = 1101;
    const level5 = 1251;
    const level6 = 1401;
    const level7 = 1551;
    const level8 = 1701;
    const level9 = 1851;
    const level10 = 2001;
    if (elo > level1 && elo < level2) {
        missingElo = {
            isMax: false,
            level: 1,
            missingElo: level2 - elo
        };
        return missingElo;
    }
    else if (elo > level2 && elo < level3) {
        missingElo = {
            isMax: false,
            level: 2,
            missingElo: level3 - elo
        };
        return missingElo;
    }
    else if (elo > level3 && elo < level4) {
        missingElo = {
            isMax: false,
            level: 3,
            missingElo: level4 - elo
        };
        return missingElo;
    }
    else if (elo > level4 && elo < level5) {
        missingElo = {
            isMax: false,
            level: 4,
            missingElo: level5 - elo
        };
        return missingElo;
    }
    else if (elo > level5 && elo < level6) {
        missingElo = {
            isMax: false,
            level: 5,
            missingElo: level6 - elo
        };
        return missingElo;
    }
    else if (elo > level6 && elo < level7) {
        missingElo = {
            isMax: false,
            level: 6,
            missingElo: level7 - elo
        };
        return missingElo;
    }
    else if (elo > level7 && elo < level8) {
        missingElo = {
            isMax: false,
            level: 7,
            missingElo: level8 - elo
        };
        return missingElo;
    }
    else if (elo > level8 && elo < level9) {
        missingElo = {
            isMax: false,
            level: 8,
            missingElo: level9 - elo
        };
        return missingElo;
    }
    else if (elo > level9 && elo < level10) {
        missingElo = {
            isMax: false,
            level: 9,
            missingElo: level10 - elo
        };
        return missingElo;
    }
    else if (elo > level10) {
        missingElo = {
            isMax: true,
            level: 10,
            missingElo: 0,
        };
        return missingElo;
    }
    missingElo = {
        isMax: false,
        level: 11,
        missingElo: 0,
    };
    return missingElo;
}
