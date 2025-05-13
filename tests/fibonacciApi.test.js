// JavaScript source code
const request = require('supertest');
const app = require('../app');
describe('GET /fib', () => {
      test('���������́in=10�j�Ő��������X�|���X��Ԃ�', async () => {
        const res = await request(app).get('/fib?n=10');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ n: 10, return_value: 55 });
      });
      test('���������́in=-1�j�Ő��������X�|���X��Ԃ�', async () => {
        const res = await request(app).get('/fib?n=-1');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBeDefined();
      });
      test('������̓��́in=abc�j��400�G���[��Ԃ�', async () => {
        const res = await request(app).get('/fib?n=abc');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBeDefined();
      });
});