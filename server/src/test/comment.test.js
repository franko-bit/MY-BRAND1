const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");

describe("comments endpoints", () => {
  describe("Read all comment", () => {
    it.skip("Should read comment", async () => {
      const res = await request(app).get("/comment");
      expect(res).to.have.property("status", 403);
    });
    it(" should create comment", async () => {
      const res = await request(app).post("/comment/:_id");
      console.log(res.body);
      expect(res).to.have.property("status", 200);
    });
  });
});
