import './Navbar.css'

function Navbar() {

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md text-white shadow-md z-50 ">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                </div>
                <a href='#hero' className='text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition'>
                    Francisco.dev
                </a>
            </nav>

        </>
    )



}
export default Navbar;
