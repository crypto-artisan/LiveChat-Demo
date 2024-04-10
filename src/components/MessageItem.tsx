import React from "react";
import classNames from "classnames";

interface MessageItemProps {
  className?: string;
  children?: any;
}

/**
 * MessageItem
 */
const MessageItem = (props: MessageItemProps) => {
  const children = props.children || null;

  return (
    <div className={classNames("inbox-item", props.className)}>{children}</div>
  );
};

export default MessageItem;
