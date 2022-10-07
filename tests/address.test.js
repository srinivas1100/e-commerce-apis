const request = require("supertest");
const app = require("../app");
const User = require("../src/models/userModel");
const { objectId, user1, deleteAllFunction, updateUser, userAddressId } = require("../tests/helpers");

console.log(userAddressId);

beforeAll(async () => {
    await deleteAllFunction();
});

describe('Post user address', () => {
    it("Post single user address", async () => {
        await request(app).post("/user-address")
            .send({
                address_line1: "12-132, main road",
                address_line2: "pd padu",
                city: "ongole",
                state: "andrapadesh",
                country: "india",
                postal_code: 523180
            })
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Get user all address', () => {
    it("get user all address", async () => {
        await request(app).get("/user-address")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Get user single addres', () => {
    it("get user single addres", async () => {
        await request(app).get(`/user-address/${userAddressId}`)
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Update user address', () => {
    it("update single user address", async () => {
        await request(app).put(`/user-address/${userAddressId}`)
            .send({
                address_line1: "12-132, main road",
                address_line2: "pd padu",
                city: "ongole",
                state: "andrapadesh",
                country: "india",
                postal_code: 523180
            })
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Delete user single address', () => {
    it("delete single user address", async () => {
        await request(app).delete(`/user-address/${userAddressId}`)
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('Delete all user address', () => {
    it("delete all user address", async () => {
        await request(app).delete("/user-address/delete-all")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

