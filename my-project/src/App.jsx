import './App.css';

function App() {
  return (
    <div className='bg-black min-h-screen min-w-screen flex items-center justify-center'>
      <div className='container bg-slate-800 w-80 h-96 flex flex-col items-center justify-center rounded-lg overflow-hidden' style={{ minWidth: '340px', minHeight: '450px' }}>
        <div className='items-center justify-center flex flex-col'>
          <img className='rounded-full hover:scale-110 transition-transform' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt='profile pic' style={{ maxWidth: "70px" }} />
          <h2 className='text-2xl text-white'>Dr. Anna A</h2>
          <p className='text-[#0ed71c66] font-bold'>Bristol, United Kingdom</p>
        </div>
        <p className='text-white italic'>{'"Front end developer and avid reader"'}</p>
        <div className='links flex flex-col group/item text-white p-2 gap-2'>
          <a href='#' target='_blank' className='bg-slate-600 rounded-lg px-12 py-2 hover:scale-105 transition-transform'>GitHub</a>
          <a href='#' target='_blank' className='bg-slate-600 rounded-lg px-12 py-2 hover:scale-105 transition-transform'>Frontend Mentor</a>
          <a href='#' target='_blank' className='bg-slate-600 rounded-lg px-12 py-2 hover:scale-105 transition-transform'>LinkedIn</a>
          <a href='#' target='_blank' className='bg-slate-600 rounded-lg px-12 py-2 hover:scale-105 transition-transform'>Twitter</a>
          <a href='#' target='_blank' className='bg-slate-600 rounded-lg px-12 py-2 hover:scale-105 transition-transform'>Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;

