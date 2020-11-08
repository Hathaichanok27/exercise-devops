const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('GET "/items"', () => {
    it('respond with array of items', (done) => {
        let want = [
            { id: 1, name:'iPhone12 Pro Max'},
            { id: 2, name:'Google Pixel 5'}
        ]
        request(app).get('/items').expect(want, done)
    })
})
