const request = require("supertest");
const { app, server } = require("../app");

describe("User routes", () => {

  afterAll(done => {
    server.close(done)
  })

  test("list /users", async () => {
    const response = await request(server).get("/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("list /users/id", async () => {
    const expectedUser = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      wallets: ["wallet1", "wallet2"],
      created_at: "2024-03-06T08:00:00Z",
      updated_at: "2024-03-06T08:00:00Z",
      deleted_at: null,
      active: true,
    };
    const response = await request(server).get("/users/1");

    expect(response.statusCode).toBe(200);
    expect(response.body[0]).toEqual(expectedUser);
  });
});
