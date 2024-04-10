import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Dropdown, Row, Col } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import classNames from "classnames";

//components
import { FormInput } from "../components/";

import profilePic from "../assets/images/users/user-1.jpg";

/* Chat Item Avatar */
const ChatItemAvatar = ({
  userAvatar,
  postedOn,
}: {
  userAvatar: string;
  postedOn: string;
}) => {
  return (
    <>
      <div className="chat-avatar">
        <img src={userAvatar} alt={userAvatar} />
        <i>{postedOn}</i>
      </div>
    </>
  );
};

/* Chat Item Text */
const ChatItemText = ({
  userName,
  text,
}: {
  userName: string;
  text: string;
}) => {
  return (
    <>
      <div className="conversation-text">
        <div className="ctext-wrap">
          <i>{userName}</i>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

/* Chat Item */
const chatItemDefaultProps = {
  placement: "",
  children: PropTypes.object,
  className: "",
};

const ChatItem = ({
  children,
  placement,
  className,
}: {
  children: any;
  placement: string;
  className: string;
}) => {
  return (
    <li
      className={classNames(
        "clearfix",
        { odd: placement === "left" },
        className
      )}
    >
      {children}
    </li>
  );
};

ChatItem.defaultProps = chatItemDefaultProps;

/**
 * ChatForm
 */

interface FormValues {
  newMessage: string;
}

/**
 * Renders the ChatForm
 */
const ChatForm = ({
  onNewMessagesPosted,
}: {
  onNewMessagesPosted: (message: string) => void;
}) => {
  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newMessage: yup.string().required("Please enter your messsage"),
    })
  );

  const methods = useForm<FormValues>({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * Handle valid form submission
   */
  const handleValidMessageSubmit: SubmitHandler<FormValues> = (values) => {
    const message = values["newMessage"];
    onNewMessagesPosted(message);
    reset();
  };

  return (
    <>
      <form
        name="chat-form"
        id="chat-form"
        onSubmit={handleSubmit(handleValidMessageSubmit)}
      >
        <Row>
          <Col>
            <FormInput
              type="text"
              name="newMessage"
              className="form-control chat-input"
              placeholder="Enter your text"
              register={register}
              key="newMessage"
              errors={errors}
              control={control}
            />
          </Col>
          <Col className="col-auto">
            <button
              type="submit"
              className="btn btn-danger chat-send waves-effect waves-light"
            >
              Send
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

/**
 * ChatList
 */

interface MessageItem {
  id: number;
  userPic?: string;
  userName: string;
  text: string;
  postedOn: string;
}

interface ChatListProps {
  className?: string;
  messages: Array<MessageItem>;
}

/**
 * Renders the ChatList
 */
const ChatList = (props: ChatListProps) => {
  const [messages, setMessages] = useState<Array<MessageItem>>(props.messages);

  /**
   * Handle new message posted
   */
  const handleNewMessagePosted = (message: string) => {
    // save new message
    setMessages(
      messages.concat({
        id: messages.length + 1,
        userPic: profilePic,
        userName: "Dominic",
        text: message,
        postedOn: new Date().getHours() + ":" + new Date().getMinutes(),
      })
    );
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle
              as="a"
              className="cursor-pointer card-drop p-0 shadow-none"
            >
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Refresh</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Chat</h4>

          <div className="chat-conversation">
            {/* chat messages */}
            <SimpleBar style={{ maxHeight: "370px", width: "100%" }}>
              <ul className={classNames("conversation-list", props.className)}>
                {(messages || []).map((message, i) => {
                  return (
                    <ChatItem
                      key={i}
                      placement={
                        message.userName === "Dominic" ? "left" : "right"
                      }
                    >
                      {message.userPic && (
                        <ChatItemAvatar
                          userAvatar={message.userPic}
                          postedOn={message.postedOn}
                        />
                      )}
                      <ChatItemText
                        userName={message.userName}
                        text={message.text}
                      />
                    </ChatItem>
                  );
                })}
              </ul>
            </SimpleBar>

            {/* chat form */}
            <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChatList;
