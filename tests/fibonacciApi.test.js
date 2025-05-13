// JavaScript source code
const request = require('supertest');
const app = require('../app');
describe('GET /fib', () => {
      test('正しい入力（n=10）で正しいレスポンスを返す', async () => {
        const res = await request(app).get('/fib?n=10');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ n: 10, return_value: 55 });
      });
      test('正しい入力（n=-1）で正しいレスポンスを返す', async () => {
        const res = await request(app).get('/fib?n=-1');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBeDefined();
      });
      test('文字列の入力（n=abc）で400エラーを返す', async () => {
        const res = await request(app).get('/fib?n=abc');
        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBeDefined();
      });
});