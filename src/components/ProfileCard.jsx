import { useEffect,useState } from "react";
import axios from "axios";

const ProfileCard = () => {

  const [userData, setUserData] = useState({ user: null });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');

  
        setUserData({ loading: false, error: null, user: response.data.results[0] });
      } catch (error) {
        setUserData({ loading: false, error: error.message, user: null });
      }
    };

    fetchUser();
  }, []);

  const {  user } = userData;

  return (
    <>
      <div className="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg" style={{scale:"2"}}>
        <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
         <img src={user && user.picture.medium} style={{borderRadius:"50%"}} alt="profile image"/>
        </section>

        <section className="block border-l border-gray-300 m-3">
          <div className="pl-3">
            <h3 className="text-gray-600 font-semibold text-sm">
            {user && user.name?.title} {user && user.name?.first} {user && user.name?.last}
            </h3>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
              {user && user.gender}
            </h3>
          </div>
          <div className="pl-3">
            <h3 className="text-gray-600 font-semibold text-sm">
            {user && user.phone}
            </h3>
       
          </div>
         
        </section>
      </div>
    </>
  );
};

export default ProfileCard;
