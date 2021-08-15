'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('simple express server', () => {
    it('should check the hello world works SUCCESS', async () => {
        //arrange
        let param = '/';
        let status = 200;
        let text = 'Hello World! 😁';

        //act
        // const response = await request.get('/');
        const response = await request.get(param);

        //assert
        // expect(response.status).toBe(200);
        expect(response.status).toBe(status);
        // expect(response.text).toBe('Hello World! 😁')
        expect(response.text).toBe(text)
    });

    it('should check the data works SUCCESS', async () => {
        //arrange
        let param = '/data';
        let status = 200;

        //act
        // const response = await request.get('/data');
        const response = await request.get(param);

        //assert
        // expect(response.status).toBe(200);
        expect(response.status).toBe(status);
        // expect(typeof response.body).toEqual('object');
        expect(typeof response.body).toEqual('object');
    });

    it('should check the 500 err', async () => {
        //arrange
        let param = '/bad';
        let status = 500;

        //act
        // const response = await request.get('/bad');
        const response = await request.get(param);

        //assert
        // expect(response.status).toBe(500);
        expect(response.status).toBe(status);
        // expect(response.status.route).toBe('/bad');
        expect(response.body.route).toBe(param);
    });

    it('should check the 404 NOT FOUND err', async () => {
        //arrange
        let param = '/notfound';
        let status = 404;

        //act
        // const response = await request.get('/notfound');
        const response = await request.get(param);

        //assert
        // expect(response.status).toBe(404);
        expect(response.status).toBe(status);

    });
});