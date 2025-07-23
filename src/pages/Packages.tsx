import React from 'react';
import AllPackages from '../components/AllPackages';
import GiveUsACall from '../components/GiveUsACall';
//import CuratedForYou from '../components/CuratedForYou';
import PerfectTrip from '../components/PerfectTrip';
import TrendingTips from '../components/TrendingTips';
import Testimonial from '../components/Testimonial';
import BlogSection from '../components/BlogSection';
//import { ThePackagesHome } from '../components/ThePackagesHome';

const Packages: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Best Travel Destinations 2024",
      excerpt: "Discover the top destinations to visit this year",
      image: "/images/blog-1.jpg",
      imageUrl: "/images/blog-1.jpg",
      date: "2024-01-15",
      category: "Travel",
      readTime: "5 min read",
      source: "Travel Blog",
      timeAgo: "1 week ago"
    },
    {
      id: 2,
      title: "Travel Tips for First-Time Visitors",
      excerpt: "Essential tips to make your first trip memorable",
      image: "/images/blog-2.jpg",
      imageUrl: "/images/blog-2.jpg",
      date: "2024-01-10",
      category: "Tips",
      readTime: "3 min read",
      source: "Travel Guide",
      timeAgo: "2 weeks ago"
    },
    {
      id: 3,
      title: "Adventure Travel Guide",
      excerpt: "Your complete guide to adventure travel",
      image: "/images/blog-3.jpg",
      imageUrl: "/images/blog-3.jpg",
      date: "2024-01-05",
      category: "Adventure",
      readTime: "7 min read",
      source: "Adventure Blog",
      timeAgo: "3 weeks ago"
    }
  ];

return (
  <div className="w-full overflow-x-hidden">
    <div className="relative">
      {/* Curated For You Section */}
      <section className="w-full pt-[80px]">
        <AllPackages />
      </section>

      {/* All Our Packages Section */}
      <section className="relative z-10 bg-[#FFECCE]">
      <GiveUsACall />
      </section>

      {/* Perfect Trip Section */}
      <section className="w-full">
        <PerfectTrip />
      </section>

      {/* Trending Tips Section */}
      <section className="relative z-10" style={{ background: 'linear-gradient(158deg, #F36E20 0%, #FDAF16 100%)' }}>
      <TrendingTips />
      </section>

      {/* Testimonial Section */}
      <section className="w-full">
        <Testimonial />
      </section>

      {/* Blog Section */}
      <section className="w-full">
        <BlogSection blogPosts={blogPosts} />
      </section>



    </div>
  </div>
);
};

export default Packages; 