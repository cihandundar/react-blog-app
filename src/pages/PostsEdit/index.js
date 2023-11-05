import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "redux/userSlice";

const PostsEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const dummy = useSelector((state) => state?.users?.dummy);
  const existingUser = dummy.filter((user) => user.id === params.id);
  const { name, desc } = existingUser[0];
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name,
    desc,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        desc: values.desc,
      })
    );
    console.log(values);
    navigate("/post");
  };
  return (
    <div className="post">
      <div className="post__title">
        <h2>Posts</h2>
      </div>
      <div className="post__container">
        <div>
          <input
            className="post__container__input"
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <input
            className="post__container__input"
            type="text"
            value={values.desc}
            onChange={(e) => setValues({ ...values, desc: e.target.value })}
          />
        </div>
        <button
          style={{
            width: "100px",
            height: "35px",
            backgroundColor: "#134e7040",
            marginTop: "10px",
          }}
          onClick={handleEditUser}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default PostsEdit;
