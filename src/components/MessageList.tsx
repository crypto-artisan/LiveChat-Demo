import React from "react";
import SimpleBar from "simplebar-react";
import classNames from "classnames";

interface MessageListProps {
  className?: string;
  children?: Object;
}

/**
 * MessageList
 */
const MessageList = (props: MessageListProps) => {
  const children = props.children || null;

  return (
    <SimpleBar style={{ maxHeight: "407px" }}>
      <div className={classNames("inbox-widget", props.className)}>
        {children}
      </div>
    </SimpleBar>
  );
};

export default MessageList;
