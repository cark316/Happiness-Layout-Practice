export default function Home() {
  return (
    <main className='h-[100vh]'>
      <nav className='px-[328px] p-3 border text-[32px]'>
        <ul>
          <li className="font-medium bg-gradient-to-r from-cyan-400 via-purple-600 to-red-600 text-transparent bg-clip-text w-44">
            Happiness
          </li>
        </ul>
      </nav>
      <div className='flex flex-row px-[328px] justify-between items-center h-[70vh]'>
        <div className='flex flex-1 flex-col justify-center items-center h-[70vh]'>
          <div className='flex justify-center items-center h-[70vh]'>
            Reach your most audacious dreams – or just get out of your rut
          </div>
          <div className='flex justify-center items-center h-[70vh]'>
            Get a personalized plan to build tiny habits that bring you to the life you want to live. Tailored to your goals. Backed by behavior scientists.
          </div>
          <div className='flex justify-center items-center h-[70vh]'>
            Let’s start with your gender:
          </div>
          <div className='flex flex-row justify-center items-center h-[70vh]'>
            <button className='flex justify-center items-center p-4 border text-white bg-purple-500 rounded-2xl'>
              Button1
            </button>
            <button className='flex justify-center items-center p-4 m-3 text-white bg-orange-600 rounded-2xl'>
              Button1
            </button>
            <button className='flex justify-center items-center p-4 text-white bg-zinc-300 rounded-2xl'>
              Button1
            </button>
          </div>
        </div>
        <div className='flex flex-1 justify-center items-center h-[70vh]'>
        Text
        </div>
      </div>
      <footer className='px-[328px] p-3 pb-[128px] pt-[32px] border'>
        <ul>
            <li className='text-[32px] pb-[32px] font-medium bg-gradient-to-r from-cyan-400 via-purple-600 to-red-600 text-transparent bg-clip-text w-44'>
              Happiness
            </li>
            <ul className='flex flex-row space-x-6 text-slate-400 font-semibold'>
              <li>
                Contact us
              </li>
              <li>
                Privacy Policy
              </li>
              <li>
                Terms & Conditions
              </li>
            </ul>
        </ul>
      </footer>
    </main>
  )
}
