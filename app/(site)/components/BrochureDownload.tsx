"use client";
import { client } from '@/sanity/lib/client';
import React from 'react';

const DownloadButton = ({
    fileUrl,
    serviceTitle,
}: {
    fileUrl: string;
    serviceTitle: string;
}) => {

    const handleDownload = async () => {
        try {
            console.log("Attempting to download PDF...");
            if (!fileUrl) {
                console.error("Error: PDF file URL is undefined");
                return;
            }

            // Fetch the asset data from Sanity using the file URL reference
            const response = await fetch(fileUrl);

            if (!response.ok) {
                console.error("Failed to fetch file from URL");
                return;
            }

            // Assuming the file is directly available at the given file URL
            const fileBlob = await response.blob();
            
            // Extract the original file name from the URL and append the service title with " | CodeAutomation"
            const fileName = `${serviceTitle} | CodeAutomation.pdf`;

            // Create a download link and trigger the download
            const link = document.createElement("a");
            link.href = URL.createObjectURL(fileBlob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error("Error downloading PDF:", error);
        }
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-[#1d92fb] text-white text-sm px-4 py-2 rounded-full hover:text-black hover:bg-[#f7e022]"
        >
            Download
        </button>
    );
};

export default DownloadButton;
