"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitParameter = exports.UsernameParameters = void 0;
function UsernameParameters(request) {
    return request === undefined;
}
exports.UsernameParameters = UsernameParameters;
function LimitParameter(request) {
    return isNaN(request);
}
exports.LimitParameter = LimitParameter;
