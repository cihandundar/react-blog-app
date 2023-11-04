import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "redux/userSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const dummy = useSelector((state) => state?.users?.dummy);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <section className="post">
      <div className="post__title">
        <h2>Posts</h2>
      </div>
      <div className="post__container">
        <div className="post__container__wrapper">
          {dummy.map((card) => (
            <div className="post__container__item" key={card.id}>
              <div>
                <div className="post__container__item__title">
                  <h3>{card.name}</h3>
                </div>
                <div className="post__container__item__desc">
                  <p>{card.desc}</p>
                </div>
              </div>
              <div className="post__container__item__btn">
                <Link to={`post-edit/${card.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleRemoveUser(card.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
