const { describe, it, beforeEach, afterEach } = require("mocha");
const { expect } = require("chai");
const request = require("supertest");
const app = require("../index.js");
const path = require("path");
it.skip(" should create blog", async () => {
  const res = await request(app)
    .post("/blog")

    .attach("photo", path.join(__dirname, "./asset/pic.jpeg"));
  console.log(res.body);
  expect(res).to.have.property("status", 201);
});
