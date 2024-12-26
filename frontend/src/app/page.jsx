import React from 'react';
import '../style/globals.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/266770.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Adopt Your New Best Friend</h1>
            <p className="text-base md:text-lg mb-6">Give a pet a loving home today!</p>
            <a href="/explorePets" className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">Start Exploring</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">Why Adopt With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Trusted Shelters</h3>
              <p className="text-base md:text-black">We collaborate with reputable shelters to ensure all pets are healthy and well-cared for.</p>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Easy Process</h3>
              <p className="text-base md:text-black">Our streamlined adoption process makes it easy to find your new companion.</p>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Ongoing Support</h3>
              <p className="text-base md:text-black">We provide guidance and support to help you and your pet adjust to life together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="relative h-72 md:h-96 bg-lime-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1k0yOL.img)' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 md:p-6 z-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">INTRODUCE A PET</h1>
            <p className="text-base md:text-xl mb-6 text-black">"Give them a chance to find their forever home!"</p>
            <Link href="/addPet" className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-lime-600 transition">Add</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Adoption Assistance</h3>
                <p className="text-base md:text-black">Our team is here to help you throughout the entire adoption process.</p>
              </div>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Pet Matching</h3>
                <p className="text-base md:text-black">We'll help you find the perfect pet that fits your lifestyle and needs.</p>
              </div>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">Post-Adoption Support</h3>
                <p className="text-base md:text-black">Get support and resources after the adoption to ensure a happy transition for both you and your pet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Call to Action Section */}
      <section className="relative h-72 md:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/dog-dry-food-pet-background-close-up-dog-dry-food-pet-background-close-up-205108551.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">#AdoptLove</h1>
          <p className="text-base md:text-lg mb-6">Approximately 1478 dogs & cats die every day on roads in India. Let’s start a mission to provide every dog and cat a home before 2035. Join us in setting up pet houses in your surrounding for strays!</p>
          <a href="/explorePets" className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">Adopt, Don't Shop!</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">What Our Adopters Say</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="p-4 md:p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl w-full md:w-1/3">
              <p className="text-base md:text-lg text-black-700 mb-4">"Adopting our dog through this service was a wonderful experience. The staff were incredibly supportive and kind!"</p>
              <h4 className="text-lg md:text-xl font-semibold text-black">- Emily R.</h4>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl w-full md:w-1/3">
              <p className="text-base md:text-lg text-black-700 mb-4">"The pet matching service was fantastic! We found the perfect cat for our family. Highly recommend!"</p>
              <h4 className="text-lg md:text-xl font-semibold text-black">- John D.</h4>
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl w-full md:w-1/3">
              <p className="text-base md:text-lg text-black-700 mb-4">"Our puppy has settled in so well, thanks to the post-adoption support provided. We're so happy!"</p>
              <h4 className="text-lg md:text-xl font-semibold text-black">- Sarah K.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
