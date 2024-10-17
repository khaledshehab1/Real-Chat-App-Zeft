import React, { useState, useContext, useEffect } from "react";
import { Personel_context, Login_Context } from "../states/contexs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

function AddUser({ closeModal, onRoomCreated }) {
  var { Personel } = useContext(Personel_context);
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState([]);

  const { roomId } = useParams();

  useEffect(() => {
    console.log("Add user in ", roomId); // Debug log

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3003/rooms/room/${roomId}`,
          {
            withCredentials: true,
          }
        );
        setRoom(response.data.users);
        console.log("the response ", response.data.users);
        console.log("after response", response.data);
      } catch (error) {
        console.error("Error fetching room:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async (email) => {
    if (Array.isArray(room)) {
      room.push(email); // Correct the case of .push
      console.log("User added:", email);
    } else {
      console.error("Room is not an array");
    }
  };

  // Room Number and but it in the params of rooms and then but it in add user

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg p-6 shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-3xl text-gray-700 hover:text-red-500 transition duration-300"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">Add User</h2>

        <label className="block mb-2 text-lg">User Email</label>
        <input
          type="text"
          placeholder="Enter your friend Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 block mx-auto"
        >
          ADD
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddUser;
