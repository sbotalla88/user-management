import request from 'supertest';
import server from '../../../server';

/* -------------------------------------------------------------------------- */
/*                             User service test                              */
/* -------------------------------------------------------------------------- */
describe('UserController', ()=>{
    describe('Get users => GET: /api/users/all', ()=>{
        it('Should return all users if exists', async ()=>{
            const data = await request(server).get('/api/users/all');
            expect(JSON.parse(data.text).data.length).toBe(2);
        });
    });
    describe('Get user by id => GET: /api/users/0', ()=>{
        it('Should return user if exists by id', async ()=>{
            const data = await request(server).get('/api/users/0');
            expect(JSON.parse(data.text).data).toEqual({
                "id": 0,
                "firstName": "John",
                "lastName": "Doe",
                "email": "john@email.com",
                "gender": "male",
                "birthday": "15/12/1988"
            });
        });
        it('Should return error if no exists by id', async ()=>{
            const data = await request(server).get('/api/users/2');
            expect(JSON.parse(data.text).error).toBe('No user found');
        });
    });
})