import bookImage from '../../assets/books.jpg'
const Banner = () => {
  return (
    <div className='flex w-6xl mx-auto border-4 my-2 rounded-2xl justify-around p-4 border-emerald-500/30 items-center'>
        <div>
            <h2 className="text-2xl mb-4 font-bold">Books to freshen up your bookshelf.</h2>
            <button className="btn btn-primary">Test</button>
        </div>
        <div className=' flex justify-center'>
            <img src={bookImage} alt="Image" className='w-5/6 rounded-2xl' />
        </div>
    </div>
  )
}

export default Banner