import { motion } from "motion/react";
import { X } from "lucide-react";
import jellyfishImage from "figma:asset/80c4bd59da08a695f3f68241adf4aa8a1e260f36.png";

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

        {/* SECTION A — SCIENCE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>
              Science
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Science Image 1 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Bioluminescent Jellyfish" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Bioluminescence in the Bathypelagic Zone</h3>
              <p className="text-blue-100/70">In the total absence of sunlight, creatures evolve to create their own light to attract prey or find mates in the dark.</p>
            </div>

            {/* Science Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Hydrothermal Vent with Tube Worms" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Hydrothermal Vents</h3>
              <p className="text-blue-100/70">Driven by volcanic heat, these vents support ecosystems through chemosynthesis.</p>
            </div>

            {/* Science Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Whale Skeleton on Ocean Floor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Whale Fall Ecosystem</h3>
              <p className="text-blue-100/70">A whale's sinking body forms a pop-up ecosystem that lasts decades.</p>
            </div>

            {/* Science Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Japanese Spider Crab" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Abyssal Gigantism</h3>
              <p className="text-blue-100/70">Extreme pressure and cold drive some deep-sea animals to enormous sizes.</p>
            </div>

            {/* Science Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Marine Snow Particles" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Marine Snow</h3>
              <p className="text-blue-100/70">Falling organic matter feeds the scavengers of the deep.</p>
            </div>

            {/* Science Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Underwater Brine Pool" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Brine Pools</h3>
              <p className="text-blue-100/70">Toxic brine pools support unique life powered by methane-eating bacteria.</p>
            </div>

            {/* Science Image 7 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Mariana Trench 3D Map" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Hadal Zone Topography</h3>
              <p className="text-blue-100/70">The Hadal zone plunges down to nearly 11,000 meters.</p>
            </div>

            {/* Science Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="ROV Submersible" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">ROV Exploration</h3>
              <p className="text-blue-100/70">ROVs explore places too deep and too pressurized for humans.</p>
            </div>
          </div>
        </motion.div>

        {/* SECTION B — STORIES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-24"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}>
              Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Story Image 1 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Sailboat Above Sea Monster Shadow" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Leviathan</h3>
              <p className="text-blue-100/70">Ancient sailors imagined monsters lurking just below the surface.</p>
            </div>

            {/* Story Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Sunken Ruins" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Sunken City</h3>
              <p className="text-blue-100/70">Atlantis symbolizes our desire to find lost worlds beneath the waves.</p>
            </div>

            {/* Story Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Mysterious Figure in Water" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Siren's Call</h3>
              <p className="text-blue-100/70">The ocean is personified as a beautiful but dangerous force.</p>
            </div>

            {/* Story Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Ghost Ship in Fog" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Ghost Ship</h3>
              <p className="text-blue-100/70">Shipwrecks become silent time capsules of forgotten tragedies.</p>
            </div>

            {/* Story Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Lone Diver in Abyss" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Thalassophobia</h3>
              <p className="text-blue-100/70">The deep sea evokes fear of isolation and the unknown.</p>
            </div>

            {/* Story Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Glowing Eyes in Darkness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Guardian of the Trench</h3>
              <p className="text-blue-100/70">Myths warn that the deepest places are watched by ancient beings.</p>
            </div>

            {/* Story Image 7 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Treasure Chest with Gold" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Treasure</h3>
              <p className="text-blue-100/70">The ocean keeps the secrets of fortunes lost to storms.</p>
            </div>

            {/* Story Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src={jellyfishImage} alt="Ocean/Sky Mirror" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Mirror</h3>
              <p className="text-blue-100/70">The sea mirrors the mystery of outer space.</p>
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
            Whether viewed through a microscope or a myth, the deep sea remains our planet's final frontier. It challenges our scientific understanding while fueling our oldest folklore and dreams. The abyss is not just a location; it is a canvas for discovery and wonder.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}