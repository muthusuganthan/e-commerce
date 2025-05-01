import { data } from "autoprefixer";
import { useState } from "react";

const Comment = () => {
  const [Message, setmessage] = useState();
  const [Name, setname] = useState();

  // reduce lines using objects
  const [Data, setdata] = useState({ name: "", message: "" });

  // array

  const [alldata, setAlldata] = useState([]);
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={(e) => {
            setdata((items) => {
              return { ...items, name: e.target.value };
            });
          }}
        />
        <textarea
          placeholder="Your message"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={(e) => {
            setdata((items) => {
              return { ...items, message: e.target.value };
            });
          }}
        ></textarea>
        <button
          onClick={() => {
            setAlldata((prev) => {
              return [...prev, Data];
            });
            setdata({ name: "", message: "" });
          }}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Submit
        </button>
      </div>
      <div className="mt-8 space-y-4">
        {alldata.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="font-bold text-lg text-orange-700 mb-2">{item.name || 'Anonymous'}</h3>
            <p className="text-gray-800">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
