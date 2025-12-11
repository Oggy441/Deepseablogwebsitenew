import { useEffect, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { Hero } from "./components/Hero";
import { BlogPost } from "./components/BlogPost";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { PhotoEssay } from "./components/PhotoEssay";
import { BlogEntriesPage } from "./components/BlogEntriesPage";
import { IndividualBlogEntry } from "./components/IndividualBlogEntry";
import { Waves, Anchor, X, BookOpen, Camera } from "lucide-react";
import { blogPostsContent } from "./data/blogPostsContent";

// Organized by ocean depth zones
const depthZones = [
  {
    name: "Sunlight Zone",
    depthRange: "0-200m",
    fact: "The Epipelagic Zone - where 90% of marine life exists and photosynthesis occurs",
    posts: [
      {
        title: "Coral Reefs: Underwater Rainforests",
        excerpt:
          "Despite covering less than 1% of the ocean floor, coral reefs support 25% of all marine species. These vibrant ecosystems are intricate partnerships between coral polyps and algae, thriving in shallow tropical waters.",
        image:
          "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBmaXNofGVufDF8fHx8MTc2MjYxMDMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Neeraj",
        roll: "CO25343",
        date: "Nov 18, 2025",
      },
      {
        title: "Sea Turtles: Navigators of the Surface Waters",
        excerpt:
          "These ancient mariners spend most of their time in the sunlight zone, surfacing regularly to breathe. Using Earth's magnetic field, they navigate thousands of miles to return to the exact beaches where they were born.",
        image:
          "https://images.unsplash.com/photo-1549557143-90d216195a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWElMjB0dXJ0bGUlMjBvY2VhbnxlbnwxfHx8fDE3NjI2MTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Rehan Ansari",
        roll: "CO25343",
        date: "Nov 12, 2025",
      },
      {
        title: "Plankton: The Foundation of Ocean Life",
        excerpt:
          "These microscopic organisms drift through the sunlit waters, forming the base of the marine food web. Phytoplankton produce more oxygen than all terrestrial plants combined, making them vital for life on Earth.",
        image:
          "https://images.unsplash.com/photo-1727373235151-942ac24b9a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHBsYW5rdG9ufGVufDF8fHx8MTc2MjYxMTA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Manan Sharma",
        roll: "CO25343",
        date: "Nov 9, 2025",
      },
    ],
  },
  {
    name: "Twilight Zone",
    depthRange: "200-1,000m",
    fact: "The Mesopelagic Zone - dim blue light fades to darkness, home to the largest animal migration on Earth",
    posts: [
      {
        title: "The Twilight Zone: Where Light Meets Darkness",
        excerpt:
          "At 200-1000 meters deep, this is where sunlight begins to fade into perpetual twilight. Strange creatures have evolved unique adaptations to survive where only faint blue light penetrates. Here, the daily vertical migration of billions of fish and zooplankton creates the largest movement of animals on the planet.",
        image:
          "https://images.unsplash.com/photo-1631001310285-64f0d5f06a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc2VhJTIwb2NlYW58ZW58MXx8fHwxNzYyNjEwMzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Ojas",
        roll: "CO25343",
        date: "Nov 15, 2025",
        featured: true,
      },
      {
        title: "Whales: Deep Diving Giants",
        excerpt:
          "Sperm whales regularly dive to depths of 600-1000 meters, holding their breath for up to 90 minutes as they hunt giant squid in the twilight zone. Their ability to withstand crushing pressure and navigate in near-total darkness is extraordinary.",
        image:
          "https://images.unsplash.com/photo-1530099531892-0932c5324757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGFsZSUyMG9jZWFufGVufDF8fHx8MTc2MjYxMTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Neeraj",
        roll: "CO25343",
        date: "Nov 19, 2025",
        featured: true,
      },
      {
        title: "Jellyfish: Masters of the Mesopelagic",
        excerpt:
          "These ethereal creatures thrive in the twilight zone, where their transparent bodies help them avoid predators. Some species grow to enormous sizes in these depths, with tentacles extending over 30 meters.",
        image:
          "https://images.unsplash.com/photo-1677396105034-06ba797233bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwamVsbHlmaXNofGVufDF8fHx8MTc2MjYxMDMxMnww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Manan Sharma",
        roll: "CO25343",
        date: "Nov 10, 2025",
      },
    ],
  },
  {
    name: "Midnight Zone",
    depthRange: "1,000-4,000m",
    fact: "The Bathypelagic Zone - complete darkness, bioluminescence is the only light",
    posts: [
      {
        title: "Bioluminescence: Nature's Light Show",
        excerpt:
          "In the complete darkness of the midnight zone, many organisms create their own light through chemical reactions. This serves multiple purposes: attracting prey, finding mates, and deterring predators. Over 90% of life here produces light.",
        image:
          "https://images.unsplash.com/photo-1550998095-2c11477f02a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sdW1pbmVzY2VudCUyMG9jZWFufGVufDF8fHx8MTc2MjYxMDMxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Kulraj Singh",
        roll: "CO25343",
        date: "Nov 14, 2025",
      },
      {
        title: "Giant Squid: Legends of the Deep",
        excerpt:
          "These elusive creatures inhabit the midnight zone, growing up to 13 meters long. With eyes the size of dinner plates and eight arms plus two longer tentacles, they're perfectly adapted for hunting in total darkness.",
        image:
          "https://images.unsplash.com/photo-1602448059696-9ee76cedfdc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcXVpZCUyMHVuZGVyd2F0ZXJ8ZW58MXx8fHwxNzYyNjExMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Ojas",
        date: "Nov 11, 2025",
      },
      {
        title: "Anglerfish: Luring in the Dark",
        excerpt:
          "The deep-sea anglerfish uses a bioluminescent lure to attract prey in the midnight zone. Females can grow to 60 cm, while males are tiny parasites that fuse to their mate's body permanently.",
        image:
          "https://images.unsplash.com/photo-1761079398347-73994f7bb837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZWVwJTIwc2VhJTIwYW5nbGVyZmlzaHxlbnwxfHx8fDE3NjI2MTEwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Neeraj",
        roll: "CO25343",
        date: "Nov 16, 2025",
      },
    ],
  },
  {
    name: "Abyssal Zone",
    depthRange: "4,000-6,000m",
    fact: "The Abyssopelagic Zone - freezing temperatures, pressure 400x surface level",
    posts: [
      {
        title: "The Abyssal Plain: Earth's Final Frontier",
        excerpt:
          "At depths of 4,000-6,000 meters, the abyssal plain is a vast, flat expanse covering more than half of Earth's surface. Pressure reaches 400 times that at sea level, temperatures hover near freezing, and food is incredibly scarce.",
        image:
          "https://images.unsplash.com/photo-1574377112212-fa04d63f5e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjBhYnlzc3xlbnwxfHx8fDE3NjI2MTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Manan Sharma",
        roll: "CO25343",
        date: "Nov 13, 2025",
      },
      {
        title: "Abyssal Life: Surviving the Extremes",
        excerpt:
          "Life in the abyssal zone has adapted to extreme conditions. Sea cucumbers, brittle stars, and specialized fish survive on marine snow - organic debris drifting down from above. Metabolism is incredibly slow to conserve energy.",
        image:
          "https://images.unsplash.com/photo-1631001310285-64f0d5f06a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc2VhJTIwb2NlYW58ZW58MXx8fHwxNzYyNjEwMzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Kulraj Singh",
        roll: "CO25343",
        date: "Nov 8, 2025",
      },
    ],
  },
  {
    name: "Hadal Zone",
    depthRange: "6,000-11,000m",
    fact: "The deepest ocean trenches - pressure over 1,000x surface level, home to unique extremophiles",
    posts: [
      {
        title: "The Mariana Trench: Deepest Point on Earth",
        excerpt:
          "At 10,994 meters, the Challenger Deep in the Mariana Trench is the deepest known point in Earth's oceans. The pressure here is over 1,000 times atmospheric pressure at sea level - equivalent to 50 jumbo jets stacked on top of you.",
        image:
          "https://images.unsplash.com/photo-1714459821466-c19a3928f4f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHRyZW5jaHxlbnwxfHx8fDE3NjI2MTEwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Ojas",
        roll: "CO25343",
        date: "Nov 17, 2025",
      },
      {
        title: "Deep Submersibles: Exploring the Hadal Zone",
        excerpt:
          "Only specially designed submersibles can reach hadal depths. These engineering marvels withstand crushing pressures to reveal a world of amphipods, snailfish, and other creatures that thrive in Earth's most extreme environment.",
        image:
          "https://images.unsplash.com/photo-1622374634342-fd08ced47ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJtYXJpbmUlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc2MjYxMTA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Manan Sharma",
        roll: "CO25343",
        date: "Nov 20, 2025",
      },
      {
        title: "Hadal Snailfish: Life at the Bottom",
        excerpt:
          "The Mariana snailfish holds the record for the deepest living fish, found at depths over 8,000 meters. Its gelatinous body and lack of swim bladder are perfect adaptations for life under extreme pressure.",
        image:
          "https://images.unsplash.com/photo-1574377112212-fa04d63f5e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjBhYnlzc3xlbnwxfHx8fDE3NjI2MTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        author: "Rehan Ansari",
        roll: "CO25343",
        date: "Nov 7, 2025",
      },
    ],
  },
];

function App() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPhotoEssay, setShowPhotoEssay] = useState(false);
  const [showBlogEntriesPage, setShowBlogEntriesPage] = useState(false);
  const [selectedBlogEntry, setSelectedBlogEntry] = useState<string | null>(null);
  const [notes] = useState([
    {
      id: 1,
      author: "Neeraj",
      title: "Color Transitions Implementation",
      text: "Great work on the deep sea theme! The color transitions are perfect.",
      date: "Nov 10, 2025",
      fullContent:
        "I'm really impressed with how the color transitions flow smoothly as users scroll through the page. The gradient from light ocean blue at the surface to almost black in the hadal zone creates an incredibly immersive experience. The transition feels natural and helps users understand the depth progression. The use of Motion's useTransform hook was the perfect choice for this effect. One thing I particularly appreciate is how the colors match actual ocean depth characteristics - it's both aesthetically pleasing and educationally accurate. This sets a strong foundation for the entire project.",
    },
    {
      id: 2,
      author: "Rehan Ansari",
      title: "The Calm, the Fear, and the Space Beneath Us",
      // Short excerpt for the list view
      text: "The deep sea is fascinating because of the contrast between the surface's calmness and the world-changing darkness, pressure, and fear a few hundred meters below.",
      date: "Nov 9, 2025",
      // Full content for the detail modal
      fullContent: `The deep sea pulls me in for one simple reason: it looks calm, but everything about it feels wrong in the best way possible. It’s beautiful, silent, and peaceful on the surface — but the moment you go deeper, the entire world changes. Darkness replaces color, pressure replaces safety, and suddenly the ocean feels less like water and more like empty space. That contrast is what fascinates me: calmness on the outside, fear just a few hundred meters below.

A lot of this obsession comes from movies. Avatar 2 captured underwater visuals better than anything I’ve ever seen — glowing creatures drifting in the dark, wide shots that looked endless, and movements that felt too natural to be CGI. Then I read about James Cameron actually diving into the Mariana Trench alone. The man literally dropped into the deepest place on Earth in a capsule slightly bigger than a chair. That image stuck with me. And even though Titanic isn’t a deep-sea movie, as a kid those scenes of the wreck sitting quietly in the dark absolutely terrified me. The ocean doesn’t shout or roar — it hides.

Kurzgesagt’s deep sea video pushed my interest even further. That slow, animated descent kept going deeper and deeper until it reached the trench’s bottom… and there was a plastic bag lying there. A reminder that humans have left trash in a place we can’t even physically reach. Same with the lake under Antarctica — an entire world sealed off from the planet for millions of years. Stuff like that reminds me how much is happening on Earth that we aren’t even close to understanding.

I haven’t played Subnautica, but I’ve watched enough streams to get the feeling. The moment players leave the safe shallows and swim into black water, the entire atmosphere changes. It’s calm until it’s not. Peace until panic. That transition is exactly why the deep sea feels more mysterious than space. Only 5% of it is explored, and honestly, the unknown parts look more alien than anything NASA has shown us.

To me, the deep sea feels like a mix of mythology and science. Leviathans, krakens, giant silhouettes — all those creatures from stories make more sense down there than on land. But the truth is, real deep-sea animals already look more unreal than the mythical ones. Nature doesn’t need our imagination. It’s already built things we couldn’t come up with.

And personally, I feel this: we want to explore the deep sea, but some part of me thinks it’s better that we can’t. Not because it’s “dangerous,” but because maybe it’s not meant to be fully revealed. We can send robots to Mars, but a few kilometers of water crushes us like nothing. It’s ironic, but also kind of poetic.

The deep sea is Earth’s own version of space — familiar yet unreachable, calming yet horrifying, beautiful yet unknowable. And honestly, maybe that’s exactly why it fascinates me so much.`,
    },
    {
      id: 3,
      author: "Kulraj Singh",
      title: "Deepsea",
      // Short excerpt for the list view
      text: "The deep sea is a mysterious world beginning at 200m, characterized by complete darkness, high pressure, and unique life forms like glowing jellyfish and fish with huge teeth.",
      date: "Nov 8, 2025",
      // Full content for the detail modal
      fullContent: `I've always known that most of the Earth is covered by water, but only recently I started wondering what actually exists far below the surface. The deep sea feels mysterious and even a little scary — a whole world that's right here on our planet but still almost completely hidden from us. Humans have explored mountains, skies, even space… but the deep ocean is still mostly unknown.

From watching YouTube channels like Gaurav Kate, GetSetFly Science and Dhruv Rathee, I learned that the deep sea begins where sunlight can no longer reach — around 200 meters below the surface. After that point, everything changes. It's pitch dark, freezing cold, and the pressure becomes strong enough to crush a normal submarine. And yet, somehow, life still survives there. Strange creatures glow in the dark, some have huge teeth, some look transparent, and scientists keep discovering new species every year. It honestly feels like an alien world that just happens to be underwater.

Something that surprised me is how important the deep sea is for the whole planet. It helps control Earth's temperature, stores carbon dioxide, and supports global climate systems. So even though most of us will never see it, it affects our lives every day.

I still don't know a lot, but the more I learn about the deep sea, the more I want to go deeper into its mysteries. There's something exciting about knowing that the world still has places we haven't fully understood.`,
    },
    {
      id: 4,
      author: "Ojas",
      title: "The unknown depth",
      // Short excerpt for the list view
      text: "The deep sea is similar to an imaginary world with dark creatures and unique facts, making me curious about the high pressure and absence of light.",
      date: "Nov 7, 2025",
      // Full content for the detail modal
      fullContent: `The Unknown Depth

The deep sea caught my interest because it feels exactly like the kind of imaginary world filled with dark creatures, strange shapes, and unbelievable facts. The more I learn about it, the more my curiosity grows. It's one of those places where every new detail makes you want to know ten more.

I first got into deep-sea content through YouTube videos, and those videos opened up a completely different side of nature for me. Unlike forests or deserts — which we see often — the deep sea is full of facts that feel unique and almost unreal. I learned how extreme pressure at those depths changes the shape of animals, how some creatures survive without sunlight, and how the ocean turns into complete darkness after a certain point.

The deep sea makes me curious about the creatures living in it — even the creepy ones. Yes, some of them look scary, but that fear also makes the whole thing more interesting. It's rare to find a place on Earth where we genuinely don't know what's hiding out there, and that mystery is what pulls me in.`,
    },
    {
      id: 5,
      author: "Manan Sharma",
      title: "Where the Light Ends and the Unknown Begins",
      text: "The deep sea has always felt like the most mysterious place on Earth. I didn't learn about it from textbooks — it was movies, reels, and documentary clips that showed me a world that becomes stranger the deeper you go.",
      date: "Nov 6, 2025",
      fullContent: `The deep sea has always felt like the most mysterious place on Earth. I didn't learn about it from textbooks — it was movies, reels, and documentary clips that showed me a world that becomes stranger the deeper you go. That mix of fear, curiosity, and thrill is what pulled me in from the start.

There's something cinematic about the moment sunlight fades underwater. One second it's normal ocean water, and the next it feels like you've entered another world. No color, no sound, just darkness and the unknown. It reminds me of outer space, but more unsettling because it's right here on our planet. The idea that such a huge part of Earth looks like an alien world is what makes it so fascinating to me.

One fact that never leaves my mind is that only 5% of the ocean has been explored. We know more about distant planets than the deep sea beneath us. That's honestly crazy. It makes me feel like the ocean is hiding things on purpose — things we're not ready to see yet.

And then there are the creatures. The weird animals from the deep don't even look real. Some glow, some are transparent, some have shapes that look impossible. They're the perfect example of how strange nature can get when it's left alone in darkness for millions of years. Every time I see a new creature online, it makes me wonder how many more exist that we haven't discovered.

Sometimes the deep sea feels like a mix between imagination and reality. It looks like the kind of place you'd expect in a sci-fi movie, but it's completely real. That's probably why it keeps pulling me back. The fear makes it exciting, and the mystery makes it unforgettable.

The deep sea doesn't reveal much, but the little it shows is enough to keep us hooked. And maybe that's exactly why it feels so powerful — because it remains an unknown world we're still trying to understand.`,
    },
  ]);

  // Color transitions based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.7, 1],
    [
      "rgb(14, 116, 144)", // Light ocean blue (surface)
      "rgb(12, 74, 110)", // Medium blue (twilight)
      "rgb(11, 47, 88)", // Deep blue (midnight)
      "rgb(10, 25, 47)", // Very dark blue (abyss)
      "rgb(5, 10, 20)", // Almost black (hadal)
    ],
  );

  // Generate bubble configurations once to prevent flickering
  const bubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      xMovement: (Math.random() - 0.5) * 100,
    }));
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on(
      "change",
      (latest) => {
        setScrollProgress(latest);
      },
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Calculate current depth in meters (0-11000m)
  const currentDepthMeters = Math.round(scrollProgress * 11000);

  // Determine current zone based on depth
  const getCurrentZone = () => {
    if (currentDepthMeters < 200) return depthZones[0];
    if (currentDepthMeters < 1000) return depthZones[1];
    if (currentDepthMeters < 4000) return depthZones[2];
    if (currentDepthMeters < 6000) return depthZones[3];
    return depthZones[4];
  };

  const currentZone = getCurrentZone();

  return (
    <>
      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen"
      >
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 relative">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                  className="hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Open menu"
                >
                  <Waves className="w-8 h-8 text-cyan-300" />
                </button>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(10,25,47)] border border-cyan-400/30 rounded-xl shadow-2xl overflow-hidden z-[100]"
                    >
                      <button
                        onClick={() => {
                          setShowPhotoEssay(false);
                          setShowBlogEntriesPage(true);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/10 transition-colors text-cyan-300 hover:text-cyan-200"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Blog Entries</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowPhotoEssay(true);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-white/10 transition-colors text-cyan-300 hover:text-cyan-200"
                      >
                        <Camera className="w-4 h-4" />
                        <span>Photo Essay</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-xl text-white">
                Ocean Labs
              </span>
            </div>

            {/* Depth indicator */}
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-cyan-300">
                  {currentDepthMeters.toLocaleString()}m
                </div>
                <div className="hidden md:block text-xs text-blue-200/60">
                  {currentZone.depthRange}
                </div>
              </div>
              <div className="w-24 md:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400"
                  style={{ scaleX: scrollProgress }}
                  initial={{ scaleX: 0 }}
                />
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <Hero />

        {/* Blog Posts Sections - Organized by Depth */}
        {depthZones.map((zone, zoneIndex) => (
          <div
            key={zoneIndex}
            className="relative z-10 max-w-6xl mx-auto px-6 py-24"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-4"
              >
                <span className="text-sm text-cyan-300">
                  {zone.depthRange}
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl text-white mb-3">
                {zone.name}
              </h2>
              <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
                {zone.fact}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {zone.posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className={
                    post.featured ? "md:col-span-1" : ""
                  }
                >
                  <BlogPost
                    {...post}
                    delay={index * 0.1}
                    featured={post.featured}
                    onClick={() => setSelectedPost(post)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 mt-32">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
              <div className="flex items-center gap-2">
                <Anchor className="w-6 h-6 text-cyan-300" />
                <span className="text-white">
                  OceanLabs
                </span>
              </div>
              <p className="text-blue-200/60 text-sm text-center">
                © 2025 OceanLabs — Exploring the depths from surface to trench.
              </p>
            </div>
          </div>
        </footer>
      </motion.div>

      {/* Ambient bubbles effect - independent of scroll */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/10"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              bottom: -50,
            }}
            animate={{
              // FIX: Replaced -window.innerHeight - 100 with a large static value to prevent re-renders
              y: [-50, -1200], 
              x: [0, bubble.xMovement],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Blog Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <BlogPostDetail
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>

      {/* Notes Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(10,25,47)] border-l border-cyan-400/30 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-400/20">
                  <div>
                    <h2 className="text-2xl text-white mb-1">
                      Individual Notes
                    </h2>
                    <p className="text-sm text-cyan-300/70">
                      Team collaboration space
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5 text-cyan-300" />
                  </button>
                </div>

                {/* Notes List */}
                <div className="space-y-3">
                  {notes.map((note) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => setSelectedNote(note)}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-cyan-400/50 hover:bg-white/10 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                          {note.author}
                        </span>
                        <span className="text-xs text-blue-200/50">
                          {note.date}
                        </span>
                      </div>
                      <p className="text-sm text-blue-100/80 line-clamp-2">
                        {note.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Note Detail Modal */}
      <AnimatePresence>
        {selectedNote && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-gradient-to-b from-[rgb(11,47,88)] to-[rgb(10,25,47)] rounded-2xl border border-cyan-400/30 shadow-2xl z-[60] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-cyan-400/20">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-cyan-300">
                      {selectedNote.author}
                    </span>
                    <span className="text-xs text-blue-200/50">
                      {selectedNote.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl text-white">
                    {selectedNote.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Close note"
                >
                  <X className="w-6 h-6 text-cyan-300" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-3xl">
                  <p className="text-lg text-blue-100/90 leading-relaxed whitespace-pre-line">
                    {selectedNote.fullContent}
                  </p>
                </div>
              </div>

              {/* Footer Badge */}
              <div className="p-6 md:p-8 border-t border-cyan-400/20">
                <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full">
                  <span className="text-sm text-cyan-300">
                    Team Member Note
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Photo Essay Page */}
      <AnimatePresence>
        {showPhotoEssay && (
          <PhotoEssay onClose={() => setShowPhotoEssay(false)} />
        )}
      </AnimatePresence>

      {/* Blog Entries Page */}
      <AnimatePresence>
        {showBlogEntriesPage && !selectedBlogEntry && (
          <BlogEntriesPage
            onClose={() => setShowBlogEntriesPage(false)}
            onSelectEntry={(author) => setSelectedBlogEntry(author)}
          />
        )}
      </AnimatePresence>

      {/* Individual Blog Entry */}
      <AnimatePresence>
        {selectedBlogEntry && (() => {
          const note = notes.find(n => n.author === selectedBlogEntry);
          return note ? (
            <IndividualBlogEntry
              author={note.author}
              title={note.title}
              date={note.date}
              content={note.fullContent}
              onClose={() => {
                setSelectedBlogEntry(null);
                setShowBlogEntriesPage(false);
              }}
              onBack={() => setSelectedBlogEntry(null)}
            />
          ) : null;
        })()}
      </AnimatePresence>
    </>
  );
}

export default App;