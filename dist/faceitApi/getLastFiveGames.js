"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../config/env");
function getLastFiveGames(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://open.faceit.com/data/v4/players/${user_id}/stats/csgo`;
        return new Promise((resolve, reject) => {
            axios_1.default.get(url, {
                headers: {
                    'Authorization': `Bearer ${env_1.SECRETS.API_KEY}`
                }
            }).then((response) => {
                resolve(response.data.lifetime["Recent Results"].map((result) => result < 1 ? "L/" : "W/").reverse().join("").slice(0, -1));
            }).catch((err) => reject(err));
        });
    });
}
exports.default = getLastFiveGames;
