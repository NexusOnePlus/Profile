import gaaa from './../assets/gaaa.webp'
function About () {
  return (
    <div className='grid md:grid-cols-6 place-items-center gap-10 p-10 md:p-14 w-full'>
    <div className='col-span-3'>
        <h1 className=' text-3xl md:text-5xl font-extrabold'>About</h1>
        <p className="text-2xl mt-10 grid gap-1.5">
            <h1 className="text-green-400 font-bold">Email: </h1>
            <h1>wv35788@gmail.com</h1>
            <h1 className="text-red-400 font-bold ">Youtube: </h1>
            <a href="https://www.youtube.com/@Nexus-xr1mq"> Will's Youtube Channel </a>
            <h1 className="text-blue-400 font-bold ">Github: </h1>
            <a href='https://github.com/NexusOnePlus'> NexusOnePlus</a>
        </p>
    </div>
    <img className=" md:col-span-3 md:col-start-4 col-start-2 w-xs" alt='a' src={gaaa} />
</div>  )
}

export default About