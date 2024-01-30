const request = require('supertest');
const app = require('../index'); // Assuming your Express app is exported from index.js

describe('Search Endpoint', () => {
    it('should search products by name, description, or variant name', async () => {
        const res = await request(app).get('/search?q=Test');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(1); // Assuming only one test product is created
    });

    it('should handle no search results', async () => {
        const res = await request(app).get('/search?q=NonExistent');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(0);
    });
});
