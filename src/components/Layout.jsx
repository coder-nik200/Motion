import React, { useState } from "react";
import { motion } from "motion/react";

const Layout = () => {
  const [current, setCurrent] = useState(null);

  const Card = [
    {
      descripiton: "Arijit Singh",
      title: "Dharkhast",
      src: "https://imgs.search.brave.com/SlswHHuq-5tJkQ1kmuJNIoDRjQTSibLhfSMXelgMa14/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvejhrM3lkMUty/eC84azN5TzhhNWJy/L3NpemVfbS5qcGc",
      ctaText: (
        <button className="px-5 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Play
        </button>
      ),
      content: () => {
        return (
          <p className="text-[12px] text-neutral-500">
            Arijit Singh is one of the most loved and influential playback
            singers in Indian music, known for his soulful voice, emotional
            depth, and versatility. He has become the voice of modern romance
            and heartbreak in Bollywood.
          </p>
        );
      },
    },
    {
      descripiton: "Lana del rey",
      title: "Cinnamon girl",
      src: "https://imgs.search.brave.com/ZUa08iMGoFXR3ujpSiE_MgXHKs8XpGw52EYjc9swi64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hpY2gtaW1hZ2Ut/b2YtbGFuYS1kZWwt/cmV5LWlzLXRoZS1t/b3N0LWltcHJlc3Np/dmUtdG8teW91LXYw/LWo2Y3dsdTBsZmoy/ZDEuanBlZz93aWR0/aD03MzAmZm9ybWF0/PXBqcGcmYXV0bz13/ZWJwJnM9YTI3MDkx/NmQ2ZmI0OGFiODI3/ZmNlNzIzMTRjN2Qy/NWFiOTM2YjkyYQ",
      ctaText: (
        <button className="px-5 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Play
        </button>
      ),
      content: () => {
        return (
          <p className="text-[12px] text-neutral-500">
            Lana Del Rey is an American singer-songwriter known for her dreamy,
            melancholic music and cinematic storytelling. Her songs often
            explore themes of love, loss, nostalgia, fame, and emotional
            vulnerability, wrapped in a vintage, poetic aesthetic.
          </p>
        );
      },
    },
    {
      descripiton: "The Weeknd",
      title: "Less than zero",
      src: "https://imgs.search.brave.com/teudWRXQRJXBmzp_p7n07wSEGYbi84R9S_QdUrcrUQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2UwL1RoZV9XZWVr/bmRfKDI1MzY2MjEy/OSkuanBlZw",
      ctaText: (
        <button className="px-5 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Play
        </button>
      ),
      content: () => {
        return (
          <p className="text-[12px] text-neutral-500">
            The Weeknd is a globally famous Canadian singer, songwriter, and
            producer, known for his smooth voice, dark themes, and futuristic
            R&B-pop sound. His music often explores love, heartbreak,
            loneliness, fame, and self-destruction, making it deeply emotional
            and relatable.
          </p>
        );
      },
    },
    {
      descripiton: "Vishal Mishra",
      title: "Pehle Bhi Main",
      src: "https://imgs.search.brave.com/motYrCN_QCzsZ26TVl3TSNvIBmal4BDoR_H-OLBqGFQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL1Zpc2hh/bF9NaXNocmFfMDA1/XzIwMjUxMTIwMDg1/MzE2XzUwMHg1MDAu/anBn",
      ctaText: (
        <button className="px-5 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Play
        </button>
      ),
      content: () => {
        return (
          <p className="text-[12px] text-neutral-500">
            Vishal Mishra is a popular Indian singer, composer, and lyricist
            known for his deeply emotional, soulful, and heart-touching songs.
            His music often expresses pure love, pain, separation, and longing,
            which makes him especially loved by romantic-melody listeners.
          </p>
        );
      },
    },
    {
      descripiton: "Cold Play",
      title: "Clocks",
      src: "https://imgs.search.brave.com/ZvoSAeE95zAR-UCghI9cnizUd4zdxErGqiDioyiiOoI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL2FydGlz/dC9tbjAwMDA3NzU4/NzcvNDAwL2lDSVlJ/NWh1WE9QalU0bVFn/eE1qSWxXbmJFTjVm/Q2ppZnJvNnhoSUJ1/QjQ9LmpwZw",
      ctaText: (
        <button className="px-5 py-2 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
          Play
        </button>
      ),
      content: () => {
        return (
          <p className="text-[12px] text-neutral-500">
            Coldplay is a world-famous British rock band known for their
            emotional, uplifting, and atmospheric music. Their songs often talk
            about love, hope, loss, unity, and self-reflection, which makes them
            loved by people of all ages across the world.
          </p>
        );
      },
    },
  ];
  return (
    <>
      <div className="py-10 min-h-screen bg-gray-100 relative">
        {current && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              onClick={() => setCurrent(null)}
              className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              layoutId={`card-${current.title}`}
              className="h-[550px] w-72 fixed inset-0 z-20 m-auto bg-white rounded-2xl border border-neutral-200 p-4 shadow-xl"
            >
              <motion.img
                layoutId={`card-image${current.title}`}
                src={current.src}
                alt={current.title}
                className="h-60 w-full object-cover rounded-xl"
              />

              <div className="mt-4 flex flex-col gap-3 items-center">
                <div className="text-center">
                  <motion.h2
                    layoutId={`card-title-${current.title}`}
                    className="text-sm font-bold text-black"
                  >
                    {current.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`card-description-${current.title}`}
                    className="text-xs text-neutral-500"
                  >
                    {current.descripiton}
                  </motion.p>
                </div>

                <motion.div layoutId={`card-cta-${current.title}`}>
                  {current.ctaText}
                </motion.div>
              </div>

              <motion.div
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-4 h-40 overflow-auto text-center px-2"
              >
                {current.content()}
              </motion.div>
            </motion.div>
          </>
        )}

        <div className="max-w-lg mx-auto flex flex-col gap-6">
          {Card.map((card) => (
            <motion.div
              layoutId={`card-${card.title}`}
              key={card.title}
              onClick={() => setCurrent(card)}
              className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
            >
              <div className="flex gap-4 items-center">
                <motion.img
                  layoutId={`card-image-${card.title}`}
                  src={card.src}
                  alt={card.title}
                  className="h-14 aspect-square rounded-xl"
                />

                <div className="flex flex-col items-start gap-1">
                  <motion.h2
                    layoutId={`card-title-${card.title}`}
                    className="text-xs font-bold text-black"
                  >
                    {card.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`card-description-${card.title}`}
                    className="text-[10px] text-neutral-500"
                  >
                    {card.descripiton}
                  </motion.p>
                </div>
              </div>

              <motion.div layoutId={`card-cta-${card.title}`}>
                {card.ctaText}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Layout;
