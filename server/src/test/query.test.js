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
        .get("/queries") //get
        .set("Authorization", `Bearer ${fakeToken}`);

      expect(res).to.have.property("status", 200);
    });

    it(" should create query", async () => {
      const res = await request(app)
        .post("/create_queries")
        .send({
          fname: "Red Boss",
          Email: " red67@gmail.com",
          phone: "078567483",
          subject: "BOSS is coming",
          message: "at processTicksAndRejections",
        })
        .set("Authorization", `Bearer ${fakeToken}`);

      expect(res).to.have.property("status", 200);
    });
  });
});
