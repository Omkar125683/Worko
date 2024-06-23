const request = require('supertest');
const app = require('../index'); 

describe('User API', () => {
  it('should create a user', async () => {
    const res = await request(app)
      .post('/worko/user')
      .send({
        email: 'test@example.com',
        name: 'Test User',
        age: 30,
        city: 'Test City',
        zipCode: '12345'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email');
  });

 
});
