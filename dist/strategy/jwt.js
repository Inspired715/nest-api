"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const KEY = require("../strategy/constants.json");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: KEY.PRIMARY_KEY
        });
    }
    async validate(payload) {
        console.log('payload', payload);
        return { email: payload.email };
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.js.map