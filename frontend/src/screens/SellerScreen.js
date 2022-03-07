import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../actions/jobActions";
import { detailUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Job from "../components/job";

export default function SellerScreen(props) {
  const sellerId = props.match.params.id;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const jobList = useSelector((state) => state.jobList);
  const { loading: loadingJobs, error: errorJobs, jobs } = jobList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailUser(sellerId));
    dispatch(listJobs({ seller: sellerId }));
  }, [dispatch, sellerId]);
  return (
    <div className="row top">
      <div className="col-1">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <ul className="card card-body">
            <li>
              <div className="row start">
                <div className="p-1">
                  <img
                    className="small"
                    src={user.seller.logo}
                    alt={user.seller.name}
                  ></img>
                </div>
                <div className="p-1">
                  <h1>{user.seller.name}</h1>
                </div>
              </div>
            </li>

            <li>
              <a href={`mailto:${user.email}`}>Contact Seller</a>
            </li>
            <li>{user.seller.description}</li>
          </ul>
        )}
      </div>

      <div className="col-3">
        {loadingJobs ? (
          <LoadingBox></LoadingBox>
        ) : errorJobs ? (
          <MessageBox variant="danger">{errorJobs}</MessageBox>
        ) : (
          <>
            {jobs.length === 0 && <MessageBox></MessageBox>}
            <div className="row center">
              {jobs.map((job) => (
                <Job key={job._id} job={job}></Job>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
