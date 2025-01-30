const request = require("supertest");
const app = require("../src/app");

describe("Category API", () => {
  it("should return all categories", async () => {
    const res = await request(app).get("/categories");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should create a new category", async () => {
    const res = await request(app)
      .post("/categories")
      .send({ name: "Electronics" });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Electronics");
  });
});
