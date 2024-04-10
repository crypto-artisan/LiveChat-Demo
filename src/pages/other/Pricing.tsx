import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import PricingCard, { PlanItemsTypes } from "../../components/PricingCard";

// Pricing component
const Pricing = () => {
  const plans: PlanItemsTypes[] = [
    {
      id: 1,
      name: "Professional Pack",
      icon: "fe-users",
      price: 19,
      duration: "Month",
      features: [
        "10 GB Storage",
        "500 GB Bandwidth",
        "No Domain",
        "1 User",
        "Email Support",
        "24x7 Support",
      ],
      isRecommended: false,
    },
    {
      id: 2,
      name: "Business Pack",
      icon: "fe-award",
      price: 29,
      duration: "Month",
      features: [
        "50 GB Storage",
        "900 GB Bandwidth",
        "2 Domain",
        "10 User",
        "Email Support",
        "24x7 Support",
      ],
      isRecommended: true,
    },
    {
      id: 3,
      name: "Enterprise Pack",
      icon: "fe-aperture",
      price: 39,
      duration: "Month",
      features: [
        "100 GB Storage",
        "Unlimited Bandwidth",
        "10 Domain",
        "Unlimited Users",
        "Email Support",
        "24x7 Support",
      ],
      isRecommended: false,
    },
  ];

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Extra Pages", path: "/pages/pricing" },
          { label: "Pricing", path: "/pages/pricing", active: true },
        ]}
        title={"Pricing"}
      />

      <Row className="justify-content-center">
        <Col xl={10}>
          <div className="text-center">
            <h3 className="mb-2">
              Our <b>Plans</b>
            </h3>
            <p className="text-muted w-50 m-auto">
              We have plans and prices that fit your business perfectly. Make
              your client site a success with our products.
            </p>
          </div>

          {/* pricing cards */}
          <PricingCard plans={plans} containerClass={"my-3"} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Pricing;
