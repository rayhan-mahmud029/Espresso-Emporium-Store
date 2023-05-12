import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';

const CoffeeCard = ({ item }) => {
    return (
        <div className='bg-[#F5F4F1] p-8 rounded-lg flex gap-4 items-center'>
            <img src={item.photo} alt="photo" className='w-1/4'/>

            <div className="flex-grow">
                <p><span className='font-semibold'>Name: </span>{item.name}</p>
                <p><span className='font-semibold'>Chef: </span>{item.chef}</p>
                <p><span className='font-semibold'>Price: </span>{}</p>
            </div>

            <div className='flex flex-col gap-3 text-white'>
                <div className="bg-[#D2B48C] rounded-lg p-3"><FaEye/></div>
                <div className="bg-[#3C393B] rounded-lg p-3"><FaPen/></div>
                <div className="bg-[#EA4744] rounded-lg p-3"><FaTrash/></div>
            </div>
        </div>
    );
};

export default CoffeeCard;