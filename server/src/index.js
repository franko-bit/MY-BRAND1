const exp = require("express");
const mongoosee = require("mongoose");
const upload = require("express-fileupload");
const app = exp();
const routQuery = require("./Router/queries.js");
const routBlog = require("./Router/RouterBlog.js");
const routAuth = require("./Router/RouterAuth.js");
const routcomment = require("./Router/routercomment.js");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require("dotenv").config();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "franko-bit",
      description: "You can create,Read,update and delete blogs ",
      contact: {
        name: "Musirikare Mwiza Frank",
      },
    },

    basePath: "",
    tags: [{ name: "Article", description: "API for Article in the system" }],
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/auth/log": {
        post: {
          tags: ["User/login"],
          summary: "login with email & password in system",
          consumes: ["application/json"],
          produces: ["application/json"],
          parameters: [
            {
              in: "body",
              name: "body",
              description: "query that we want to create",
              required: true,

              schema: {
                $ref: "#/definitions/login",
              },
            },
          ],
          responses: {
            200: {
              description: "login successfull",
              schema: { $ref: "#/definitions/loginResponse" },
            },
            400: {
              description: "Bad request",
            },
          },
        },
      },

      "/blogs": {
        get: {
          tags: ["Blog"],
          summary: "Get all Article in system",
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/blogs" },
            },
          },
        },
      },
      "/blog": {
        post: {
          tags: ["Blog"],
          summary: "post new Article in system",
          parameters: [
            {
              in: "formData",
              name: "title",
              type: "string",
              required: true,
            },
            {
              in: "formData",
              name: "article",
              type: "string",
              required: true,
            },
            {
              in: "formData",
              name: "photo",
              type: "file",
              required: true,
            },
            {
              in: "header",
              name: "authorization",
              description: "token needed",
              required: true,
              type: "string",
            },
          ],
          consumes: ["multipart/form-data"],
          produces: ["application/json"],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/id" },
            },
            400: {
              description: "Bad request",
            },
          },
        },
      },
      "/blog/{id}": {
        get: {
          tags: ["Blog"],
          summary: "get one Article in system",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              description: "Blog that we want to create",
              type: "string",
            },
          ],
          produces: ["application/json"],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/id" },
            },
            400: {
              description: "Bad request",
            },
          },
        },
      },
      "/update_blog/{id}": {
        patch: {
          tags: ["Blog"],
          summary: "update Article in system",
          parameters: [
            {
              in: "body",
              name: "body",

              required: true,
              description: "Blog that we want to update",
              schema: {
                $ref: "#/definitions/blogs",
              },
            },
            {
              in: "header",
              name: "authorization",
              description: "token needed",
              required: true,
              type: "string",
            },
            {
              name: "id",
            },
          ],
          produces: ["application/json"],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/blogs" },
            },

            400: {
              description: "Bad post article",
            },
            404: {
              description: "article not found",
            },
          },
        },
      },
      "/delete_blog/{id}": {
        delete: {
          tags: ["Blog"],
          summary: "delete Article in system",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              description: "Blog that we want to delete",
              type: "string",
            },
            {
              in: "header",
              name: "authorization",
              description: "token needed",
              required: true,
              type: "string",
            },
          ],
          produces: ["application/json"],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/id" },
            },
            404: {
              description: "article not found",
            },
          },
        },
      },

      "/create_queries": {
        post: {
          tags: ["query"],
          summary: "post new query in system",
          parameters: [
            {
              in: "body",
              name: "body",
              description: "query that we want to create",
              schema: {
                $ref: "#/definitions/query",
              },
            },
          ],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/query" },
            },
          },
        },
      },
      "/queries": {
        get: {
          tags: ["query"],
          summary: "read query in system",
          consumes: ["application/json"],
          produces: ["application/json"],
          parameters: [
            {
              in: "header",
              name: "authorization",
              description: "query that we want to create",
              required: true,
              type: "string",
            },
          ],
          responses: {
            200: {
              description: "ok",
              schema: { $ref: "#/definitions/id" },
            },
            400: {
              description: "Bad request",
            },
          },
        },
      },
    },
    definitions: {
      id: {
        properties: {
          id: {
            type: "string",
          },
        },
      },
      blogs: {
        type: "object",
        properties: {
          photo: {
            type: "string",
          },
          title: {
            type: "string",
          },
          article: {
            type: "string",
          },
        },
      },

      login: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },

      loginResponse: {
        type: "object",
        required: ["token", "status"],
        properties: {
          status: {
            type: "string",
          },
          message: {
            type: "string",
          },
          token: {
            type: "string",
          },
        },
      },
      query: {
        type: "object",
        properties: {
          fname: {
            type: "string",
          },
          Email: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          subject: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
      },

      // cats: {
      //   type: "object",
      //   properties: {
      //     blogs: {
      //       type: "object",
      //       additionalProperties: {
      //         $ref: "#/definitions/cat",
      //       },
      //     },
      //   },
      // },
    },
  },
  apis: ["index.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /customers:
 *  get:
 *
 *    description:use request all users
 *    responses:
 *      '200':
 *        description:A successful response
 */

mongoosee.connect(
  process.env.NODE_ENV == "test"
    ? "mongodb://localhost:27017/testing"
    : process.env.MONGO_URI_TEST,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      res.status(200).json(error);
    }
    const PORT = process.env.PORT;
    app.use(exp.json());
    app.use(
      exp.urlencoded({
        extended: false,
      })
    );
    app.use(upload({ useTempFiles: true }));
    app.use(routQuery);
    app.use(routBlog);
    app.use(routcomment);
    app.use(routAuth);
    app.listen(PORT, () => {
      console.log("Server running on port ", PORT);
    });
  }
);
module.exports = app;
