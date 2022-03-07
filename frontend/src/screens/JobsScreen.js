import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsJob } from "../actions/jobActions";
import swal from "sweetalert";

export default function JobsScreen(props) {
  const dispatch = useDispatch();
  const jobId = props.match.params.id;
  const jobDetails = useSelector((state) => state.jobDetails);
  const { loading, error, job } = jobDetails;

  useEffect(() => {
    dispatch(detailsJob(jobId));
  }, [dispatch, jobId]);
  const addToCartHandler = () => {
    swal("Job Added To Cart", "Redirecting you to your cart", "success", {
      buttons: false,
      timer: 2000,
    });
    props.history.push(`/api/job/${jobId}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back To Result</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={job.image} alt={job.name}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{job.name}</h1>
                </li>
                <li></li>
                <li>Price: {"$" + job.price}</li>
                <li>Description:</li>
                <p className="description">{job.description}</p>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    Seller{" "}
                    <h2>
                      <Link to={`/seller/${job.seller._id}`}>
                        {job.seller.seller.name}
                      </Link>
                    </h2>
                  </li>
                  <li>
                    <div className="row"></div>
                    <div>Price</div>
                    <div className="price">{"$" + job.price}</div>
                  </li>
                  <li></li>

                  <>
                    <li>
                      <button
                        onClick={(e) => {
                          addToCartHandler(e);
                        }}
                        className="primary block"
                      >
                        Add To Cart
                      </button>
                    </li>
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
