import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/userSlice";

const Users = () => {
  const data = useSelector((state) => state?.users?.data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.users?.isLoading);
  console.log(isLoading);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <section className="user">
      <div className="user__container">
        <div className="user__container__title">
          <h2>Users</h2>
        </div>
        <ul className="user__card">
          {data?.map((info) => (
            <li key={info?.id} className="user__card__item">
              <div className="user__card__image">
                <img src={info?.avatar} alt="" />
              </div>
              <div className="user__card__name">
                <h3>{info?.name}</h3>
              </div>
              <div className="user__card__email">
                <p>{info?.email}</p>
                <p>{info?.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
