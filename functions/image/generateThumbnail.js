const functions = require("firebase-functions");
const admin = require("firebase-admin");
const spawn = require("child-process-promise").spawn;
const path = require("path");
const os = require("os");
const fs = require("fs");

module.exports = async object => {
  console.log(object);
  const fileBucket = object.bucket;
  const filePath = object.name;
  const contentType = object.contentType;
  const resourceState = object.resourceState;
  const metageneration = object.metageneration;

  const fileName = path.basename(filePath);
  if (fileName.startsWith("thumb_")) {
    console.log("Already a Thumbnail.");
    return null;
  }
  if (!contentType.startsWith("image/")) {
    console.log("This is not an image.");
    return null;
  }
  if (resourceState === "not_exists") {
    console.log("This is a deletion event.");
    return null;
  }
  if (resourceState === "exists" && metageneration > 1) {
    console.log("This is a metadata change event.");
    return null;
  }

  const bucket = admin.storage().bucket(fileBucket);
  const tempFilePath = path.join(os.tmpdir(), fileName);
  const metadata = {
    contentType: contentType,
  };

  await bucket.file(filePath).download({ destination: tempFilePath });
  console.log("Image downloaded locally to", tempFilePath);

  await spawn("convert", [tempFilePath, "-resize", "400>", tempFilePath]);
  console.log("Thumbnail created at", tempFilePath);

  const thumbFileName = `thumb_${fileName}`;
  const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);

  await bucket.upload(tempFilePath, {
    destination: thumbFilePath,
    metadata: metadata,
  });

  return fs.unlinkSync(tempFilePath);
};
