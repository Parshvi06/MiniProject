'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import {IconUser } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';


const PetDetails = () => {
    // Hardcoded pet data
    // const pet = {
    //     image: 'https://www.rd.com/wp-content/uploads/2020/01/GettyImages-1010710424-scaled.jpg', // Replace with actual image URL
    //     name: 'Buddy',
    //     age: 1,
    //     breed: 'Pug',
    //     vaccinated: true,
    //     gender: 'Male',
    //     contact: {
    //         name: 'Sania',
    //         address: 'California',
    //         phone: '7889045671',
    //     }
    // };

    const { id } = useParams();
    const [petData, setpetData] = useState(null)

    const fetchPetDetails = async () => {
        const res = await axios.get('http://localhost:5000/pet/getbyid/' + id);
        const data = res.data;
        console.log(data);
        setpetData(data);
    }

    useEffect(() => {
        fetchPetDetails();
    }, [])

    const displayPetDetails = () => {
        if (petData !== null) {
            return (
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={petData.image}
                            alt={petData.name}
                            className="w-full h-[500px] object-cover" // Increased height to 500px
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            {/* Uncomment to display pet name on overlay */}
                            {/* <h1 className="text-white text-4xl font-bold">{pet.name}</h1> */}
                        </div>
                    </div>
                    <div className="p-6 bg-lime-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="text-center md:text-left">
                            <h3 className="text-2xl font-semibold mb-4">Details</h3>
                                <h2 className="text-3xl font-semibold mb-2">{petData.name}</h2>
                                <p className="text-lg text-black mb-2">Age: {petData.age} years</p>
                                <p className="text-lg text-black mb-2">Breed: {petData.breed}</p>
                                <p className="text-lg text-black mb-2">Gender: {petData.gender}
                              
                                </p>
                                {/* <p className="text-lg text-gray-700 mb-2">
                                    Vaccinated: {petData.vaccinated ? 'Yes' : 'No'}
                                </p> */}
                            </div>
                            <div className="mt-6 md:mt-0">
                                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                                   <div className='flex'> <IconUser className='flex' />
                                   <p className="text-lg text-black mb-2"> Name : {petData.contact_name}</p>
                                   </div>
                               
                                <p className="text-lg text-black mb-2"> 📞Phone: {petData.phone}</p>
                                {/* <p className="text-lg text-gray-700 mb-2">Contact {petData.description}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <h2>Loading ... </h2>
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {displayPetDetails()}
        </div>
    );
};

export default PetDetails;
