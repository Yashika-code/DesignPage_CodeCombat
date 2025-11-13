import { FaHome } from "react-icons/fa";

function App() {
  return (
    <header className="w-full border-b border-gray-300 shadow-sm bg-white">
    <div className="flex w-full justify-between max-w-7xl items-center px-4 py-3 mx-auto">
      <div className="flex items-center gap-3">
        <img className="w-40 h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaup7yMCnPA-4FFYtafsRrNwEjXdT6niX00A&s" alt="CodeCombat Logo" />
        <a className="text-red-800 mr-4 text-xl hover:text-red-600 " href="#"><FaHome /></a>
      </div>

        <nav className="text-red-800 md:flex font-semibold text-lg items-center md:text-sm gap-6">
          
          <a className="hover:text-red-red-600 ml-5 max-[770px]:hidden max" href="#">About</a>
          <a className="hover:text-red-red-600 max-[750px]:hidden" href="#">Courses</a>
          <a className="hover:text-red-red-600 max-[750px]:hidden" href="#">Teachers</a>
          <a className="hover:text-red-red-600 max-[750px]:hidden" href="#">Forum</a>
          <a className="hover:text-red-red-600 max-[750px]:hidden " href="#">CreateAccount</a>
          <a className="hover:text-red-red-600 flex-wrap " href="#">LogIn</a>
          <div className="mt-3 md:mt-0 max-[750px]:hidden">
          <select className="border border-gray-400 rounded-md p-1 text-sm text-gray-700">
              <option>English (US)</option>
              <option>Hindi (In)</option>
          </select>
          </div>
        </nav>
    </div>
    <div
  className="relative bg-cover bg-center bg-fixed h-screen flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://www.luminafoundation.org/wp-content/uploads/2025/01/students-banner.jpg')",
  }}
>         
<div className="absolute inset-0 bh-black opacity-20"></div>
              <div className="realtive z-20 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl mx-auto gap-10">
              <h1 className="text-white text-4xl md:text-5xl max-w-md text-center  md:text-left font-bold">The most engaging game for learning programming</h1>
              
              <div className="bg-gray-200 bg-opacity-90 p-6 shadow-lg max-w-sm w-full rounded-lg ">

                <div className="font-bold text-lg mb-4">Start Playing for Free!</div>
                <div className="flex flex-col gap-3">
                <button className=" text-white py-2 bg-green-800 font-medium rounded-lg hover:bg-green-700 ">
                  Play Now
                  </button>
                <button className=" text-black py-2  bg-white rounded-lg font-medium border border-gray-300 hover:bg-gray-100" >
                  join Class
                  </button>
                  </div>
                  <div className="mt-4">
                <p className="text-md font-semibold">Teachers & Educators</p>
                <p className="text-gray-600 text-sm mb-4">Learn how our classroom-in-a-box platform fits into your curriculum.</p>
                <button className=" text-white py-2 items-center font-medium hover:bg-blue-800 flex w-full bg-blue-900 rounded-lg justify-center">Get Started</button>
              </div>
              </div>
              </div>
    </div>
    </header>
  )
}

export default App
