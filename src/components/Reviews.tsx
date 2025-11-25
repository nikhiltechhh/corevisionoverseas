import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  const reviews = [
    {
      text: "Poorna sir made the entire application process so easy for me! He helped me secure amazing discounts on my GRE and IELTS coaching. The guidance for selecting affordable universities was outstanding. Truly the best consultancy I've worked with!",
      author: "Priya",
      location: "Guntur, AP, India",
      date: "March 2025",
      color: "from-emerald-600 to-emerald-700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAsSO20XlZQMr5DCvjIc2RodDDPpJdWtEPw&s",
      rating: 5
    },
    {
      text: "Chandhu was incredibly supportive throughout my entire journey. From TOEFL preparation with cashback offers to shortlisting budget-friendly universities, he was always available to help. Can't thank the team enough!",
      author: "Harsha",
      location: "Nellore, India",
      date: "April 2025",
      color: "from-blue-600 to-blue-700",
      image: "https://i.ibb.co/FkwZxQLG/Whats-App-Image-2025-11-14-at-9-30-25-PM.jpg",
      rating: 5
    },
    {
      text: "I was stressed about the entire application process, but the Core Vision team guided me step-by-step. Poorna sir's discounted IELTS coaching suggestions and expertise in low-tuition universities helped me plan everything with confidence.",
      author: "Ananya Reddy",
      location: "Hyderabad, India",
      date: "May 2025",
      color: "from-orange-600 to-orange-700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1wDXryz8ouM3hEXkluguoN7i1k7ICPHZ6Q&s",
      rating: 5
    },
    {
      text: "Amazing service! Chandhu helped me throughout the process and I received excellent cashback on GRE coaching. They recommended top-ranked yet affordable universities. The personal attention and constant support made all the difference!",
      author: "Vikram Singh",
      location: "Delhi, India",
      date: "February 2025",
      color: "from-purple-600 to-purple-700",
      image: "https://img.freepik.com/premium-photo/picture-indian-male-passport-photo-with-short-hair-beard_1046450-20769.jpg?w=360",
      rating: 5
    },
    {
      text: "Core Vision Overseas team, especially Poorna sir, guided me to less expensive universities and helped me save money with their TOEFL discount program. The entire process was smooth and stress-free with their expert counseling.",
      author: "Sneha Patel",
      location: "Ahmedabad, India",
      date: "June 2025",
      color: "from-pink-600 to-pink-700",
      image: "https://t3.ftcdn.net/jpg/04/18/93/88/360_F_418938894_iUWWkyqUsQ8oDZObqDRYqEUs4Oq5TJg1.jpg",
      rating: 5
    },
    {
      text: "I can't thank Chandhu and the entire team enough! Their cashback on IELTS coaching and expert counseling helped me get into a great university with low fees. They were with me every step of the way. Highly recommended!",
      author: "Arjun Kumar",
      location: "Chennai, India",
      date: "January 2025",
      color: "from-teal-600 to-teal-700",
      image: "https://img.freepik.com/premium-photo/young-indian-man-showing-expression-dark-background_438239-326.jpg",
      rating: 5
    }
  ];

  // Duplicate for infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let lastTime = Date.now();

    const scroll = () => {
      if (!isPaused && !isDragging) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        const scrollSpeed = 30;
        const scrollAmount = (scrollSpeed * deltaTime) / 1000;

        scrollContainer.scrollLeft += scrollAmount;

        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 1000+ Students</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">
            Why students trust <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-[#e66232]">Core Vision Overseas</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who chose and trusted Core Vision Overseas for discounts on tests,
            affordable universities, and exceptional study abroad guidance.
          </p>
        </div>

        {/* Reviews Scroll */}
        <div className="relative">

          {/* Auto-scroll indicator */}
          <div className="absolute -top-8 right-0 bg-white/90 px-3 py-1.5 rounded-full shadow-md text-xs font-medium text-gray-600 flex items-center gap-2 z-10">
            {isPaused ? (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
               
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                
              </>
            )}
          </div>

          <div
            ref={scrollRef}
            className={`overflow-x-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
              handleMouseUp();
              setIsPaused(false);
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onMouseEnter={() => setIsPaused(true)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 sm:gap-6 pb-4">
              {duplicatedReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-7 flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${review.color} mb-4 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300`}>
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div> */}

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 min-h-[100px] sm:min-h-[110px] italic">
                    {review.text}
                  </p>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 flex items-center gap-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${review.color} rounded-full blur-md opacity-40`}></div>
                      <img 
                        src={review.image} 
                        alt={review.author}
                        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-lg object-cover"
                        draggable="false"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br ${review.color} rounded-full border-2 border-white flex items-center justify-center`}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-gray-900 font-bold text-base sm:text-lg mb-1">
                        {review.author}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {review.location} • {review.date}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 font-medium">Verified Student</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         

        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
