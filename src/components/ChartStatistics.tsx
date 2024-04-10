import React from "react";
import classNames from "classnames";

interface ChartStatisticsProps {
  title: string;
  icon?: string;
  stats: string;
  variant: string;
}

const ChartStatistics = ({
  title,
  icon,
  stats,
  variant,
}: ChartStatisticsProps) => {
  return (
    <>
      <p className="text-muted font-15 mb-1 text-truncate">{title}</p>
      <h4>
        <i className={classNames(icon, "text-" + variant, "me-1")}></i>
        {stats}
      </h4>
    </>
  );
};

export default ChartStatistics;
