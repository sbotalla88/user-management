"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const user_list_component_1 = require("./user-list.component");
const users_service_1 = require("../../services/users.service");
const user_module_1 = require("../../user.module");
const rxjs_1 = require("rxjs");
const user_routing_module_1 = require("../../user-routing.module");
const testing_3 = require("@angular/router/testing");
class MockUsersService {
    get() {
        return (0, rxjs_1.of)({
            data: [
                {
                    id: 0,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john@email.com',
                    gender: 'male',
                    birthday: '15/12/1988',
                },
                {
                    id: 1,
                    firstName: 'Hannah',
                    lastName: 'Miller',
                    email: 'hannah@email.com',
                    gender: 'fmail',
                    birthday: '05/01/1993',
                },
                {
                    id: 3,
                    firstName: 'Hannah',
                    lastName: 'Miller',
                    email: 'hannah@email.com',
                    gender: 'fmail',
                    birthday: '05/01/1993',
                },
            ],
        });
    }
}
describe('UserListComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_list_component_1.UserListComponent],
            imports: [testing_2.HttpClientTestingModule, user_module_1.UserModule, user_routing_module_1.UserRoutingModule, testing_3.RouterTestingModule],
            providers: [{ provide: users_service_1.UsersService, useValue: new MockUsersService() }],
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(user_list_component_1.UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should have 3 user info', () => {
        expect(component.users.length).toBe(3);
    });
    it('should render 3 users', () => {
        expect(fixture.nativeElement.querySelectorAll('app-user-list-item').length).toBe(3);
    });
});
