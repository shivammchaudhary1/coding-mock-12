const express = require(`express`);
// const { postModel } = require("../models/job.model");
const postRouter = express.Router();
const { postJob } = require(`../controller/job.controller`);

postRouter.post("/post", postJob);

module.exports = { postRouter };
