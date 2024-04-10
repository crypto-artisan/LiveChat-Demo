import React, { useCallback, useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Card,
  Dropdown,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import classnames from "classnames";
import SimpleBar from "simplebar-react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { FormInput } from "../../../components/";
import Loader from "../../../components/Loader";

// default data
import { messages, ChatMessage, ChatUser } from "./data";

import avatar1 from "../../../assets/images/users/user-1.jpg";

const UserMessage = ({
  message,
  toUser,
}: {
  message: ChatMessage;
  toUser: ChatUser;
}) => {
  return (
    <li className={classnames("clearfix", { odd: message.from.id === toUser.id })} >
      <div className="chat-avatar">
        <img src={message.from.avatar} className="rounded" alt="" />
        <i>{message.sendOn}</i>
      </div>

      <div className="conversation-text">
        {message.message.type === "text" && (
          <div className="ctext-wrap">
            <i>{message.from.name}</i>
            {message.message.type === "text" && <p>{message.message.value}</p>}
          </div>
        )}
        {message.message.type === "file" && (
          <Card className="mt-2 mb-1 shadow-none border text-start">
            <div className="p-2">
              <Row className="align-items-center">
                <Col className="col-auto">
                  <div className="avatar-sm">
                    <span className="avatar-title bg-primary rounded">
                      .ZIP
                    </span>
                  </div>
                </Col>
                <Col className="ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    {message.message.value.file}
                  </Link>
                  <p className="mb-0">{message.message.value.size}</p>
                </Col>
                <Col className="col-auto">
                  <Link to="#" className="btn btn-link btn-lg text-muted">
                    <i className="dripicons-download"></i>
                  </Link>
                </Col>
              </Row>
            </div>
          </Card>
        )}
      </div>

      <Dropdown
        className="conversation-actions"
        align={message.from.id === toUser.id ? "start" : "end"}
      >
        <Dropdown.Toggle as="a" className="btn-sm card-drop cursor-pointer">
          <i className="mdi mdi-dots-vertical font-16"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Copy Message</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
};

interface ChatAreaProps {
  selectedUser: ChatUser;
}

// ChatArea
const ChatArea = ({ selectedUser }: ChatAreaProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userMessages, setUserMessages] = useState<ChatMessage[]>([]);

  const [toUser] = useState<ChatUser>({
    id: 9,
    name: "Geneva M",
    avatar: avatar1,
    email: "support@coderthemes.com",
    phone: "+1 456 9595 9594",
    location: "California, USA",
    languages: "English, German, Spanish",
    groups: "Work, Friends",
  });

  /*
   *  Fetches the messages for selected user
   */
  const getMessagesForUser = useCallback(() => {
    if (selectedUser) {
      setLoading(true);
      setTimeout(() => {
        setUserMessages(
          [...messages].filter(
            (m) =>
              (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
              (toUser.id === m.from.id && m.to.id === selectedUser.id)
          )
        );
        setLoading(false);
      }, 750);
    }
  }, [selectedUser, toUser]);

  useEffect(() => {
    getMessagesForUser();
  }, [getMessagesForUser]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newMessage: yup.string().required("Please enter your messsage"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * sends the chat message
   */
  const sendChatMessage = async (values: { newMessage: string }) => {
    let newUserMessages = [...userMessages];
    newUserMessages.push({
      id: userMessages.length + 1,
      from: toUser,
      to: selectedUser,
      message: { type: "text", value: values["newMessage"] },
      sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
    });
    setTimeout(() => {
      let otherNewMessages = [...newUserMessages]
      otherNewMessages.push({
        id: userMessages.length + 1,
        from: selectedUser,
        to: toUser,
        message: { type: "text", value: values["newMessage"] },
        sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
      })
      setUserMessages(otherNewMessages);
    }, 1000);
    setUserMessages(newUserMessages);
    reset();
  };

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (elementRef && elementRef.current && elementRef.current.scrollIntoView) {
        elementRef.current.scrollIntoView({behavior:'smooth'})
      }
    })
    return <div ref={elementRef} />
  }

  return (
    <>
      <Card>
        <Card.Body className="py-2 px-3 border-bottom border-light">
          <Row className="justify-content-between py-1">
            <Col sm={7}>
              <div className="d-flex align-items-start">
                <img
                  src={selectedUser.avatar}
                  className="me-2 rounded-circle"
                  height="36"
                  alt="Brandon Smith"
                />
                <div>
                  <h5 className="mt-0 mb-0 font-15">
                    <Link to="/apps/contacts/profile" className="text-reset">
                      {selectedUser.name}
                    </Link>
                  </h5>
                  <p className="mt-1 mb-0 text-muted font-12">
                    <small className="mdi mdi-circle text-success"></small>{" "}
                    Online
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col-auto">
              <div id="tooltips-container">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="">Voice Call</Tooltip>}
                >
                  <Link
                    to="#"
                    className="text-reset font-19 py-1 px-2 d-inline-block"
                  >
                    <i className="fe-phone-call"></i>
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="">Video Call</Tooltip>}
                >
                  <Link
                    to="#"
                    className="text-reset font-19 py-1 px-2 d-inline-block"
                  >
                    <i className="fe-video"></i>
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="">Add Users</Tooltip>}
                >
                  <Link
                    to="#"
                    className="text-reset font-19 py-1 px-2 d-inline-block"
                  >
                    <i className="fe-user-plus"></i>
                  </Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="">Delete Chat</Tooltip>}
                >
                  <Link
                    to="#"
                    className="text-reset font-19 py-1 px-2 d-inline-block"
                  >
                    <i className="fe-trash-2"></i>
                  </Link>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Body>
          {loading && <Loader />}

          <SimpleBar
            style={{ height: "465px", width: "100%" }}
            id="chatScrollBar"
          >
            <ul
              className="conversation-list"
            >
              {(userMessages || []).map((message, index) => {
                return (
                  <UserMessage key={index} message={message} toUser={toUser} />
                );
              })}
              <AlwaysScrollToBottom />
            </ul>
          </SimpleBar>

          <Row>
            <Col>
              <div className="mt-3 bg-light p-3 rounded">
                <form
                  noValidate
                  name="chat-form"
                  id="chat-form"
                  onSubmit={handleSubmit(sendChatMessage)}
                >
                  <div className="row">
                    <div className="col mb-2 mb-sm-0">
                      <FormInput
                        type="text"
                        name="newMessage"
                        className="border-0"
                        placeholder="Enter your text"
                        register={register}
                        key="newMessage"
                        errors={errors}
                        control={control}
                      />
                    </div>
                    <div className="col-sm-auto">
                      <div className="btn-group">
                        <Link to="#" className="btn btn-light">
                          <i className="fe-paperclip"></i>
                        </Link>
                        <button
                          type="submit"
                          className="btn btn-success chat-send w-100"
                        >
                          <i className="fe-send"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChatArea;
