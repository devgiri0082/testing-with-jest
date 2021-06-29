describe("Sample tests", () => {
  it("Does Jest work?", () => {
    expect(true).toBe(true);
  });
});

// let request = require("./test-config");

// beforeAll(() => request.initDB());
// describe("Network call test", () => {
//   it("Does response code", async () => {
//     let res = await request.request.get("/");
//     expect(res.statusCode).toBe(201);
//   });
//   it("testing response data", async () => {
//     let res = await request.request.get("/");
//     expect(res.body).toHaveProperty("message");
//     expect(res.body.message).toBe("Hello world");
//   });
// });
