"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const grid_list_1 = require("@angular/material/grid-list");
const list_1 = require("@angular/material/list");
const divider_1 = require("@angular/material/divider");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const user_routing_module_1 = require("./user-routing.module");
const user_list_component_1 = require("./components/user-list/user-list.component");
const user_detail_component_1 = require("./components/user-detail/user-detail.component");
const user_list_item_component_1 = require("./components/user-list-item/user-list-item.component");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [user_list_component_1.UserListComponent, user_detail_component_1.UserDetailComponent, user_list_item_component_1.UserListItemComponent],
        imports: [
            common_1.CommonModule,
            user_routing_module_1.UserRoutingModule,
            grid_list_1.MatGridListModule,
            list_1.MatListModule,
            divider_1.MatDividerModule,
            button_1.MatButtonModule,
            icon_1.MatIconModule,
        ],
    })
], UserModule);
exports.UserModule = UserModule;
