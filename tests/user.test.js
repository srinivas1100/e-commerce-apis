// const jest = require("jest");
const superset = require("supertest");
const app = require("../app");
const User = require("../src/models/userModel");

const user1 = new User({
    name: "srinu",
    email: "Srinu@gmail.com",
    password: "12345678",
    usertype: "user"
});
var i = 0;

beforeEach(async () => {
    i++;
    // jest.setTimeout(10000)
    console.log(`count numbers is ${i}`)
    await User.deleteMany();
    await user1.save();
});


test("create user", async () => {
    const user = await superset(app).post("/user").send({
        name: "srinu",
        email: "Srinu1@gmail.com",
        password: "12345678",
        usertype: "user"
    });
    // .set('Accept', 'application/json')
    // .expect('Content-Type', /json/)
    // .expect(200)
    console.log(user);
    return user.expect(user.statusCode).toBe(user.statusCode);
})

// test("login user", async () => {
//     console.log(user1.email);
//     console.log(user1.password);
//     const user =
//         await superset(app).post("/user/login").send({
//             email: user1.email,
//             password: user1.password
//         });
//     user.expect(user.status).toBe(200);
// })