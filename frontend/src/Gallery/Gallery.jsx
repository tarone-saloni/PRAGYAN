import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function AnimatedGallery() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const galleryPhotos = {
    stripOne: [
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg",
        name: "Kyoto",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg",
        name: "Halstatt",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg",
        name: "Peru",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg",
        name: "Rio",
      },
    ],
    stripTwo: [
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg",
        name: "Italy",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg",
        name: "Osaka",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg",
        name: "Bali",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg",
        name: "Paris",
      },
    ],
    stripThree: [
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg",
        name: "Cusco",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg",
        name: "Rome",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg",
        name: "Paris",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg",
        name: "Bali",
      },
    ],
    stripFour: [
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg",
        name: "Milan",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg",
        name: "Budapest",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg",
        name: "Vienna",
      },
      {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg",
        name: "Mexico",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        {/* Header Section */}
        <section className="pt-10 pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 bg-gradient-to-b from-white via-cyan-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-6 px-4 relative z-10">
          <div className="gallery-container">
            {/* Strip One */}
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip one">
                {galleryPhotos.stripOne.map((photo, index) => (
                  <div className="photo" key={index}>
                    <div className="photo__image">
                      <img src={photo.src} alt={photo.name} />
                    </div>
                    <div className="photo__name">{photo.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strip Two */}
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip two">
                {galleryPhotos.stripTwo.map((photo, index) => (
                  <div className="photo" key={index}>
                    <div className="photo__image">
                      <img src={photo.src} alt={photo.name} />
                    </div>
                    <div className="photo__name">{photo.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strip Three */}
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip three">
                {galleryPhotos.stripThree.map((photo, index) => (
                  <div className="photo" key={index}>
                    <div className="photo__image">
                      <img src={photo.src} alt={photo.name} />
                    </div>
                    <div className="photo__name">{photo.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strip Four */}
            <div className="gallery__strip__wrapper">
              <div className="gallery__strip four">
                {galleryPhotos.stripFour.map((photo, index) => (
                  <div className="photo" key={index}>
                    <div className="photo__image">
                      <img src={photo.src} alt={photo.name} />
                    </div>
                    <div className="photo__name">{photo.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for gallery animations */}
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          overflow: hidden;
          max-width: 1300px;
          margin: auto;
        }

        .gallery__strip {
          min-height: 100vh;
        }

        .gallery__strip__wrapper {
          flex: 0 0 100%;
          justify-content: flex-end;
          background: #222;
          border-right: 2px solid #333;
          position: relative;
        }

        @media (min-width: 500px) {
          .gallery__strip__wrapper {
            flex: 0 0 50%;
          }
        }

        @media (min-width: 950px) {
          .gallery-container {
            height: 100vh;
          }

          .gallery__strip__wrapper {
            flex: 0 0 25%;
          }

          .gallery__strip.one {
            animation: 60s move-it ease alternate infinite 5s;
            transform: translateY(2%);
          }

          .gallery__strip.three {
            animation: 70s move-it ease alternate infinite 6s;
            transform: translateY(2%);
          }

          .gallery__strip.two {
            animation: 58s move-it-2 ease alternate infinite 5s;
            transform: translateY(-50%);
          }

          .gallery__strip.four {
            animation: 65s move-it-2 ease alternate infinite 5.5s;
            transform: translateY(-50%);
          }

          .gallery__strip:hover {
            animation-play-state: paused;
          }
        }

        .photo {
          position: relative;
          text-align: right;
          padding-bottom: 3rem;
        }

        .photo__image img {
          width: 90%;
          transform: translateX(30%);
          transition: 1s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
        }

        .photo__name {
          text-transform: uppercase;
          font-size: 40px;
          letter-spacing: 2px;
          color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: white;
          margin-top: -25px;
          transition: 0.4s ease-in-out 0.4s;
          position: relative;
          width: 100%;
        }

        .photo:hover .photo__image img {
          transform: translateX(0%);
        }

        .photo:hover .photo__name {
          color: #fff;
        }

        @keyframes move-it {
          0%,
          90%,
          100% {
            transform: translateY(2%);
          }
          45% {
            transform: translateY(-50%);
          }
        }

        @keyframes move-it-2 {
          0%,
          90%,
          100% {
            transform: translateY(-50%);
          }
          45% {
            transform: translateY(5%);
          }
        }
      `}</style>
    </div>
  );
}

export default AnimatedGallery;