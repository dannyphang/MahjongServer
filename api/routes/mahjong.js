import { Router } from "express";
const router = Router();
import { readFileSync } from "fs";
const mahjong_data = readFileSync("./Mahjong.json");
const mahjongSet = JSON.parse(mahjong_data);
// import firebase from "../../firebase_file.js";

router.get("/", (req, res, next) => {
  res.status(200).json(mahjongSet);
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requests to /mahjong",
  });
});

router.get("/:mahjongId", (req, res, next) => {
  const id = req.params.mahjongId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      mahjong: JSON.parse(JSON.stringify(getMahjongById(parseInt(id)))),
    });
  }
});

function getMahjongById(id) {
  let result = [];
  for (var i in mahjongSet.tile) result.push(mahjongSet.tile[i]);
  //console.log(JSON.parse(result.find((mahjong) => mahjong.id === id)));
  return result.find((mahjong) => mahjong.id === id)
    ? result.find((mahjong) => mahjong.id === id)
    : [];
}

router.patch("/:mahjongId", (req, res, next) => {
  res.status(200).json({
    message: "Updated mahjong!",
  });
});

router.delete("/:mahjongId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted mahjong!",
  });
});

// router.get("/img/:mahjongCode", async (req, res, next) => {
//   const code = req.params.mahjongCode;

//   // let img = await firebase
//   //   .storage()
//   //   .bucket()
//   //   .file(code + ".png")
//   //   .get();
//   // console.log(img);
//   // res.status(200).sendFile(img);
//   firebase.firebaseFunction.getDownloadURL(code);
// });

export default router;
