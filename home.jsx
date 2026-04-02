import { Search, MapPin, Calendar, Users, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';

const popularDestinations = [
  'Bali, Indonesia',
  'Paris, France',
  'Tokyo, Japan',
  'Santorini, Greece',
  'Maldives',
  'Iceland',
  'Dubai, UAE',
  'New York, USA',
  'Barcelona, Spain',
  'Thailand',
];

const searchRecommendations = [
  { keyword: 'beach', destinations: ['Bali, Indonesia', 'Maldives', 'Santorini, Greece'] },
  { keyword: 'culture', destinations: ['Paris, France', 'Tokyo, Japan', 'Barcelona, Spain'] },
  { keyword: 'adventure', destinations: ['Iceland', 'New Zealand', 'Peru'] },
  { keyword: 'luxury', destinations: ['Dubai, UAE', 'Maldives', 'Monaco'] },
  { keyword: 'city', destinations: ['New York, USA', 'Tokyo, Japan', 'Paris, France'] },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      const recommendations = searchRecommendations.find((rec) =>
        rec.keyword.toLowerCase().includes(value.toLowerCase())
      );

      const filtered = popularDestinations.filter((dest) =>
        dest.toLowerCase().includes(value.toLowerCase())
      );

      if (recommendations) {
        setFilteredDestinations([...new Set([...recommendations.destinations, ...filtered])]);
      } else {
        setFilteredDestinations(filtered);
      }
      setShowSuggestions(true);
    } else {
      setFilteredDestinations([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            {[
              { Icon: Facebook, url: '#' },
              { Icon: Instagram, url: '#' },
              { Icon: Twitter, url: '#' },
              { Icon: Youtube, url: '#' },
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-teal-600 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-center text-white mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore the World,
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Discover New Destinations
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Embark on unforgettable journeys and immerse yourself in diverse cultures.
              From ancient wonders to modern marvels, let TravelBloom guide your adventure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPin size={20} />
                    </div>
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      onFocus={() => searchQuery && setShowSuggestions(true)}
                      className="w-full pl-12 pr-4 py-4 text-gray-700 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                    />
                    {showSuggestions && filteredDestinations.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-64 overflow-y-auto z-10">
                        {filteredDestinations.map((destination, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchQuery(destination);
                              setShowSuggestions(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-teal-50 transition-colors border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                          >
                            <MapPin size={16} className="text-teal-600" />
                            <span className="text-gray-700">{destination}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSearch}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <Search size={20} className="group-hover:scale-110 transition-transform" />
                    Search
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <Calendar size={20} className="text-teal-600" />
                    <input
                      type="date"
                      className="flex-1 bg-transparent text-gray-700 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <Users size={20} className="text-teal-600" />
                    <select className="flex-1 bg-transparent text-gray-700 focus:outline-none">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3+ Travelers</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.slice(0, 6).map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 h-80">
                  <img
                    src={`https://images.pexels.com/photos/${
                      [2387873, 2549018, 2614818, 3278215, 3225531, 2166559][index]
                    }/pexels-photo-${
                      [2387873, 2549018, 2614818, 3278215, 3225531, 2166559][index]
                    }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination}</h3>
                    <p className="text-gray-200 text-sm">Discover amazing experiences</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
