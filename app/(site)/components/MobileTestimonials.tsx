// components/Testimonials.tsx
'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import QuoteModal from './MobileQuoteModal';

// Sample testimonial data with more entries
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Code Automation delivered our MVP in just 6 weeks. Their transparent pricing and agile approach made all the difference. Highly recommended!',
    rating: 5,
    type: 'image',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, FinApp',
    content: 'The team\'s expertise in cross-platform development helped us reach both iOS and Android users simultaneously. Post-launch support has been exceptional.',
    rating: 5,
    type: 'video',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, HealthPlus',
    content: 'Enterprise-grade security was our top priority, and Code Automation exceeded our expectations.',
    rating: 5,
    type: 'image',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'David Kim',
    role: 'CTO, EcomSolutions',
    content: 'Their tailored solutions perfectly matched our unique business needs. The agile collaboration kept us in the loop throughout the development process.',
    rating: 5,
    type: 'image',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director, Brandify',
    content: 'The cross-platform expertise of Code Automation helped us launch on all major platforms simultaneously. Our users love the seamless experience!',
    rating: 5,
    type: 'video',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'James Wilson',
    role: 'Founder, StartupHub',
    content: 'As a startup, we needed rapid MVP delivery without compromising quality. Code Automation exceeded our expectations and helped us secure funding.',
    rating: 5,
    type: 'image',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'Maria Garcia',
    role: 'Product Owner, HealthTech',
    content: 'The dedicated post-launch support has been invaluable. They truly care about our long-term success.',
    rating: 5,
    type: 'image',
    mediaUrl: '',
    videoUrl: '',
  },
  {
    name: 'Robert Taylor',
    role: 'CEO, LogisticsPro',
    content: 'Transparent pricing and no hidden costs - exactly what we were looking for. The team delivered a robust solution that streamlined our operations.',
    rating: 5,
    type: 'video',
    mediaUrl: '',
    videoUrl: '',
  },
];

// Duplicate testimonials for infinite scroll effect
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

// Video Modal Component
function VideoModal({ isOpen, onClose, videoUrl }: { isOpen: boolean; onClose: () => void; videoUrl: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-[#2196f3] transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <video controls className="w-full rounded-lg" autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial, onPlayVideo }: { testimonial: any; onPlayVideo: (url: string) => void }) {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Media Thumbnail */}
      {testimonial.mediaUrl && (
        <div className="mb-4 relative flex-shrink-0">
          {testimonial.type === 'video' ? (
            <div className="relative cursor-pointer" onClick={() => onPlayVideo(testimonial.videoUrl)}>
              <Image
                src={testimonial.mediaUrl}
                alt={testimonial.name}
                width={400}
                height={225}
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg hover:bg-black/40 transition-all group">
                <div className="w-12 h-12 bg-[#2196f3] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={testimonial.mediaUrl}
              alt={testimonial.name}
              width={400}
              height={225}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
        </div>
      )}

      {/* Rating Stars */}
      <div className="flex gap-1 mb-3 flex-shrink-0">
        {renderStars(testimonial.rating)}
      </div>

      {/* Testimonial Content */}
      <p className="text-gray-700 text-left mb-4 italic flex-grow">&quot;{testimonial.content}&quot;</p>

      {/* Client Info */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="text-left">
          <h4 className="font-bold text-[#2196f3]">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
        
        {testimonial.type === 'video' && (
          <button 
            onClick={() => onPlayVideo(testimonial.videoUrl)}
            className="text-sm text-[#2196f3] hover:text-blue-700 font-medium flex items-center gap-1 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch
          </button>
        )}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollSpeed = 1; // pixels per frame (adjust for speed)

  // Auto-scroll function
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isHovering && scrollContainer) {
        // Scroll right
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reaching the end (infinite loop)
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  return (
    <section className="relative bg-[#E6F3FF] py-16 md:py-20 px-4 overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">Client Testimonials</h2>
        <p className="text-gray-700 text-lg">What Our Clients Say About Us</p>
      </div>

      {/* Auto-scrolling Carousel */}
      <div 
        className="relative z-10 max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#E6F3FF] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#E6F3FF] to-transparent z-10 pointer-events-none"></div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-none w-full sm:w-[350px] md:w-[400px] transform transition-transform duration-300 hover:scale-105"
            >
              <TestimonialCard
                testimonial={testimonial}
                onPlayVideo={setSelectedVideo}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo}
        />
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}