import React from "react";
import { Link } from "react-router-dom";

export default function Job(props) {
  const { job } = props;
  return (
    <div key={job._id} className="card">
      <Link to={`/job/${job._id}`}>
        <img className="medium" src={job.image} alt={job.name} />
      </Link>
      <div className="card-body">
        <Link to={`/job/${job._id}`}>
          <h2>{job.name}</h2>
        </Link>

        <div className="row">
          <div className="price">{"$" + job.price}</div>
          <div>
            <Link to={`/seller/${job.seller._id}`}>
              {job.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
