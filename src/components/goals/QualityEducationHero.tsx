import Link from 'next/link';

const QualityEducationHero = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="bg-[#c31c2d] h-[calc(100vh)] min-h-[500px] pt-24 flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left Content */}
            <div className="mb-8 md:mb-0 text-center">
              <h1 className="text-9xl sm:text-[10rem] font-bold text-white mb-0 leading-none title-font">
                4
              </h1>
              <div className="text-white text-3xl sm:text-5xl font-bold uppercase mb-6 title-font">
                NİTELİKLİ<br />EĞİTİM
              </div>
              <p className="text-white max-w-md mb-6">
                Kapsayıcı ve eşitlikçi nitelikli eğitimi sağlamak ve herkes için yaşam boyu öğrenme fırsatlarını teşvik etmek.
              </p>
              <Link
                href="#learn-more"
                className="inline-flex items-center text-white hover:underline"
              >
                <span className="mr-2">Daha fazla bilgi</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Anchor for smooth scroll */}
      <div id="learn-more" className="-mt-24 pt-24"></div>
    </div>
  );
};

export default QualityEducationHero;
