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
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/common/http/testing");
const user_detail_component_1 = require("./user-detail.component");
const user_service_1 = require("../../services/user.service");
const user_module_1 = require("../../user.module");
const testing_3 = require("@angular/router/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const mockUser = {
    id: 0,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    gender: 'male',
    birthday: '15/12/1988',
};
class MockUserService {
    get(id) {
        return new Promise((resolve) => {
            resolve(mockUser);
        });
    }
}
describe('UserDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [user_detail_component_1.UserDetailComponent],
            imports: [testing_2.HttpClientTestingModule, user_module_1.UserModule, testing_3.RouterTestingModule],
            providers: [
                { provide: router_1.ActivatedRoute, useValue: { params: (0, rxjs_1.of)({ id: 1 }) } },
                { provide: user_service_1.UserService, useValue: new MockUserService() },
            ],
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(user_detail_component_1.UserDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should get user info', () => {
        var _a;
        fixture.detectChanges();
        expect(Object.keys((_a = component.userInfo) !== null && _a !== void 0 ? _a : {}).length).toBeGreaterThan(3);
    });
    it(`should render firstName ${mockUser.firstName}`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.firstName').textContent).toBe(mockUser.firstName);
    });
    it(`should render lastName ${mockUser.lastName}`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.lastName').textContent).toBe(mockUser.lastName);
    });
    it(`should render gender ${mockUser.gender}`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.gender').textContent).toBe(mockUser.gender);
    });
    it(`should render gender ${mockUser.birthday}`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.birthday').textContent).toBe(mockUser.birthday);
    });
    it(`should render gender ${mockUser.email}`, () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.email').textContent).toBe(mockUser.email);
    });
});
