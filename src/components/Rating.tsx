import React from "react";
import classNames from "classnames";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface RatingProps {
  tag: string;
  className?: string;
  value?: number;
}

/**
 * Rating
 */
const Rating = (props: RatingProps) => {
  const rating: number = Math.floor(props.value || 0);
  const emptyStars: number = Math.floor(rating < 5 ? 5 - rating : 0);
  const Tag: any = props.tag;

  return (
    <>
      <Tag
        className={classNames(
          "text-muted",
          "float-start",
          "me-3",
          props.className
        )}
        id="rating-container"
      >
        {[...Array(rating)].map((x, i) => (
          <OverlayTrigger
            key={i}
            placement="right"
            overlay={<Tooltip id="button-tooltip">{props.value || 0}</Tooltip>}
          >
            <span className="text-warning mdi mdi-star"></span>
          </OverlayTrigger>
        ))}
        {[...Array(emptyStars)].map((x, i) => (
          <OverlayTrigger
            key={i}
            placement="right"
            overlay={<Tooltip id="button-tooltip">{props.value || 0}</Tooltip>}
          >
            <span className="mdi mdi-star"></span>
          </OverlayTrigger>
        ))}
      </Tag>
    </>
  );
};

Rating.defaultProps = {
  tag: "p",
};

export default Rating;
