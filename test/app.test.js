const app = require('../src/app');
const supertest = require('supertest');

describe('Test the root path', () => {
    // test('It should response GET method', async (done) => {
    //     const response = await supertest(app).get('/');
    //     expect(response.statusCode).toBe(200);
    //     done();
    // });
    test('It should response GET method', () => {
        return supertest(app).get('/').expect(200);
    });
})
