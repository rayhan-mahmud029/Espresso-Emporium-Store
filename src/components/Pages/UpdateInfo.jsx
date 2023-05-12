import React from 'react';
import { FaArrowLeft, FaChevronLeft, FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import formBg from '../../assets/11.png'
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeInfo = { name, chef, supplier, taste, category, details, photo }

        // send data to server
        fetch(`http://localhost:5000/coffee/update/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(coffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (

        <div>
            <div className='w-9/12 mx-auto relative'>
                <Link to='/' className='flex gap-2 items-center text-rancho text-xl md:text-2xl my-4'> <FaArrowLeft className='text-xl' /> Back to home</Link>

                {/* // form section */}
                <section className='bg-[#F4F3F0] p-20 my-12'>
                    <h1 className="text-3xl md:text-4xl text-center text-rancho mb-4">Update Existing Coffee Details</h1>
                    <p className='opacity-75 text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form className='my-8 text-raleway w-full' onSubmit={handleFormSubmit}>
                        <div className="mb-6 flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="name" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter coffee name' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="chef" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Chef</label>
                                <input type="text" name="chef" id="chef" placeholder='Enter chef name' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                        </div>

                        <div className="mb-6 flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="supplier" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Supplier</label>
                                <input type="text" name="supplier" id="supplier" placeholder='Enter coffee supplier' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="taste" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Taste</label>
                                <input type="text" name="taste" id="taste" placeholder='Enter coffee taste' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                        </div>

                        <div className="mb-6 flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="category" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Category</label>
                                <input type="text" name="category" id="category" placeholder='Enter coffee category' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="details" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Details</label>
                                <input type="text" name="details" id="details" placeholder='Enter coffee details' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                        </div>

                        <div className="mb-6 flex gap-4">
                            <div className='flex-1'>
                                <label htmlFor="photo" className='block text-md font-semibold mb-3 text-gray-900 dark:text-white '>Photo</label>
                                <input type="url" name="photo" id="photo" placeholder='Enter photo URL' className='p-3 bg-white rounded-sm w-full' />
                            </div>
                        </div>

                        <button type="submit" className='btn-outline w-full flex items-center gap-2 justify-center mt-4'>Update Coffee <FaCoffee /></button>
                    </form>
                </section>
            </div>
            <div className='absolute top-0 -z-10'>
                <img src={formBg} alt="background" />
            </div>
        </div>
    );
};

export default UpdateCoffee;