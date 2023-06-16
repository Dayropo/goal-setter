import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* navbar */}
      <nav className="h-16 px-24 flex justify-between items-center bg-white border-b border-gray-300 font-poppins cursor-default">
        <div>
          <p className="text-lg font-semibold cursor-pointer">Logo</p>
        </div>

        <div className="flex items-center space-x-16">
          <ul className="flex">
            <li className="text-sm py-2.5 px-5 rounded-lg hover:bg-orange-50 cursor-pointer">
              Features
            </li>
            <li className="text-sm py-2.5 px-5 rounded-lg hover:bg-orange-50 cursor-pointer">
              Resources
            </li>
          </ul>

          <div className="flex space-x-2.5">
            <button className="text-sm py-2 px-6 rounded-lg bg-orange-400 text-white hover:translate-y-0.5">
              Sign Up
            </button>
            <button className="text-sm py-2 px-6 rounded-lg text-orange-600 border border-orange-400 hover:translate-y-0.5">
              Log In
            </button>
          </div>
        </div>

        <div className="hidden"></div>
      </nav>
    </main>
  )
}
