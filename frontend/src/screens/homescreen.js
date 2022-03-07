import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Job from "../components/job";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../actions/jobActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;
  
  useEffect(() => {
    dispatch(listJobs({}));
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {jobs.length === 0 && <MessageBox>No Job Found</MessageBox>}
          <div className="row center">
            {jobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
