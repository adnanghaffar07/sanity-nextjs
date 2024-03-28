'use client'
import React, { Component } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
    };
    this.fileInputRef = React.createRef();
  }

  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ fileName: file.name });
    }
  };

  resetFileName = () => {
    this.setState({ fileName: "" });
    // Reset file input value to allow selecting the same file again
    if (this.fileInputRef.current) {
      this.fileInputRef.current.value = "";
    }
  };

  handleSubmit = () => {
    this.resetFileName();
    // Add your submit logic here
  };

  render() {
    const { fileName } = this.state;

    return (
      <div className="mb-5">
        <div className="cursor-pointer inline-flex gap-2 items-center relative text-[#024]">
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            onChange={this.handleFileChange}
            ref={this.fileInputRef}
          />
          <AiOutlinePaperClip size={24} /> Upload CV/Resume
        </div>
        {fileName && <p className="text-sm text-gray-500">{fileName}</p>}
        <div className="">
          <button
            className="self-center text-lg text-center text-black bg-[#F7E022] flex justify-center rounded-xl px-10 py-2 shadow-md shadow-slate-400 cursor-pointer"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default FileInput;
