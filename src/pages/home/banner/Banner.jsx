import './banner.css'


const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='md:w-3/5 h-full flex flex-col justify-center space-y-6 p-8'>
                <h1 className='text-white text-2xl md:text-5xl font-semibold  text-gradient'>We Deliver Your Goods With <br /> Passion & Love</h1>
                <h3 className='text-white text-lg'>Over 100++ Acer Interior Warehouse Space</h3>
                <div className='border h-8 w-2/3 relative '>
                    <button className='text-white text-lg font-semibold absolute right-2  text-gradient'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;