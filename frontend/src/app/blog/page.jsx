import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Joy of Adopting a Pet',
    excerpt: 'Discover the countless benefits of adopting a pet and how it can change your life for the better.',
    image: 'https://tse2.mm.bing.net/th?id=OIP._5N5do4gjiEXxB9Ka9E5twHaE7&pid=Api&P=0&h=180',
    // link: '/blog/the-joy-of-adopting-a-pet',
  },
  {
    id: 2,
    title: 'Preparing Your Home for a New Pet',
    excerpt: 'Learn how to make your home pet-friendly and ensure a smooth transition for your new furry friend.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.u0LOnq6x-7NqmR38cXgBigHaE8&pid=Api&P=0&h=180',
    link: '/blog/preparing-your-home-for-a-new-pet',
  },
  {
    id: 3,
    title: 'Pet Adoption Success Stories',
    excerpt: 'Read inspiring stories of pets who found their forever homes and the impact on their new families.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.B0MG9Weh6m7teI6jKAOO5gHaHa&pid=Api&P=0&h=180',
    link: '/blog/pet-adoption-success-stories',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-lime-400 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                {/* <a
                  href={post.link}
                  className="text-lime-500 hover:underline text-lg font-medium"
                >
                  Read More
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
