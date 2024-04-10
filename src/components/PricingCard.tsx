import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import classNames from "classnames";

export interface PlanItemsTypes {
  id: number;
  name: string;
  icon: string;
  price: number;
  duration: string;
  features: Array<string>;
  isRecommended: boolean;
}

interface PricingCardProps {
  plans: PlanItemsTypes[];
  containerClass?: string;
  pricingCardClass?: string;
}

const PricingCard = ({
  plans,
  containerClass,
  pricingCardClass,
}: PricingCardProps) => {
  return (
    <>
      <Row className={containerClass}>
        {(plans || []).map((plan, idx) => {
          return (
            <Col md={4} key={idx}>
              <Card
                className={classNames(
                  "card-pricing",
                  {
                    "card-pricing-recommended": plan.isRecommended,
                  },
                  pricingCardClass
                )}
              >
                <Card.Body className="text-center">
                  <p className="card-pricing-plan-name fw-bold text-uppercase">
                    {plan.name}
                  </p>
                  <span
                    className={classNames(
                      "card-pricing-icon",
                      plan.isRecommended ? "text-white" : "text-primary"
                    )}
                  >
                    <i className={plan.icon}></i>
                  </span>
                  <h2
                    className={classNames("card-pricing-price", {
                      "text-white": plan.isRecommended,
                    })}
                  >
                    ${plan.price} <span>/ {plan.duration}</span>
                  </h2>
                  <ul className="card-pricing-features">
                    {(plan.features || []).map((feature, idx1) => {
                      return <li key={idx1}>{feature}</li>;
                    })}
                  </ul>
                  <button
                    className={classNames(
                      "btn",
                      "waves-effect",
                      "waves-light",
                      "mt-4",
                      "mb-2",
                      "width-sm",
                      plan.isRecommended ? "btn-light" : "btn-primary"
                    )}
                  >
                    Sign Up
                  </button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default PricingCard;
