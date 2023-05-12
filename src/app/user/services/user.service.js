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
exports.UserService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const environment_1 = require("../../../environments/environment");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.userInfoKey = '@USER';
        this.activeUserId = undefined;
        this.userInfo = {};
        const storedInfo = localStorage.getItem(this.userInfoKey);
        if (storedInfo) {
            this.userInfo = JSON.parse(storedInfo);
        }
    }
    get(id) {
        return new Promise((resolve) => {
            var _a, _b;
            if ((_a = this === null || this === void 0 ? void 0 : this.userInfo) === null || _a === void 0 ? void 0 : _a[id]) {
                return resolve((_b = this === null || this === void 0 ? void 0 : this.userInfo) === null || _b === void 0 ? void 0 : _b[id]);
            }
            this.http.get(`${environment_1.environment.apiUrl}/api/users/${id}`).subscribe({
                next: (data) => {
                    resolve(this.onUserInfo(data));
                },
            });
        });
    }
    onUserInfo(data) {
        var _a;
        const user = data.data;
        this.userInfo = Object.assign(Object.assign({}, ((_a = this.userInfo) !== null && _a !== void 0 ? _a : [])), { [user.id]: user });
        localStorage.setItem(this.userInfoKey, JSON.stringify(this.userInfo));
        return user;
    }
};
UserService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], UserService);
exports.UserService = UserService;
