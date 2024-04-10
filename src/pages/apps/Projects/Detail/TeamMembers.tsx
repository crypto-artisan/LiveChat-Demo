import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface TeamMembersProps {
  teamMembers?: {
    image: string;
    name: string;
  }[];
}

const TeamMembers = ({ teamMembers }: TeamMembersProps) => {
  return (
    <>
      <h5>Team Members:</h5>
      {(teamMembers || []).map((member, index) => {
        return (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={member.name}>{member.name}</Tooltip>}
          >
            <Link to="#" className="d-inline-block me-1">
              <img
                src={member.image}
                className="rounded-circle img-thumbnail avatar-sm"
                alt="friend"
              />
            </Link>
          </OverlayTrigger>
        );
      })}
    </>
  );
};

export default TeamMembers;
