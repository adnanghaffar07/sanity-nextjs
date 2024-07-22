"use client";

import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Formik, Form } from "formik";

interface IntroductionSectionProps {
  data: any; // Define the type of data
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ data }) => {
  const [sectionData, setSectionData] = useState<any>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { getUser, isAuthenticated } = useKindeBrowserClient();

  useEffect(() => {
    setSectionData(data);
  }, [data]);

  const handleDownload = async () => {
    if (isAuthenticated) {
      startDownload();
    } else {
      setModalIsOpen(true);
    }
  };

  const startDownload = async () => {
    try {
      if (!data.pdfFile) {
        console.error("Error: PDF file data is undefined");
        return;
      }

      const assetRef = data.pdfFile.asset._ref;
      const assetData = await client.getDocument(assetRef);
      const pdfUrl = assetData?.url;

      if (pdfUrl) {
        fetch(pdfUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const blobUrl = URL.createObjectURL(blob);
            const anchor = document.createElement("a");
            anchor.href = blobUrl;
            const fileName = assetData?.originalFilename || "download.pdf";
            anchor.download = fileName;
            anchor.click();
          })
          .catch((error) => {
            console.error("Error fetching PDF:", error);
          });
      } else {
        console.error("Error: PDF URL is undefined");
      }
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (values: { action: string }) => {
    const currentUrl = encodeURIComponent(window.location.href);
    if (values.action === "login") {
      window.location.href = `/api/auth/login?post_login_redirect_url=${currentUrl}`;
    } else {
      window.location.href = `/api/auth/register?post_register_redirect_url=${currentUrl}`;
    }
  };

  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {sectionData.introductionSection?.introImage ? (
          <div className="w-full md:w-1/2 md:flex md:pl-8 md:justify-start mb-4">
            <Image
              src={urlForImage(sectionData.introductionSection?.introImage).toString()}
              alt=""
              width={570}
              height={370}
            />
          </div>
        ) : (
          <div className="w-full justify-center mb-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {sectionData.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 leading-relaxed text-center ">
                {sectionData.introductionSection?.introDesc}
              </p>
            </div>
            {sectionData.pdfFile && (
              <div className="flex cursor-pointer justify-center mt-8 p-5 bg-black text-white rounded-2xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <button onClick={handleDownload}>Download Brochure</button>
              </div>
            )}
          </div>
        )}
        {sectionData.introductionSection?.introImage && (
          <div className="w-full md:w-1/2 md:justify-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-8">
                {sectionData.introductionSection?.introHeading}
              </h2>
              <p className="text-lg text-gray-800 text-justify">
                {sectionData.introductionSection?.introDesc}
              </p>
            </div>
            {sectionData.pdfFile && (
              <div onClick={handleDownload} className="flex cursor-pointer justify-center mt-8 p-5 bg-black text-white rounded-2xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <button >Download Brochure</button>
              </div>
            )}
          </div>
        )}
      </div>
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <h2 className="font-bold text-lg mb-4">Authentication Required</h2>
            <p>You need to sign in or register to download the brochure.</p>
            <Formik
              initialValues={{ action: "" }}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="flex justify-around mt-4">
                    <button
                      type="button"
                      className="btn btn-signin"
                      onClick={() => {
                        setFieldValue("action", "login");
                        handleSubmit({ action: "login" });
                      }}
                    >
                      Sign In
                    </button>
                    <button
                      type="button"
                      className="btn btn-register"
                      onClick={() => {
                        setFieldValue("action", "register");
                        handleSubmit({ action: "register" });
                      }}
                    >
                      Register
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 10px;
          max-width: 500px;
          width: 90%;
          text-align: center;
          position: relative;
        }
        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }
        .btn {
          margin: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .btn-signin {
          background-color: #007bff;
          color: white;
        }
        .btn-signin:hover {
          background-color: #0056b3;
        }
        .btn-register {
          background-color: white;
          color: #007bff;
          border: 2px solid #007bff;
        }
        .btn-register:hover {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default IntroductionSection;
