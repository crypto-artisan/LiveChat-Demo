import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../components/PageTitle";

import UserProfile from "./UserProfile";
import News from "./News";
import Feeds from "./Feeds";
import FeaturedVideo from "./FeaturedVideo";
import Followers from "./Followers";

// SocialFeed
const SocialFeed = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Apps", path: "/apps/social-feed" },
          { label: "Social Feed", path: "/apps/social-feed", active: true },
        ]}
        title={"Social Feed"}
      />

      <Row>
        <Col xl={{ span: 3, order: 1 }} lg={{ span: 6, order: 1 }}>
          <UserProfile />
          <FeaturedVideo />
        </Col>

        <Col xl={{ span: 6, order: 1 }} lg={{ span: 12, order: 2 }}>
          <Feeds />
        </Col>

        <Col xl={{ span: 3, order: 2 }} lg={{ span: 6, order: 1 }}>
          <News />
          <Followers />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SocialFeed;
