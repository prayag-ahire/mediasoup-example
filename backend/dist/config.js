"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const os_1 = __importDefault(require("os"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 5000;
exports.config = {
    domain: 'localhost',
    http: {
        listenIP: '0.0.0.0',
        listenPort: 4443
    },
    mediasoup: {
        numWorkers: Object.keys(os_1.default.cpus()).length,
        workerSetting: {
            rtcMinPort: 10000,
            rtcMaxPort: 10100,
            logLevel: 'debug',
            logTags: [
                'info',
                'ice',
                'dtls',
                'rtp',
                'srtp',
                'rtcp'
            ],
        },
        routerOptions: {
            mediaCodecs: [
                {
                    kind: 'audio',
                    mimeType: 'audio/opus',
                    clockRate: 48000,
                    channels: 2
                },
                {
                    kind: 'video',
                    mimeType: 'video/VP8',
                    clockRate: 90000,
                    parameters: {
                        'x-google-start-bitrate': 1000
                    }
                },
            ],
        },
        // webrtctransport setting 
        webRtcTransport: {
            listenIps: [
                {
                    ip: '0.0.0.0',
                    announcedIp: '127.4.4.4'
                },
            ],
        },
    }
};
