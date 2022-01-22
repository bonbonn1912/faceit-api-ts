"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMatchroom = void 0;
const matchroom_1 = require("./matchroom");
const registerMatchroom = (req, res) => {
    if (isNewGame(req.body.event)) {
        var key = (0, matchroom_1.createMatchroom)(req.headers.authorization, req.body);
        res.send(key);
        (0, matchroom_1.setMap)(key, req.body.payload.id);
        (0, matchroom_1.setAvgElo)(key, req.body.payload.id);
    }
    else if (req.body.event !== 'match_object_created') {
        (0, matchroom_1.closeMatchroom)(req.headers.authorization);
        res.send("Match has been closed");
    }
    else {
        res.send("Invalid Post request");
    }
};
exports.registerMatchroom = registerMatchroom;
function isNewGame(event) {
    if (event == 'match_status_configuring') {
        return true;
    }
    return false;
}
