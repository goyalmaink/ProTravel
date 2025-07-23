import React from 'react';

const destinations = [
  {
    image: '/external/destination-1.jpg',
    title: 'Santorini, Greece',
    description: 'Experience the stunning white architecture and breathtaking sunsets.',
    price: '$1,299'
  },
  {
    image: '/external/destination-2.jpg',
    title: 'Machu Picchu, Peru',
    description: 'Explore the ancient Incan citadel in the Andes Mountains.',
    price: '$1,599'
  },
  {
    image: '/external/destination-3.jpg',
    title: 'Bali, Indonesia',
    description: 'Discover tropical paradise with rich culture and pristine beaches.',
    price: '$999'
  }
];

const Destinations: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of the world's most captivating destinations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{destination.price}</span>
                  <button className="btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations; 