const request = require("../test-config");
beforeAll(() => request.initDB());

beforeAll(() => request.initDB());
describe("Testing tutorial routes", () => {
  it("first GET request to /tutorials", async () => {
    const res = await request.request.get("/tutorials");
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(0);
  });

  //   it("first POST request to /tutorials", async () => {
  //     const body = {
  //       title: "new Tutorial",
  //       slug: "new title",
  //       desc: "This is a new tutorial",
  //       author: "Dev Giri",
  //       tags: ["introduction", "web-development"],
  //     };
  //     const res = await (await request.request.get("/tags")).send(body);
  //     expect(res.statusCode).toBe(401);
  //     expect(res.body.message).toBe("Invalid tags");
  //   });

  it("first GET request to /tags", async () => {
    const res = await request.request.get("/tags");
    expect(res.statusCode).toBe(201);
    expect(res.body.length).toBe(0);
  });
  //   it("first POST request to /tags", async () => {
  //     const body = {
  //       title: "Introduction",
  //       slug: "intro",
  //     };
  //     const res = await (await request.request.get("/tags")).send(body);
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body).toHaveProperty("_id");
  //   });

  //   it("second POST request to /tags", async () => {
  //     const body = {
  //       title: "Web Development",
  //       slug: "web-dev",
  //     };
  //     const res = await (await request.request.get("/tags")).send(body);
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body.message).toHaveProperty("_id");
  //   });

  //   it("second GET request to /tags", async () => {
  //     const res = await request.request.get("/tags");
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body.length).toBe(2);
  //   });

  //   it("second POST request to /tutorials", async () => {
  //     const body = {
  //       title: "new Tutorial",
  //       slug: "new title",
  //       desc: "This is a new tutorial",
  //       author: "Dev Giri",
  //       tags: ["introduction", "web-development"],
  //     };
  //     const res = await (await request.request.get("/tags")).send(body);
  //     expect(res.statusCode).toBe(201);
  //     expect(res.body).toHaveProperty("_id");
  //     expect(res.body).toHaveProperty("tags");
  //     let tags = res.body["tags"];
  //     expect(tags.length).toBe(2);
  //   });

  //   it("second GET request to /tutorials", async () => {
  //     const res = await request.request.get("/tutorials");
  //     expect(res.statusCode).toBe(200);
  //     expect(res.body.length).toBe(1);
  //   });
});
afterAll(() => request.closeDBConnection());
