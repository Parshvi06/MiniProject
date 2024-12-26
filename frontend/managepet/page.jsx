'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManagePet = () => {

    const [petList, setpetList] = useState([]);

    const fetchPetsData= async ()=>{
       const res= await axios.get('http://localhost:5000/pet/getall');
       console.log(res.status);
       console.table(res.data);
       setpetList(res.data);
    }

    useEffect(() => {
        fetchPetsData();
    }, []);

    const deletePet=(id)=>{
        axios.delete('http://localhost:5000/pet/delete/'+id)
        .then((result) => {
            toast.success('Pet Deleted Successfully');
            fetchPetsData();
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to delete pet');
            
            
        });
    }
     const displayPets=()=>{
        if(petList.length === 0){
            return <p>Loading...Please Wait</p>
        }else{
            return <table className='w-full border-2 border-blue-500'>  
                <thead className=' text-left bg-blue-500 text-white'>
                    <tr>
                        <th className='p-3 text-lg'>Name</th>
                        <th className='p-3 text-lg'>type</th>
                        <th className='p-3 text-lg'>Age</th>
                        <th className='p-3 text-lg'>Description</th>
                        <th colspan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        petList.map((user)=>{
                            return <tr key={pet._id} className='border border-blue-300'>
                                <td className='p-3'>{pet._id}</td>
                                <td className='p-3'>{pet.name}</td>
                                <td className='p-3'>{pet.type}</td>
                                <td className='p-3'>{pet.age}</td>
                                <td className='p-3'>{pet.message}</td>
                                

                                <td>
                                    <button
                                     onClick={()=>{deletePet(pet._id)}} className='px-3 py-1 bg-red-500 rounded-full text-white'>Delete</button>
                                </td>
                                <td>
                                    <Link href={'/updatepet/'+pet._id} className='px-3 py-1 bg-blue-500 rounded-full text-white'>Edit</Link>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        }
     }
    

  return (
    <div>
        <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
        <h1 className='text-center font-bold text-3xl mt-5'> ManagePet</h1>

        {displayPet()}
        </div>
        </div>

  )
}

export default ManagePet