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
exports.UserDetailComponent = void 0;
const core_1 = require("@angular/core");
const user_service_1 = require("../../services/user.service");
const router_1 = require("@angular/router");
let UserDetailComponent = class UserDetailComponent {
    constructor(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.userService.get(params['id']).then((user) => {
                this.userInfo = user;
            });
        });
    }
    onBack() {
        this.router.navigate(['/user']);
    }
};
UserDetailComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-user-detail',
        templateUrl: './user-detail.component.html',
        styleUrls: ['./user-detail.component.scss'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
