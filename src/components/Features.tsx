import React from 'react';
import { GlobeAltIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: GlobeAltIcon,
    title: 'Expert Local Guides',
    description: 'Our experienced guides provide insider knowledge and authentic experiences.'
  },
  {
    icon: UserGroupIcon,
    title: 'Small Group Tours',
    description: 'Intimate group sizes ensure personalized attention and meaningful connections.'
  },
  {
    icon: StarIcon,
    title: 'Curated Experiences',
    description: 'Carefully selected destinations and activities for unforgettable memories.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, personalization, and passion to create extraordinary travel experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 