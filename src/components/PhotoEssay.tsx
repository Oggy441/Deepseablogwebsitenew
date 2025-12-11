import { motion } from "motion/react";
import { X } from "lucide-react";

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
                <img src="https://images.unsplash.com/photo-1601488844122-ad4c59bba0be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmdsZXJmaXNoJTIwZ2xvd2luZyUyMGRhcmt8ZW58MXx8fHwxNzY0MTg0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Glowing anglerfish lure in darkness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Finding Nemo — Anglerfish</h3>
              <p className="text-blue-100/70">One of the most unforgettable scenes—pure fear, pure darkness. The deep ocean becomes a character, not just a place.</p>
            </div>

            {/* Story Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1761397967235-605296dd510b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwamVsbHlmaXNoJTIwZ2xvd2luZ3xlbnwxfHx8fDE3NjQxODQ3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Soft glowing pink jellyfish" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Jellyfish Forest</h3>
              <p className="text-blue-100/70">The ocean isn't only scary—its beauty is unreal. Light becomes its own language here.</p>
            </div>

            {/* Story Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1661623024491-0ce8223c606f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXRhbmljJTIwc2hpcHdyZWNrJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NjQxODQ3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Dark silhouette of the Titanic on seafloor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Titanic's Silence</h3>
              <p className="text-blue-100/70">The ocean doesn't erase history—it hides it in silence.</p>
            </div>

            {/* Story Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1672248389031-09d88005c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlciUyMGRlZXAlMjBibHVlJTIwdm9pZHxlbnwxfHx8fDE3NjQxODQ3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Lone diver in infinite blue-black emptiness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Thalassophobia</h3>
              <p className="text-blue-100/70">The scariest thing in the deep isn't a creature—it's the nothingness.</p>
            </div>

            {/* Story Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617718724572-c7dd48e5ef62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWFudCUyMG9jdG9wdXMlMjB0ZW50YWNsZXN8ZW58MXx8fHwxNzY0MTg0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Giant shadow with tentacles beneath ship" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">The Kraken</h3>
              <p className="text-blue-100/70">Every culture imagines a monster in the deep. The Kraken symbolizes everything we can't see but feel is there.</p>
            </div>

            {/* Story Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1707196208285-b071d4f97490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwcnVpbnMlMjBzdGF0dWVzfGVufDF8fHx8MTc2NDE4NDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Coral-covered ruins and statues" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Lost Underwater Cities</h3>
              <p className="text-blue-100/70">Underwater ruins feel like the ocean's way of protecting forgotten stories.</p>
            </div>

            {/* Story Image 7 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1639369483604-87274b03447a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5rZW4lMjBzaGlwJTIwdW5kZXJ3YXRlcnxlbnwxfHx8fDE3NjQxODQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Sunken ship with torn sails" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Ghost Ship</h3>
              <p className="text-blue-100/70">A shipwreck isn't frightening because of ghosts—it's frightening because it's alone.</p>
            </div>

            {/* Story Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1728612436236-19bbbb06f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1cmZhY2UlMjBzdGFyc3xlbnwxfHx8fDE3NjQxODQ3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Split shot of starry sky and deep-sea" className="w-full h-full object-cover" />
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
                <img src="https://images.unsplash.com/photo-1646318714677-eeea2bdf92d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwYmx1ZSUyMG9jZWFuJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzY0MTg0NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Blue water fading to darkness" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">We Can't See Through Water</h3>
              <p className="text-blue-100/70">Light disappears within a few hundred meters. Cameras can't map the deep—darkness wins.</p>
            </div>

            {/* Science Image 2 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1625425405800-be8054129584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBvY2VhbiUyMG1hcHBpbmd8ZW58MXx8fHwxNzY0MTg0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Satellite detecting water surface bulges" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Gravity Mapping</h3>
              <p className="text-blue-100/70">Satellites infer seafloor shape by measuring gravitational dips and bulges above underwater mountains and trenches.</p>
            </div>

            {/* Science Image 3 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1731512880317-1c84c85d2972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGZsb29yJTIwbWFwfGVufDF8fHx8MTc2NDE4NDcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="High-res Mars vs blurry ocean floor map" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Our Maps Are Blurry</h3>
              <p className="text-blue-100/70">Mars is mapped in 5 m detail. Earth's oceans? Nearly 1500 m per pixel—most of the map is guesswork.</p>
            </div>

            {/* Science Image 4 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1665979154697-ea0ba81cab3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjBwcmVzc3VyZXxlbnwxfHx8fDE3NjQxODQ3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Deep pressure comparison graphic" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Deep Pressure vs Space</h3>
              <p className="text-blue-100/70">At Titanic depth, pressure crushes metal instantly. The ocean is harsher than space.</p>
            </div>

            {/* Science Image 5 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1738502602077-0738750b1f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMG1hcCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NjQxODQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Hand-drawn colored seafloor map" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Marie Tharp's Hand-Drawn Maps</h3>
              <p className="text-blue-100/70">Tharp turned sonar numbers into the first real picture of the ocean floor—by hand.</p>
            </div>

            {/* Science Image 6 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568615354554-8328579fe87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb25hciUyMG1hcHBpbmclMjBzaGlwfGVufDF8fHx8MTc2NDE4NDczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Ship sending sonar beams down" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Sonar Is Slow</h3>
              <p className="text-blue-100/70">Sonar scans the seafloor one thin slice at a time. Mapping this way takes decades.</p>
            </div>

            {/* Science Image 7 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwcm9ib3QlMjBzdWJtYXJpbmV8ZW58MXx8fHwxNzY0MTg0NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="AUVs performing grid scanning" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Autonomous Ocean Robots</h3>
              <p className="text-blue-100/70">New robots map the ocean continuously—perfect workers for the abyss.</p>
            </div>

            {/* Science Image 8 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568482402099-d349245c213e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG9jZWFuJTIwbWFwfGVufDF8fHx8MTc2NDE4NDczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="World map with updated scanned areas" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">Seabed 2030 (2025 Data)</h3>
              <p className="text-blue-100/70">In 2017, only 6% was mapped. As of 2025, we've reached ~26% high-resolution mapping.</p>
            </div>

            {/* Science Image 9 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1735920865508-85a11c743eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwbW91bnRhaW5zJTIwdGVycmFpbnxlbnwxfHx8fDE3NjQxODQ3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Rugged underwater mountains and ravines" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-white mb-2">MH370 Terrain Discovery</h3>
              <p className="text-blue-100/70">The search revealed a landscape no one knew existed—proof of how incomplete our maps are.</p>
            </div>

            {/* Science Image 10 */}
            <div className="bg-white/5 border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
              <div className="rounded-xl aspect-[16/10] mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590530794437-ad29186f324f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZHJvbmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDE4NDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="AI-guided underwater drone" className="w-full h-full object-cover" />
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