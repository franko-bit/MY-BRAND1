const { v2 } = require("cloudinary");
v2.config({
  cloud_name: "dwg9dguj0",
  api_key: "237729168179759",
  api_secret: "ygrUfUIEr8GHhs_rphtUkxsmZpg",
});
module.exports = v2.uploader;
