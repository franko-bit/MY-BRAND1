const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
describe("Authontication endpoints", () => {
  it(" should apply login", async () => {
    const res = await request(app).post("/auth/log").send({
      email: "ngabofrank375@gmail.com",
      password: "Redone",
    });
    expect(res).to.have.property("status", 200);
  });
});
