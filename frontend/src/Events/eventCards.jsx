import { Users, Trophy, Star, Sparkles, Heart } from "lucide-react";

const iconMap = {
  Trophy,
  Star,
  Sparkles,
  Heart,
  Users,
};

export default function EventCard({ event }) {
  const Icon = iconMap[event.icon] || Star;

  return (
    <div className="group relative bg-gray-900/70 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
      {/* Featured Badge */}
      {event.featured && (
        <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-400 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-2">
        <Icon className="text-red-400 w-6 h-6" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white ml-2 mb-1">{event.title}</h3>
      <p className="text-red-400 text-sm mb-3 ml-1 uppercase tracking-wider">
        {event.tagline}
      </p>

      {/* Description */}
      <div className="mt-2">
        <p className="font-sans font-bold text-gray-400 text-sm leading-relaxed line-clamp-10">
          {event.description}
        </p>
      </div>
    </div>
  );
}
