import { motion } from "motion/react";
import { X } from "lucide-react";
import anglerFish from "../Images/Angler-fish.jpg";
import deepPressure from "../Images/Deep-pressure.png";
import ghostShip from "../Images/ghost-ship.jpg";
import gravityMapping from "../Images/gravity-mapping.png";
import jellyfishForest from "../Images/jellyfish-forest.jpg";
import krakenSea from "../Images/kraken-sea.jpg";
import ladysMap from "../Images/ladys-map.jpg";
import lightNotEntering from "../Images/light-not-entering.jpg";
import lostCity from "../Images/lost-city.jpeg.jpg";
import marsOcean from "../Images/Mars-Ocean.png";
import seabed2030 from "../Images/Seabed-2030.png";
import sonarSlow from "../Images/Sonar-slow.png";
import thalassophobia from "../Images/Thalassophobia.jpg";
import titanicWreck from "../Images/titanic-wreck.jpg";
import Mirror from "../Images/mirror.png";
import Mapping from "../Images/AI-ocean.png";
interface PhotoEssayProps {
  onClose: () => void;
}

export function PhotoEssay({ onClose }: PhotoEssayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(5,10,20)] overflow-y-auto"
    >
      {/* Close Button */}
      <div className="fixed top-6 right-6 z-[80]">
        <button
          onClick={onClose}
          className="p-3 bg-black/30 hover:bg-black/50 rounded-full border border-cyan-400/30 transition-colors"
          aria-label="Close photo essay"
        >
          <X className="w-6 h-6 text-cyan-300" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl text-white mb-6 text-center"
        >
          Deep Sea: Stories & Science in Pictures
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-blue-100/90 mb-16 text-center max-w-3xl mx-auto leading-relaxed"
        >
          The ocean floor is a place where hard data meets human imagination. This visual essay for <span className="italic">DeepSea — Stories & Science</span> explores the abyss through two distinct lenses: the biological reality of the extreme depths and the enduring myths that darkness inspires. Welcome to a journey where hydrostatic pressure meets poetry.
        </motion.p>

        {/* SECTION A — STORIES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>
              STORIES: How the Deep Sea Feels to Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Story Image 1 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={anglerFish} alt="Glowing anglerfish lure in darkness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Finding Nemo — Anglerfish</h3>
              <p className="text-blue-100/70">One of the most unforgettable scenes—pure fear, pure darkness. The deep ocean becomes a character, not just a place.</p>
            </div>

            {/* Story Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishForest} alt="Soft glowing pink jellyfish" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Jellyfish Forest</h3>
              <p className="text-blue-100/70">The ocean isn't only scary—its beauty is unreal. Light becomes its own language here.</p>
            </div>

            {/* Story Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={titanicWreck} alt="Dark silhouette of the Titanic on seafloor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Titanic's Silence</h3>
              <p className="text-blue-100/70">The ocean doesn't erase history—it hides it in silence.</p>
            </div>

            {/* Story Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={thalassophobia} alt="Lone diver in infinite blue-black emptiness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Thalassophobia</h3>
              <p className="text-blue-100/70">The scariest thing in the deep isn't a creature—it's the nothingness.</p>
            </div>

            {/* Story Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={krakenSea} alt="Giant shadow with tentacles beneath ship" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Kraken</h3>
              <p className="text-blue-100/70">Every culture imagines a monster in the deep. The Kraken symbolizes everything we can't see but feel is there.</p>
            </div>

            {/* Story Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={lostCity} alt="Coral-covered ruins and statues" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Lost Underwater Cities</h3>
              <p className="text-blue-100/70">Underwater ruins feel like the ocean's way of protecting forgotten stories.</p>
            </div>

            {/* Story Image 7 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={ghostShip} alt="Sunken ship with torn sails" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Ghost Ship</h3>
              <p className="text-blue-100/70">A shipwreck isn't frightening because of ghosts—it's frightening because it's alone.</p>
            </div>

            {/* Story Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={Mirror} alt="Split shot of starry sky and deep-sea" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Mirror to Space</h3>
              <p className="text-blue-100/70">The deep sea feels like the night sky—endless, quiet, full of mysteries.</p>
            </div>
          </div>
        </motion.div>

        {/* SECTION B — SCIENCE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>
              SCIENCE: How We See the Deep Sea
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Science Image 1 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={lightNotEntering} alt="Blue water fading to darkness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">We Can't See Through Water</h3>
              <p className="text-blue-100/70">Light disappears within a few hundred meters. Cameras can't map the deep—darkness wins.</p>
            </div>

            {/* Science Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={gravityMapping} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Gravity Mapping</h3>
              <p className="text-blue-100/70">Satellites infer seafloor shape by measuring gravitational dips and bulges above underwater mountains and trenches.</p>
            </div>

            {/* Science Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={marsOcean} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Our Maps Are Blurry</h3>
              <p className="text-blue-100/70">Mars is mapped in 5 m detail. Earth's oceans? Nearly 1500 m per pixel—most of the map is guesswork.</p>
            </div>

            {/* Science Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={deepPressure} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Deep Pressure vs Space</h3>
              <p className="text-blue-100/70">At Titanic depth, pressure crushes metal instantly. The ocean is harsher than space.</p>
            </div>

            {/* Science Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={ladysMap} alt="Hand-drawn colored seafloor map" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Marie Tharp's Hand-Drawn Maps</h3>
              <p className="text-blue-100/70">Tharp turned sonar numbers into the first real picture of the ocean floor—by hand.</p>
            </div>

            {/* Science Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={sonarSlow} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Sonar Is Slow</h3>
              <p className="text-blue-100/70">Sonar scans the seafloor one thin slice at a time. Mapping this way takes decades.</p>
            </div>

            {/* Science Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={seabed2030} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Seabed 2030 (2025 Data)</h3>
              <p className="text-blue-100/70">In 2017, only 6% was mapped. As of 2025, we've reached ~26% high-resolution mapping.</p>
            </div>

            {/* Science Image 10 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={Mapping} alt="AI-guided underwater drone" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Future of Mapping — AI</h3>
              <p className="text-blue-100/70">Next-gen AUVs will detect unusual shapes automatically, speeding up exploration dramatically.</p>
            </div>
          </div>
        </motion.div>

        {/* OUTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center py-12"
        >
          <p className="text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
            The deep sea isn't just difficult to reach—it's difficult to even see. Satellites, sonar, robots, and soon AI are revealing a world more complex than we imagined. Every new scan sharpens the picture. Every pixel brings the unknown into focus.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
