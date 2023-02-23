"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
        this.authList = [
            {
                id: 1,
                date: new Date(),
                user_name: 'ghost1',
                token: 'ff',
                user_email: 'ghost1@gmail.com'
            },
            {
                id: 2,
                date: new Date(),
                user_name: 'ghost2',
                token: '',
                user_email: 'ghost2@gmail.com'
            },
            {
                id: 3,
                date: new Date(),
                user_name: 'ghost3',
                token: '',
                user_email: 'ghost3@gmail.com'
            },
            {
                id: 4,
                date: new Date(),
                user_name: 'ghost4',
                token: '',
                user_email: 'ghost4@gmail.com'
            },
            {
                id: 5,
                date: new Date(),
                user_name: 'ghost5',
                token: '',
                user_email: 'ghost5@gmail.com'
            }
        ];
    }
    getAllAuth() {
        return this.authList;
    }
    getAuth(id) {
        const auth = this.authList.find(auths => auths.id === id);
        if (!auth) {
            throw new common_1.NotFoundException('Not existed. Please registe first');
        }
        return auth;
    }
    createAuth(auth) {
        this.authList.push(auth);
        return auth;
    }
    updateAuth(auth) {
        this.authList[auth.id] = auth;
        return auth;
    }
    deleteAuth(id) {
        const index = this.authList.findIndex(item => item.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Auth not found.');
        }
        this.authList.splice(index, 1);
    }
    async validateUser(email, password) {
        const auth = this.authList.find(auths => auths.user_email === email);
        if (auth)
            return true;
        else
            return false;
    }
    async loginByToken(user) {
        const payload = { email: user.email };
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map