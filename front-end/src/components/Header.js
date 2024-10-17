// components/Header.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import AddUser from "./AddUser.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { Login_Context, Personel_context } from "../states/contexs.jsx";

function Header({roomname, roomid }) {
  const { Login_Show, setLogin } = useContext(Login_Context);
  const { Personel } = useContext(Personel_context); // استخدم const هنا بدلاً من var
  const [showAddUser, setshowAddUser] = useState(false);

  return (
    <div className="p-4 bg-white border-b flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* <img
          src={`https://i.pravatar.cc/150?img=${chat.id}`}
          className="w-10 h-10 rounded-full"
          alt={chat.name}
        /> */}
        <div>
          <p className="font-semibold text-lg">{roomname}</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>
      <div className="flex space-x-2 md:space-x-4">
        {" "}
        {/* تغيير المسافة بين الأزرار */}
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-blue-700 hover:text-blue-900 transition-all duration-500">
          <FontAwesomeIcon icon={faPhone} />
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-blue-700 hover:text-blue-900 transition-all duration-500">
          <FontAwesomeIcon icon={faVideo} />
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 text-blue-700 hover:text-blue-900 transition-all duration-500">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
        <Link
          className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          to={`/adduser/${roomid}`}
          onClick={() => setshowAddUser(true)}
          // onClick={(e) => {
          // //   e.stopPropagation(); // منع تفعيل الرابط الخارجي عند الضغط على الزر
          //   navigate(`/adduser/${chat._id}`); // التوجيه إلى صفحة إضافة المستخدم
          // }}
        >
          <AiOutlinePlus className="text-lg" />
        </Link>
        {/* <button
          className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => setShowCreateRoomModal(true)}
        >
          <AiOutlinePlus className="text-lg" />
        </button> */}
        {showAddUser && <AddUser closeModal={() => setshowAddUser(false)} />}
      </div>
    </div>
  );
}

export default Header;
