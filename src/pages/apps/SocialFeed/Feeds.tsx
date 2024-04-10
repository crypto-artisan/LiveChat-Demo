import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Tab, Nav, Dropdown } from "react-bootstrap";
import classnames from "classnames";

// dummy data
import posts, { Posts, Comment, User } from "./data";

import avatar3 from "../../../assets/images/users/user-1.jpg";

// form post
const FormPost = () => {
  return (
    <form action="#" className="comment-area-box">
      <textarea
        rows={4}
        className="form-control border-0 resize-none"
        placeholder="Write something...."
      ></textarea>
      <div className="p-2 bg-light d-flex justify-content-between align-items-center">
        <div>
          <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
            <i className="mdi mdi-image-outline"></i>
          </Link>
          <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
            <i className="mdi mdi-crosshairs-gps"></i>
          </Link>
          <Link to="#" className="btn btn-sm px-2 font-16 btn-light">
            <i className="mdi mdi-attachment"></i>
          </Link>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          <i className="mdi mdi-send-outline me-1"></i>Post
        </button>
      </div>
    </form>
  );
};

const createMarkup = (text: string) => {
  return { __html: text };
};

interface PostCommentProps {
  key: number;
  comment: Comment;
  isActionAllowed: boolean;
  toggleLikeOnComment: (comment: Comment) => void;
  containerClass?: string;
}

// post comment
const PostComment = ({
  comment,
  isActionAllowed,
  toggleLikeOnComment,
  containerClass,
}: PostCommentProps) => {
  return (
    <>
      <div
        className={classnames("d-flex", "align-items-start", containerClass)}
      >
        <img
          className="me-2 avatar-sm rounded-circle"
          src={comment.author!.avatar}
          alt=""
        />
        <div className="w-100">
          <h5 className="mt-0">
            <Link to="/apps/contacts/profile" className="text-reset">
              {comment.author!.name}{" "}
              <small className="text-muted">{comment.postedOn}</small>
            </Link>
          </h5>

          <p
            className="mb-0"
            dangerouslySetInnerHTML={createMarkup(comment.content!)}
          ></p>

          {isActionAllowed && (
            <Link to="#" className="text-muted font-13 d-inline-block mt-2">
              <i className="mdi mdi-reply me-1"></i> Reply
            </Link>
          )}

          {comment.replies && (
            <>
              {(comment.replies || []).map((reply, index) => {
                return (
                  <PostComment
                    key={index}
                    comment={reply}
                    isActionAllowed={false}
                    toggleLikeOnComment={toggleLikeOnComment}
                    containerClass="mt-3"
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

interface PostProps {
  post: Posts;
  user: User;
  toggleLike: (post: Posts) => void;
  toggleLikeOnComment: (comment: Comment) => void;
}

// post
const Post = ({ post, user, toggleLike, toggleLikeOnComment }: PostProps) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-start">
          <img
            className="me-2 avatar-sm rounded-circle"
            src={post.author!.avatar}
            alt=""
            height="32"
          />
          <div className="w-100">
            <Dropdown className="float-end text-muted" align="end">
              <Dropdown.Toggle
                as="a"
                className="text-muted font-18 cursor-pointer"
              >
                <i className="mdi mdi-dots-horizontal"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <h5 className="m-0">
              <Link to="/apps/contacts/profile" className="text-reset">
                {post.author!.name}
              </Link>
            </h5>
            <p className="text-muted">
              <small>
                {post.postedOn} <span className="mx-1">⚬</span>
                <span>{post.scope}</span>
              </small>
            </p>
          </div>
        </div>

        <div dangerouslySetInnerHTML={createMarkup(post.content!)}></div>

        <div className="mt-2">
          <Link
            to="#"
            className="btn btn-sm btn-link text-muted ps-0"
            onClick={() => toggleLike(post)}
          >
            <i
              className={classnames(
                "mdi",
                "text-danger",
                post.isLiked ? "mdi-heart" : "mdi-heart-outline"
              )}
            ></i>{" "}
            {post.totalLikes} Likes
          </Link>
          <Link to="#" className="btn btn-sm btn-link text-muted">
            <i className="mdi mdi-comment-multiple-outline me-1"></i>
            {post.totalComments} Comments
          </Link>

          {post.totalView && (
            <Link to="#" className="btn btn-sm btn-link text-muted">
              <i className="mdi mdi-eye-outline me-1"></i>
              {post.totalView} Views
            </Link>
          )}

          <Link to="#" className="btn btn-sm btn-link text-muted">
            <i className="mdi mdi-share-variant me-1"></i>
            Share
          </Link>
        </div>

        {post.comments && (
          <div className="post-user-comment-box mt-2">
            {(post.comments || []).map((comment, index) => {
              return (
                <PostComment
                  key={index}
                  comment={comment}
                  isActionAllowed={true}
                  toggleLikeOnComment={toggleLikeOnComment}
                ></PostComment>
              );
            })}
            {user && (
              <div className="d-flex align-items-start mt-2">
                <Link className="pe-2" to="#">
                  <img
                    src={user.avatar}
                    height="31"
                    className="rounded-circle"
                    alt=""
                  />
                </Link>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control border-0 form-control-sm"
                    placeholder="Add comment"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {user && !post.comments && (
          <div className="d-flex align-items-start mt-2">
            <img
              src={user.avatar}
              height="32"
              className="align-self-start rounded me-2"
              alt=""
            />
            <div className="w-100">
              <input
                type="text"
                className="form-control form-control-light border-0 form-control-sm"
                placeholder="Write a comment"
              />
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

// load more
const LoadMore = () => {
  return (
    <div className="text-center mb-3">
      <Link to="#" className="text-danger">
        <i className="mdi mdi-spin mdi-loading me-1 font-16"></i> Load more
      </Link>
    </div>
  );
};

// feeds
const Feeds = () => {
  const [user] = useState<User>({ id: 1, avatar: avatar3 });

  /*
   * toggle like on post
   */
  const toggleLike = (post: Posts) => {
    post.isLiked = !post.isLiked;
  };

  /*
   * toggle like on comment
   */
  const toggleLikeOnComment = (comment: Comment) => {
    comment.isLiked = !comment.isLiked;
  };

  return (
    <>
      <Tab.Container defaultActiveKey="post">
        <Card>
          <Card.Body className="p-0">
            <Nav variant="tabs" className="nav-bordered" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="post"
                >
                  <i className="mdi mdi-pencil-box-multiple font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Create Post</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="video"
                >
                  <i className="mdi mdi-image font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Photos/Videos</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#"
                  className="cursor-pointer px-3 py-2"
                  eventKey="story"
                >
                  <i className="mdi mdi-book-open-variant font-18 d-md-none d-block"></i>
                  <span className="d-none d-md-block">Story</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="pt-0">
              <Tab.Pane eventKey="post" className="p-3">
                <div className="border rounded">
                  <FormPost />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="video" className="p-3">
                <div className="border rounded">
                  <FormPost />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="story" className="p-3">
                <div className="border rounded">
                  <FormPost />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>

      {(posts || []).map((post, index) => {
        return (
          <Post
            post={post}
            key={index}
            user={user}
            toggleLike={toggleLike}
            toggleLikeOnComment={toggleLikeOnComment}
          />
        );
      })}

      <LoadMore></LoadMore>
    </>
  );
};

export default Feeds;
