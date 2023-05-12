import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ item, handleDelete, handleEdit, handleViewDetails }) => {

    return (
        <div className='bg-[#F5F4F1] p-8 rounded-lg flex gap-4 items-center'>
            <img src={item.photo} alt="photo" className='w-1/4' />

            <div className="flex-grow z-10">
                <p><span className='font-semibold'>Name: </span>{item.name}</p>
                <p><span className='font-semibold'>Chef: </span>{item.chef}</p>
                <p><span className='font-semibold'>Price: </span>{ }</p>
            </div>

            <div className='flex flex-col gap-3 text-white z-10'>
                <button onClick={() => handleViewDetails(item._id)} className="bg-[#D2B48C] rounded-lg p-3"><FaEye /></button>
                <Link to={`/coffee/update/${item._id}`} ><button className="bg-[#3C393B] rounded-lg p-3"><FaPen /></button></Link>

            <button onClick={() => handleDelete(item._id)} className="bg-[#EA4744] rounded-lg p-3"><FaTrash /></button>
        </div>
        </div >
    );
};

export default CoffeeCard;