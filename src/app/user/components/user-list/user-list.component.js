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
exports.UserListComponent = void 0;
const core_1 = require("@angular/core");
const users_service_1 = require("../../services/users.service");
let UserListComponent = class UserListComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.users = [];
    }
    ngOnInit() {
        this.usersService.get().subscribe({
            next: (data) => {
                var _a;
                this.users = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
            },
            error: (error) => {
                this.users = [];
            },
        });
    }
};
UserListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss'],
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
