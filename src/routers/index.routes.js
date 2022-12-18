import bodyParser from "body-parser";
import { Router } from "express";
import Trailers from "../models/Trailers";

const router = Router();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/trailers", urlencodedParser, jsonParser, async (req, res) => {
  const all = await Trailers.find().lean();
  res.render("trailers", { trailers: all });
});

router.post("/trailers/add", urlencodedParser, jsonParser, async (req, res) => {
  try {
    const new_trailer = Trailers(req.body);

    await new_trailer.save();

    res.redirect("/trailers");
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  const trailer = await Trailers.findById(req.params.id).lean();
  res.render("edit", { trailer });
});

router.post("/edit/:id", urlencodedParser, jsonParser, async (req, res) => {
  await Trailers.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/trailers");
});

router.get("/delete/:id", async (req, res) => {
  await Trailers.findByIdAndDelete(req.params.id);
  res.redirect("/trailers");
});

export default router;
