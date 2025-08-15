"use client";

import { useRouter } from "next/navigation";
import { X, User, Calendar, MapPin, Hash, Users, Upload } from "lucide-react";

const Contribute = () => {
  const router = useRouter();

  const options = [
    {
      icon: <User className="w-8 h-8 text-[#2A65E4]" />,
      title: "Person",
      description: "Add a person to the community database",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#2A65E4]" />,
      title: "Event",
      description: "Document a significant event or happening",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#2A65E4]" />,
      title: "Place",
      description: "Add a location or venue to the database",
    },
    {
      icon: <Hash className="w-8 h-8 text-[#2A65E4]" />,
      title: "Meme",
      description: "Document internet culture and memes",
    },
    {
      icon: <Users className="w-8 h-8 text-[#2A65E4]" />,
      title: "Group",
      description: "Add information about communities or organizations",
    },
    {
      icon: <Upload className="w-8 h-8 text-[#2A65E4]" />,
      title: "File Upload",
      description: "Upload a formatted file with multiple entries",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center relative">
        <button
          onClick={() => router.back()}
          className="absolute right-0 -top-2 flex items-center gap-1 border border-gray-300 bg-white px-3 py-1 text-sm  hover:bg-gray-100 transition-all duration-200"
        >
          <X className="w-4 h-4" />
          Exit
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Contribute to IRL History
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Help build our community database by submitting information about
          people, events, places, memes, or groups. All submissions are reviewed
          before being added to the platform.
        </p>
      </div>

      {/* Options Grid */}
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center gap-3 border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#2A65E4] hover:bg-gray-50 transition-all duration-200"
          >
            {opt.icon}
            <div className="text-lg font-semibold text-gray-900">
              {opt.title}
            </div>
            <div className="text-sm text-gray-600 text-center">
              {opt.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contribute;
