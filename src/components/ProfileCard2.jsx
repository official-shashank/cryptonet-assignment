/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileCard2.css";

const ProfileCard2 = () => {
  const [userData, setUserData] = useState({ user: null });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );


        setUserData({
          loading: false,
          error: null,
          user: response.data.results[0],
        });
      } catch (error) {
        setUserData({ loading: false, error: error.message, user: null });
      }
    };

    fetchUser();
  }, []);

  const { user } = userData;

  return (
    <>
      <div className="card">
        <div className="profile-pic">
          <img
            src={user && user.picture.large}
           
            alt="profile image"
          />
        </div>
        <div className="bottom">
          <div className="content">
            <span className="name">
              {user && user.name?.title} {user && user.name?.first}{" "}
              {user && user.name?.last}
            </span>
            <span className="about-me">
             {user && user?.email}
            </span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <div className="pl-3 mt-2">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  {user && user.gender}
                </h3>
              </div>
            </div>
            <button className="button mt-2">
              {" "}
              <h3 className="text-gray-600 font-semibold text-sm ">
                {user && user.phone}
              </h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard2;
