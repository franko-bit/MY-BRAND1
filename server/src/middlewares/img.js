const cloudinary = require("../confi/ImgComfiguration.js");

exports.uploadImg = async (req, res, next) => {
  try {
    // if (!req.files) return res.status(400).json("photo fail");
    const { tempFilePath } = req.files.photo;
    const { url, public_id: pid } = await cloudinary.upload(
      tempFilePath,
      (_, result) => result
    );
    req.image = url;
    req.imageid = pid;
    return next();
  } catch (error) {}
};
