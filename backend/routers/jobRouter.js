import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Job from "../models/jobModel.js";
import { isAdmin, isAuth, isSellerOrAdmin } from "../utils.js";

const jobRouter = express.Router();

jobRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const category = req.query.category || "";
    const seller = req.query.seller || "";

    const order = req.query.order || "";
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const sellerFilter = seller ? { seller } : {};
    const categoryFilter = category ? { category } : {};
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
    const sortOrder =
      order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : { _id: -1 };

    const jobs = await Job.find({
      ...sellerFilter,
      ...nameFilter,
      ...categoryFilter,
      ...priceFilter,
    })
      .populate("seller", "seller.name seller.logo")
      .sort(sortOrder);
    res.send(jobs);
  })
);

jobRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Job.find().distinct("category");
    res.send(categories);
  })
);

jobRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Job.remove({});
    const createdJobs = await Job.insertMany(data.jobs);
    res.send({ createdJobs });
  })
);

jobRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id).populate(
      "seller",
      "seller.name seller.logo seller.numReviews"
    );
    if (job) {
      res.send(job);
    } else {
      res.status(404).send({ message: "Job Not Found" });
    }
  })
);

jobRouter.post(
  "/",
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const job = new Job({
      name: "Sample name" + Date.now(),
      seller: req.user._id,
      color: "black",
      price: 5,
      image: "/images/image-coming-soon.jpg",
      category: "Sample Category",
      brand: "Sample Brand",
      description: 0,
    });
    const createdJob = await job.save();
    res.send({ message: "Job Created", job: createdJob });
  })
);

jobRouter.put(
  "/:id",
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (job) {
      job.name = req.body.name;
      job.price = req.body.price;
      job.image = req.body.image;
      job.category = req.body.category;
      job.brand = req.body.brand;
      job.description = req.body.description;

      const updatedJob = await job.save();
      res.send({ message: "Job Updated", job: updatedJob });
    } else {
      res.status(404).send({ message: "Job Not Found" });
    }
  })
);

jobRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (job) {
      const deleteJob = await job.remove();
      res.send({ message: "Job Deleted", job: deleteJob });
    } else {
      res.status(404).send({ message: "Job Not Found" });
    }
  })
);

export default jobRouter;
