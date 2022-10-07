const request = require("supertest");
const app = require("../app");
const User = require("../src/models/userModel");
const { objectId, user1, deleteAllFunction, updateUser } = require("../tests/helpers")


beforeAll(async () => {
    await deleteAllFunction();
});

describe('POST crate user function', function () {
    it('should respond with a json 200 response setting', async function () {
        await request(app)
            .post("/user").send({
                name: "srinu",
                email: "Srinu1@gmail.com",
                password: "12345678",
                usertype: "user"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });

    // it('should respond with a json 400 email all read exist', function (done) {
    //     request(app)
    //         .post("/user", {
    //             json: true,
    //             body: '{"name":"srinu", "email": "Srinu1@gmail.com","password": "12345678","usertype": "user" }'
    //         })
    //         .expect('Content-Type', /json/)
    //         .expect(400)
    //         .end(done);
    // });
});

describe("Get all users", function () {
    it("get all user in the database", async function () {
        await request(app).get("/user")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('GET login user', function () {
    it("user login success response", async function () {
        await request(app)
            .get("/user/login").send({
                email: user1.email,
                password: user1.password,
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });
    // it("user login fail response", async function () {
    //     await request(app)
    //         .get("/user/login").send({
    //             email: user1.email,
    //             password: "123456789"
    //         }).set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(500);
    // });
})

describe("get user profile", function () {
    it("user persional details", async () => {
        await request(app).get("/user/me")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})



describe('logout single user', () => {
    it("logout user", async () => {
        await request(app).post("/user/logout")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('logout all user', () => {
    it("logout all user", async () => {
        await request(app).post("/user/logoutall")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe('DELETE user', () => {
    it("delete user", async () => {
        await request(app).delete("/user")
            .set('Authorization', `Bearer ${user1.tokens[0].token}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})

describe("UPDATE user profile", function () {
    it("update user persional details", async () => {
        await request(app).put("/user")
            .set('Authorization', `Bearer ${updateUser.tokens[0].token}`)
            .send({
                name: "srinuu5",
                email: "Srinu@gmail.com",
                password: "12345678",
                usertype: "user"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    })
})