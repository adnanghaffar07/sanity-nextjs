'use client'
import React, { useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

const FileInput = () => {
  const [fileName, setFileName] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const fileInputRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const resetFileName = () => {
    setFileName("");
    // Reset file input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = () => {
    resetFileName();
    // Add your submit logic here
    setPopupVisible(true);

    // Hide popup message after 5 seconds
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="mb-5">
      <div className="cursor-pointer inline-flex gap-2 items-center relative text-[#024]">
        <input
          type="file"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <AiOutlinePaperClip size={24} /> Upload CV/Resume
      </div>
      {fileName && <p className="text-sm text-gray-500">{fileName}</p>}
      <div className="">
        <button
          className="self-center text-lg text-center text-black bg-[#F7E022] flex justify-center rounded-xl px-10 py-2 shadow-md shadow-slate-400 cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {popupVisible && (
        <div className="popup-message">
          <div className="loading-line"></div>
          <p className="message">Your File has been submitted!</p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
