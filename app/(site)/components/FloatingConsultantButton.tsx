'use client';

export default function FloatingConsultButton() {
  const scrollToForm = () => {
    const form = document.getElementById("contact-box");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-[9999] w-max">
      <button
        onClick={scrollToForm}
        className="rotate-90 origin-top-right bg-[#1D92FB] text-white text-xl rounded-l-none rounded-r-full px-4 py-2 shadow-md hover:bg-blue-600 transition-all"
      >
        Get Your <span className="text-black">Free</span> Consultation
      </button>
    </div>
  );
}
