"use client";
import React, { useState, useRef } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";

interface propType {
  jobPost: string;
}

const FileInput: React.FC<propType> = (props) => {
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<any>("");
  const [fileBuffer, setFileBuffer] = useState<any>("");
  const [fileType, setFileType] = useState("");
  const [uploading, setUploading] = useState(false);
  // const [popupVisible, setPopupVisible] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fieldEmptyErrorMessage, setFieldEmptyErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSuccessMessage("");
    setFileName(file?.name);
    setFile(file);
    const fileBufferValue = await readFileAsBase64(file);
    const bufferString = fileBufferValue.slice(
      fileBufferValue.indexOf(",") + 1
    );
    setFileBuffer(bufferString);
    setFileType(file.type);
  };

  const handleSubmit = async () => {
    setUploading(true);
    setFieldEmptyErrorMessage("");
    setSuccessMessage("");

    if (fileName.length <= 0) {
      setFieldEmptyErrorMessage("Please choose a file to upload");
      setUploading(false);
      setTimeout(() => {
        setFieldEmptyErrorMessage("");
      }, 4000);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.set("title", props.jobPost);
      formData.set("fileBuffer", fileBuffer);
      formData.set("fileName", fileName);
      formData.set("fileType", fileType);

      const response = await fetch("/api/uploadresume", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage("Resume sent successfully");
        setFileName("");
        setFile("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setFieldEmptyErrorMessage("Failed to send resume");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setUploading(false);
   
  };

  return (
    <div className="mb-5">
      <div className="cursor-pointer inline-flex gap-2 items-center relative text-[#024]">
        <label htmlFor="fileInput" className="cursor-pointer flex gap-2">
          <AiOutlinePaperClip size={24} /> Upload CV/Resume
        </label>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>

      {fileName && (
        <div className="flex items-center gap-4">
          <p className="font-bold">Selected File :</p>
          <p className="text-sm text-gray-500">{fileName}</p>
        </div>
      )}
      <div>
        <button
          className="self-center text-lg text-center text-black bg-[#F7E022] flex justify-center rounded-xl px-10 py-2 shadow-md shadow-slate-400 cursor-pointer mt-4"
          onClick={handleSubmit}
          disabled={uploading ? true : false}
        >
          {!uploading ? (
            "Submit"
          ) : (
            <div className="w-7 h-7  rounded-2xl border-blue-500 border-x-4 animate-spin"></div>
          )}
        </button>

        {fieldEmptyErrorMessage && (
          <div className="bg-red-600 px-6 py-3 mt-4 rounded-lg w-fit shadow-xl">
            <p className="text-white font-semibold">{fieldEmptyErrorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div className="bg-green-600 px-6 py-3 mt-4 rounded-lg w-fit shadow-xl">
            <p className="text-white font-semibold">{successMessage}</p>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default FileInput;
