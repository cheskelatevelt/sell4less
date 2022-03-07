import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { createJob, deleteJob, listJobs } from "../actions/jobActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { JOB_CREATE_RESET, JOB_DELETE_RESET } from "../constants/jobConstants";

export default function JobListScreen(props) {
  const sellerMode = props.match.path.indexOf("/seller") >= 0;
  const jobList = useSelector((state) => state.jobList);
  const { loading, error, jobs } = jobList;
  const jobCreate = useSelector((state) => state.jobCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    job: createdJob,
  } = jobCreate;

  const jobDelete = useSelector((state) => state.jobDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = jobDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const deleteHandler = (job) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this job!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteJob(job._id));
        swal(`Job ${job.name} has been deleted`, {
          icon: "success",
        });
      }
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: JOB_CREATE_RESET });
      props.history.push(`/job/${createdJob._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: JOB_DELETE_RESET });
    }
    dispatch(listJobs({ seller: sellerMode ? userInfo._id : "" }));
  }, [
    createdJob,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
  ]);

  const createHandler = () => {
    dispatch(createJob());
  };
  return (
    <div>
      <div className="row">
        <h1>Jobs</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Job
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Seller</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>{job._id}</td>
                <td>{job.name}</td>
                <td>
                  <img className="small" src={job.image} alt={job.name}></img>
                </td>

                <td>${job.price}</td>
                <td>{job.category}</td>
                <td>{job.brand}</td>
                <td>{job.seller.seller.name}</td>

                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/job/${job._id}/edit`)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(job)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
