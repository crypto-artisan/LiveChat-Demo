import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProfileProps {
  personalDetails: {
    profile: string;
    name: string;
    position: string;
    company: string;
    about: string;
    dob: string;
    age: number;
    added: string;
    updated: string;
  };
}

const Profile = ({ personalDetails }: ProfileProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-start mb-3">
            <img
              className="d-flex me-3 rounded-circle avatar-lg"
              src={personalDetails.profile}
              alt=""
            />
            <div className="w-100">
              <h4 className="mt-0 mb-1">{personalDetails.name}</h4>
              <p className="text-muted">{personalDetails.position}</p>
              <p className="text-muted">
                <i className="mdi mdi-office-building"></i>{" "}
                {personalDetails.company}
              </p>

              <Link to="#" className="btn btn-xs btn-info me-1">
                Send Email
              </Link>
              <Link to="#" className="btn btn-xs btn-secondary me-1">
                Call
              </Link>
              <Link to="#" className="btn btn-xs btn-secondary">
                Edit
              </Link>
            </div>
          </div>

          <h5 className="mb-3 mt-4 text-uppercase bg-light p-2">
            <i className="mdi mdi-account-circle me-1"></i> Personal Information
          </h5>

          <div>
            <h4 className="font-13 text-muted text-uppercase">About Me :</h4>
            <p className="mb-3">{personalDetails.about}</p>

            <h4 className="font-13 text-muted text-uppercase mb-1">
              Date of Birth :
            </h4>
            <p className="mb-3">
              {" "}
              {personalDetails.dob} ({personalDetails.age} Years)
            </p>

            <h4 className="font-13 text-muted text-uppercase mb-1">
              Company :
            </h4>
            <p className="mb-3">{personalDetails.company}</p>

            <h4 className="font-13 text-muted text-uppercase mb-1">Added :</h4>
            <p className="mb-3">{personalDetails.added}</p>

            <h4 className="font-13 text-muted text-uppercase mb-1">
              Updated :
            </h4>
            <p className="mb-0">{personalDetails.updated}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
