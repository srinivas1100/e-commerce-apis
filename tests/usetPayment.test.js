const request = require("supertest");
const app = require("../app");
const Cart = require("../src/models/user/cartModel");
const { objectId, user1, deleteAllFunction } = require("../tests/helpers")

beforeAll(async () => {
    await deleteAllFunction();
});

describe('POST create payment details', () => {

    it('create payment success response', async () => {
        await request(app).post("/user-payment").send({
            total_amount: "100",
            payment_status: ""
        })
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('user dont have a cart', async () => {
        await request(app).post("/user-payment").send({
            total_amount: "100",
            payment_status: ""
        })
            .set('Authorization', `Bearer ${user1.tokens[1].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404);
    })
})