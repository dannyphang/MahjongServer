import { Router } from "express";
const router = Router();
import { readFileSync } from "fs";
const mahjongSet = JSON.parse(readFileSync("./Mahjong.json"));

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
      message: "You passed an ID",
    });
  }
});

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

export default router;
