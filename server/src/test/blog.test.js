const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
describe("blog endpoints", () => {
  const fakeToken = jwt.sign({}, "secretkey");
  describe("Read all blog", () => {
    it("should be require token", async () => {
      const res = await request(app).get("/blogs");

      expect(res).to.have.property("status", 403);
      expect(res.body).to.equal({});
    });
    it("it should return blogs", async () => {
      const res = await request(app)
        .post("/blog")
        .set("Authorization", `Bearer ${fakeToken}`);
      console.log(res.body);
      expect(res).to.have.property("status", 200);
    });
  });
});
