import {User} from '../../../service/user.service'

/* -------------------------------------------------------------------------- */
/*                             User service test                              */
/* -------------------------------------------------------------------------- */
describe('UserService', ()=>{
    describe('Get users', ()=>{
        const UserService = new User();
        it('Should return all users if exists', ()=>{
            const result = UserService.getUsers();
            expect(result.length).toBe(2);
        });
    });
    describe('Get user by id', ()=>{
        const UserService = new User();
        it('Should return user by id if exists', ()=>{
            const result = UserService.getUserById(0);
            expect(result).toEqual({
                "id": 0,
                "firstName": "John",
                "lastName": "Doe",
                "email": "john@email.com",
                "gender": "male",
                "birthday": "15/12/1988"
            });
        });
        it('Should return undefined if no exists', ()=>{
            const result = UserService.getUserById(2);
            expect(result).toBe(undefined);
        });
    });

})