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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../../server"));
/* -------------------------------------------------------------------------- */
/*                             User service test                              */
/* -------------------------------------------------------------------------- */
describe('UserController', () => {
    describe('Get users => GET: /api/users/all', () => {
        it('Should return all users if exists', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, supertest_1.default)(server_1.default).get('/api/users/all');
            expect(JSON.parse(data.text).data.length).toBe(2);
        }));
    });
    describe('Get user by id => GET: /api/users/0', () => {
        it('Should return user if exists by id', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, supertest_1.default)(server_1.default).get('/api/users/0');
            expect(JSON.parse(data.text).data).toEqual({
                "id": 0,
                "firstName": "John",
                "lastName": "Doe",
                "email": "john@email.com",
                "gender": "male",
                "birthday": "15/12/1988"
            });
        }));
        it('Should return error if no exists by id', () => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield (0, supertest_1.default)(server_1.default).get('/api/users/2');
            expect(JSON.parse(data.text).error).toBe('No user found');
        }));
    });
});
