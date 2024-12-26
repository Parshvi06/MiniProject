'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

// ExplorePets Component
const ExplorePets = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [petList, setPetList] = useState([]);

  // Fetch pets data from the API
  const fetchPetsData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/pet/getall');
      console.log(res.status);
      console.table(res.data);
      setPetList(res.data);
    } catch (error) {
      console.error('Error fetching pets data:', error);
    }
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  // Filter pets based on selected type, state, and search term
  const filteredPets = petList.filter(pet =>
    (selectedType ? pet.type === selectedType : true) &&
    (selectedState ? pet.state === selectedState : true) &&
    (searchTerm ? pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="flex">
      {/* Filter Card */}
      <div className="w-1/4 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Filter Pets</h2>

        <div className="mb-4">
          <label htmlFor="pet-type" className="block text-gray-700 mb-1">Type</label>
          <select
            id="pet-type"
            value={selectedType}
            onChange={handleTypeChange}
            className="border rounded w-full px-3 py-2"
          >
            <option value="">All Types</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="pet-state" className="block text-gray-700 mb-1">State</label>
          <select
            id="pet-state"
            value={selectedState}
            onChange={handleStateChange}
            className="border rounded w-full px-3 py-2"
          >
            <option value="">All States</option>
            <option value="California">California</option>
            <option value="New York">New York</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      {/* Pets Display Area */}
      <div className="w-3/4 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <label htmlFor="search-breed" className="block text-black text-2xl font-bold mb-1">Search by Breed</label>
          <input
            id="search-breed"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by breed"
            className="border rounded w-full px-3 py-2"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6">Available Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.length > 0 ? (
            filteredPets.map(pet => (
              <div key={pet.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={pet.image} alt={pet.breed} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{pet.breed}</h3>
                  <p className="text-gray-600">Type: {pet.type}</p>
                  <p className="text-gray-600">State: {pet.state}</p>
                  <div className='mt-4 text-center'>
                    <Link href={`/pet-details/${pet._id}`} className='text-lime-500 hover:underline text-sm'>View Details</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No pets found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorePets;
