import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const item = useLoaderData();

    return (
        <div>
            <div className='w-9/12 mx-auto relative'>
                <Link to='/' className='flex gap-2 items-center text-rancho text-xl md:text-2xl my-4'> <FaArrowLeft className='text-xl' /> Back to home</Link>

                <div className="bg-[#F4F3F0] p-16 flex flex-col md:flex-row gap-4 justify-around my-8 rounded-md">
                    <div className="flex-1 flex justify-center items-center">
                        <img src={item.photo} alt="" className='' />
                    </div>
                    <div className='flex-1  flex flex-col justify-center '>
                        <h1 className="text-3xl md:text-4xl mb-5 text-rancho">{item.name}</h1>
                        <p><span className='font-semibold mr-1'>Name:</span>{item.name}</p>
                        <p><span className='font-semibold mr-1'>Chef:</span>{item.chef}</p>
                        <p><span className='font-semibold mr-1'>Supplier:</span>{item.supplier}</p>
                        <p><span className='font-semibold mr-1'>Taste:</span>{item.taste}</p>
                        <p><span className='font-semibold mr-1'>Category:</span>{item.category}</p>
                        <p>{item.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;