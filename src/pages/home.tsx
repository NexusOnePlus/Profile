import { Link } from 'react-router'
import logoo from './../assets/pageeeeeees.png'

function Home() {
    return (
        <div className='grid md:grid-cols-6 place-items-center gap-10 p-10 md:p-14 w-full'>
            <div className='col-span-3 grid place-items-center'>
                <h1 className='text-5xl font-extrabold'>Home</h1>
                <p className=" text-sm md:text-2xl">
                    <br></br>
                    Will's home, please wait!! 👾
                </p>
                <Link to='about'>
                <button className='w-fit p-[14px] cursor-pointer bg-white  hover:bg-black hover:text-white  border-2 text-black mt-10 rounded-3xl text-center text-xl md:text-3xl' >
                    Do not press
                </button>
                </Link>
            </div>
            <img className=" md:col-span-3 md:col-start-4 col-start-2 w-xs" alt='a' src={logoo} />
        </div>
    )
}

export default Home