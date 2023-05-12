"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_list_item_component_1 = require("./user-list-item.component");
const testing_2 = require("@angular/router/testing");
describe('UserListItemComponent', () => {
    let component;
    let fixture;
    const mockUser = {
        id: 0,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@email.com',
        gender: 'male',
        birthday: '15/12/1988',
    };
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_list_item_component_1.UserListItemComponent],
            imports: [testing_2.RouterTestingModule],
        });
        fixture = testing_1.TestBed.createComponent(user_list_item_component_1.UserListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it(`FirstName should  be ${mockUser.firstName}`, () => {
        component.user = mockUser;
        fixture.detectChanges();
        const firstNameEl = fixture.nativeElement.querySelector('.firstName');
        expect(firstNameEl.textContent).toBe(mockUser.firstName);
    });
    it(`LastName should  be ${mockUser.lastName}`, () => {
        component.user = mockUser;
        fixture.detectChanges();
        const lastNameEl = fixture.nativeElement.querySelector('.lastName');
        expect(lastNameEl.textContent).toBe(mockUser.lastName);
    });
    it(`Email should  be ${mockUser.email}`, () => {
        component.user = mockUser;
        fixture.detectChanges();
        const emailEl = fixture.nativeElement.querySelector('.email');
        expect(emailEl.textContent).toBe(mockUser.email);
    });
});
