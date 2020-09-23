const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
describe("queries endpoints", () => {
  const fakeToken = jwt.sign({}, "secretkey");
  describe("Read all queries", () => {
    it("should be require token", async () => {
      const res = await request(app).get("/queries");

      expect(res).to.have.property("status", 403);
      //   expect(res.body).to.equal({});
    });
    it("it should return queries", async () => {
      const res = await request(app)
        .post("/create_queries")
        .set("Authorization", `Bearer ${fakeToken}`);
      console.log(res.body);
      expect(res).to.have.property("status", 200);
    });
  });
});
