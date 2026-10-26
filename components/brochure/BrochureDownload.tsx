// Download link for a brochure PDF. Sanity's file CDN sends the file as an
// attachment with the name given in `dl`, so no JavaScript is needed.

const downloadName = (title: string) => `${title.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}-CodeAutomation.pdf`;

export default function BrochureDownload({ fileUrl, serviceTitle }: { fileUrl: string; serviceTitle: string }) {
  return (
    <a
      href={`${fileUrl}?dl=${downloadName(serviceTitle)}`}
      className="inline-block bg-[#1d92fb] text-white text-sm px-4 py-2 rounded-full hover:text-black hover:bg-[#f7e022]"
    >
      Download
    </a>
  );
}
