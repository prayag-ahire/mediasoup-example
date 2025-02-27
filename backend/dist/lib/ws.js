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
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketconnection = void 0;
const mediasoup_1 = require("mediasoup");
let mediasoupRouter;
const websocketconnection = (wss) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mediasoupRouter = yield (0, mediasoup_1.createWorker)();
    }
    catch (error) {
        throw error;
    }
    wss.on('connection', (ws) => {
        ws.on("message", (message) => {
            console.log("message : -> ", message.toString());
            ws.send("hello world");
        });
    });
});
exports.websocketconnection = websocketconnection;
