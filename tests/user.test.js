const request = require("supertest");
const app = require("../app");
const User = require("../src/models/userModel");
const { objectId, user1, deleteAllFunction } = require("../tests/helpers")


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
    it("user login fail response", async function () {
        await request(app)
            .get("/user/login").send({
                email: user1.email,
                password: "123456789"
            }).set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500);
    });
})

// test('login user', async () => {
//     await request(app).get("/user/login").send({
//         email: user1.email,
//         password: user1.password,
//     })
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200);
// })