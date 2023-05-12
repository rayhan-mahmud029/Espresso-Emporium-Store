import React, { useState } from 'react';
import headerBg from '../../assets/3.png'
import item1 from '../../assets/icons/1.png'
import item2 from '../../assets/icons/2.png'
import item3 from '../../assets/icons/3.png'
import item4 from '../../assets/icons/4.png'
import bg1 from '../../assets/4.png'
import bg2 from '../../assets/5.png'
import { FaCoffee } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';
import Swal from 'sweetalert2';

const Home = () => {
    const loadedData = useLoaderData();
    const [coffeeItems, setItems] = useState(loadedData);
    const navigate = useNavigate()



    // Edit, delete, view operations
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `Coffee item has been deleted. id: ${id}`,
                                'success'
                            )
                            const remaining = coffeeItems.filter(item => item._id !== id);
                            setItems(remaining);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                            })
                        }
                    })
            }
        })
    }

    const handleViewDetails = id => {
        navigate(`/coffee/${id}`)
    }

    const handleEdit = id => {
        navigate(`/coffee/update/${id}`)
    }

    return (
        <div className='relative'>
            {/* Headers */}
            <header className='relative'>
                <img src={headerBg} alt="background photo" />
                <div className='absolute top-0 left-1/2  me-10  flex flex-col justify-center h-full'>
                    <p className='text-2xl md:text-5xl  text-white text-rancho'>Would you like a Cup of Delicious Coffee?</p>
                    <p className="text-white text-raleway opacity-75 my-4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                    <button className='btn-primary'><Link to='/'>Learn More</Link></button>
                </div>
            </header>

            {/* Features */}
            <section className='bg-[#ECEAE3]'>
                <div className="w-9/12 mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <img src={item1} alt="" className='mb-3' />
                        <h3 className="text-2xl md:text-3xl text-rancho">Awesome Aroma</h3>
                        <p className='text-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={item2} alt="item" className='mb-3' />
                        <h3 className="text-2xl md:text-3xl text-rancho">High Quality</h3>
                        <p className='text-raleway'>YWe served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src={item3} alt="item" className='mb-3' />
                        <h3 className="text-2xl md:text-3xl text-rancho">Pure Grades</h3>
                        <p className='text-raleway'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src={item4} alt="item" className='mb-3' />
                        <h3 className="text-2xl md:text-3xl text-rancho">Proper Roasting</h3>
                        <p className='text-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </section>

            {/* Popular Products */}
            <section className='relative my-6'>
                <div className='w-9/12 mx-auto my-8 h-full'>
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-raleway'>--- Sip & Savor ---</p>
                        <p className="text-3xl md:text-4xl text-rancho">Our Popular Products</p>
                        <Link to='/addCoffee'>
                            <button className='btn-outline mt-2 flex items-center gap-2'>
                                Add Coffee <FaCoffee />
                            </button>
                        </Link>

                        {/* display coffee item  */}
                        <div className="grid md:grid-cols-2 gap-3 mt-8">
                            {
                                coffeeItems.map(item => <CoffeeCard
                                    key={item._id}
                                    item={item}
                                    handleDelete={handleDelete}
                                    handleViewDetails={handleViewDetails}
                                    handleEdit={handleEdit}
                                />)
                            }
                        </div>
                    </div>
                </div>
                <img src={bg1} alt="background" className='absolute opacity-25 top-0 ' />
                <img src={bg2} alt="background" className='absolute bottom-0 right-0 w-1/4 opacity-25' />
            </section>

            <section className='w-9/12 mx-auto my-8'>
                <p className='text-center'>Follow Us Now</p>
                <p className='text-3xl md:text-4xl text-rancho text-center my-1'>Follow on Instagram</p>

                <div className='my-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <img src="https://i.ibb.co/kxmkwmL/Rectangle-16.png" alt="" />
                    <img src="https://i.ibb.co/3dGW4Kd/Rectangle-15.png" alt="" />
                    <img src="https://i.ibb.co/VtH3hB9/Rectangle-14.png" alt="" />
                    <img src="https://i.ibb.co/8KdJpPq/Rectangle-13.png" alt="" />
                    <img src="https://i.ibb.co/YDxX64t/Rectangle-12.png" alt="" />
                    <img src="https://i.ibb.co/0n6rsvV/Rectangle-11.png" alt="" />
                    <img src="https://i.ibb.co/dfnm2G3/Rectangle-10.png" alt="" />
                    <img src="https://i.ibb.co/2cnQS9x/Rectangle-9.png" alt="" />
                </div>
            </section>


            <img src={bg2} alt="background" className='absolute -top-36 right-0 w-1/4 opacity-25' />
        </div>
    );
};

export default Home;