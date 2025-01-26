import { Link } from 'react-router'
import logoo from './../assets/pageeeeeees.png'

function Home() {
    return (
        <div className='grid grid-cols-6 place-items-center p-14 w-full'>
            <div className='col-span-3'>
                <h1 className='text-5xl font-extrabold'>Home</h1>
                <p className="text-2xl">
                    Will's home, please wait!! 😿
                </p>
                <Link to='about'>
                <button className='w-fit p-[14px] cursor-pointer bg-white  hover:bg-black hover:text-white  border-2 text-black mt-10 rounded-3xl text-center text-3xl' >
                    Do not press
                </button>
                </Link>
            </div>
            <img className=" col-span-3 col-start-4 w-xs" alt='a' src={logoo} />
        </div>
    )
}

export default Home