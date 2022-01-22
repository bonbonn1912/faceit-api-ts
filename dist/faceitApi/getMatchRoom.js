"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchFromFaceit = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
function getMatchFromFaceit(match_id) {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`https://open.faceit.com/data/v4/matches/${match_id}`, {
            headers: {
                'Authorization': `Bearer ${env_1.SECRETS.API_KEY}`
            }
        })
            .then((res) => {
            //  console.log(res.data);
            resolve(res.data);
        })
            .catch((error) => {
            reject(error.message);
        });
    });
}
exports.getMatchFromFaceit = getMatchFromFaceit;
