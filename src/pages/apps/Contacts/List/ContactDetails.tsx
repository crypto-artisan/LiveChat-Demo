import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

interface ContactDetailsProps {
  contacts: {
    id: number;
    name: string;
    avatar: string;
    position: string;
    website: string;
    posts: string;
    followers: string;
    followings: string;
  }[];
}

const ContactDetails = ({ contacts }: ContactDetailsProps) => {
  return (
    <>
      <Row>
        {(contacts || []).map((user, index) => {
          return (
            <Col key={index} lg={4}>
              <Card className="text-center">
                <Card.Body>
                  <div className="pt-2 pb-2">
                    <img
                      src={user.avatar}
                      className="rounded-circle img-thumbnail avatar-xl"
                      alt=""
                    />

                    <h4 className="mt-3">
                      <Link to="#" className="text-dark">
                        {user.name}
                      </Link>
                    </h4>
                    <p className="text-muted">
                      @{user.position} <span> | </span>{" "}
                      <span>
                        <Link to="#" className="text-pink">
                          {user.website}
                        </Link>
                      </span>
                    </p>

                    <Button
                      variant="primary"
                      className="btn-sm waves-effect waves-light me-1"
                    >
                      Message
                    </Button>
                    <Button variant="light" className="btn-sm waves-effect">
                      Follow
                    </Button>

                    <Row className="mt-4">
                      <Col xs={4}>
                        <div className="mt-3">
                          <h4>{user.posts}</h4>
                          <p className="mb-0 text-muted text-truncate">Post</p>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="mt-3">
                          <h4>{user.followers}</h4>
                          <p className="mb-0 text-muted text-truncate">
                            Followers
                          </p>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="mt-3">
                          <h4>{user.followings}</h4>
                          <p className="mb-0 text-muted text-truncate">
                            Followings
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ContactDetails;
