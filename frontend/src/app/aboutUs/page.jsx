import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center text-6xl font-bold'>About Us</h1>

      {/* Our Mission Section */}
      <div className="px-16 py-16 bg-gradient-to-r from-green-400 to-blue-500 mt-8">
        <div className="grid grid-cols-12 mx-w-[90%] lg-max-w-[80%] mx-auto gap-5">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold my-3 text-white">Our Mission</h1>
            <p className='text-xl font-bold pt-7 pb-7 text-white'>
              At WaggingTails Hub, we are dedicated to connecting loving families with pets in need of a forever home. Our mission is to streamline the adoption process, provide essential resources for pet care, and foster a compassionate community committed to animal welfare. We strive to make each adoption a positive experience, ensuring every pet finds a safe, loving environment and every family gains a loyal companion.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center">
            <img
              src="https://thecitylane.com/wp-content/uploads/2017/01/025-PetStock-animal-carers-20150812_DSC_0115.jpg" // Replace with actual image URL
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="px-16 py-16 bg-gradient-to-r from-purple-500 to-pink-500 mt-8">
        <div className="grid grid-cols-12 mx-w-[90%] lg-max-w-[80%] mx-auto gap-5">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold my-3 text-white">Our Vision</h1>
            <p className='text-xl font-bold pt-7 pb-7 text-white'>
              Our vision is to create a world where every pet finds a loving home and every family has the joy of a loyal companion. We aspire to be a leading platform in promoting animal welfare, eliminating pet homelessness, and fostering a community where pets and people thrive together. Through innovation, education, and compassion, we aim to transform the pet adoption experience and inspire a future where every pet is cherished and cared for.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center">
            <img
              src="https://www.gannett-cdn.com/-mm-/f220bdf7ea74abba5a65725730be034cd96c35de/c=0-159-3255-1998/local/-/media/2018/07/02/SNJGroup/CherryHill/636661348178582996-uscpcent02-70tntzbc11e6ekfbkgk-original.jpg?width=3200&height=1808&fit=crop&format=pjpg&auto=webp" // Replace with actual image URL
              alt="Vision"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;