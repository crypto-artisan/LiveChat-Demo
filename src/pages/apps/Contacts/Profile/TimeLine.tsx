import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// dummy data
import { posts, PostTypes, CommentsType } from "./data";

import avatar3 from "../../../../assets/images/users/user-1.jpg";

const FormPost = () => {
  return (
    <form action="#" className="comment-area-box mt-2 mb-3">
      <span className="input-icon">
        <textarea
          rows={3}
          className="form-control"
          placeholder="Write something...."
        ></textarea>
      </span>
      <div className="comment-area-btn">
        <div className="float-end">
          <button
            type="submit"
            className="btn btn-sm btn-dark waves-effect waves-light"
          >
            Post
          </button>
        </div>
        <div className="button-list">
          <Link to="#" className="btn btn-sm btn-light text-black-50">
            <i className="far fa-user"></i>
          </Link>
          <Link to="#" className="btn btn-sm btn-light text-black-50">
            <i className="fa fa-map-marker-alt"></i>
          </Link>
          <Link to="#" className="btn btn-sm btn-light text-black-50">
            <i className="fa fa-camera"></i>
          </Link>
          <Link to="#" className="btn btn-sm btn-light text-black-50">
            <i className="far fa-smile"></i>
          </Link>
        </div>
      </div>
    </form>
  );
};

const createMarkup = (text: string) => {
  return { __html: text };
};

const PostComment = ({ comment }: { comment: CommentsType }) => {
  return (
    <div className="d-flex align-items-start">
      <img
        className="me-2 avatar-sm rounded-circle"
        src={comment.author.avatar}
        alt=""
      />
      <div className="w-100">
        <h5 className="mt-0">
          {comment.author.name}{" "}
          <small className="text-muted">{comment.postedOn}</small>
        </h5>

        <p
          className="my-1"
          dangerouslySetInnerHTML={createMarkup(comment.content)}
        ></p>

        {comment.replies ? (
          <Link to="#" className="text-muted font-13 d-inline-block mt-2 mb-3">
            <i className="mdi mdi-reply"></i> Reply
          </Link>
        ) : null}

        {comment.replies && (
          <>
            {(comment.replies || []).map((reply, index) => {
              return <PostComment key={index} comment={reply} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

const Post = ({ post, user }: { post: PostTypes; user: UserItems }) => {
  return (
    <div className="border border-light p-2 mb-3">
      <div className="d-flex align-items-start">
        <img
          className="me-2 avatar-sm rounded-circle"
          src={post.author.avatar}
          alt=""
        />
        <div className="w-100">
          <h5 className="m-0">{post.author.name}</h5>
          <p className="text-muted">
            <small>{post.postedOn}</small>
          </p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={createMarkup(post.content)}></div>

      {post.comments ? (
        <div className="post-user-comment-box">
          {(post.comments || []).map((comment, index) => {
            return <PostComment key={index} comment={comment}></PostComment>;
          })}

          {user && (
            <div className="d-flex mt-2">
              <Link to="#" className="pe-2">
                <img
                  src={user.avatar}
                  height="32"
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
      ) : null}

      {post.engagement ? (
        <div className="mt-2">
          {post.comments ? null : (
            <Link to="#" className="btn btn-sm btn-link text-muted">
              <i className="mdi mdi-reply"></i> Reply
            </Link>
          )}
          {post.isLiked ? (
            <Link to="#" className="btn btn-sm btn-link text-danger">
              <i className={classnames("mdi", "mdi-heart")}></i> Likes (
              {post.totalLikes})
            </Link>
          ) : (
            <Link to="#" className="btn btn-sm btn-link text-muted">
              <i className="mdi mdi-heart-outline"></i> Like
            </Link>
          )}
          <Link to="#" className="btn btn-sm btn-link text-muted">
            <i className="mdi mdi-share-variant"></i> Share
          </Link>
        </div>
      ) : null}
    </div>
  );
};

const LoadMore = () => {
  return (
    <div className="text-center">
      <Link to="#" className="text-danger">
        <i className="mdi mdi-spin mdi-loading me-1"></i> Load more
      </Link>
    </div>
  );
};

interface UserItems {
  id: number;
  avatar: string;
}

// Timeline
const TimeLine = () => {
  const [user] = useState<UserItems>({ id: 1, avatar: avatar3 });

  return (
    <>
      <FormPost />
      {(posts || []).map((post, index) => {
        return <Post post={post} key={index} user={user} />;
      })}

      <LoadMore></LoadMore>
    </>
  );
};

export default TimeLine;
