import React from 'react';
import headerBg from '../../assets/3.png'
import item1 from '../../assets/icons/1.png'
import item2 from '../../assets/icons/2.png'
import item3 from '../../assets/icons/3.png'
import item4 from '../../assets/icons/4.png'
import bg1 from '../../assets/4.png'
import bg2 from '../../assets/5.png'
import { FaCoffee } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
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
            <section className='w-9/12 mx-auto my-8 relative h-screen'>
                <div className="flex flex-col justify-center items-center">
                    <p className='text-raleway'>--- Sip & Savor ---</p>
                    <p className="text-3xl md:text-4xl text-rancho">Our Popular Products</p>
                    <Link to='/addCoffee'>
                        <button className='btn-outline mt-2 flex items-center gap-2'>
                            Add Coffee <FaCoffee />
                        </button>
                    </Link>
                </div>
                <img src={bg1} alt="background" className='absolute top-0' />
                <img src={bg2} alt="background" className='absolute bottom-0 right-0 w-1/4' />
            </section>


        </div>
    );
};

export default Home;