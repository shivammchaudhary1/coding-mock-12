const { postModel } = require("../models/job.model");

const postJob = async (req, res) => {
  console.log(req.body);
  try {
    const post = new postModel(req.body);
    await post.save();
    res.status(200).send({ success: true, message: "Job Post Successful" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
};

module.exports = { postJob };

//GET METHOD

// const getJobdata = (req, res) => {};

module.exports = { postJob };
