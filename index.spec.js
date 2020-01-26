const supertest = require("supertest");
const server = require("./index");
//integration testing, more important as well and automated
test("welcome route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome")
}) 