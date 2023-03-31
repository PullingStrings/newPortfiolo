import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tito Zwane</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 7a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3zm0 7a3 3 0 0 1 3-3h14a3 3 0 0 1 0 6H3a3 3 0 0 1-3-3z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link legacyBehavior href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link legacyBehavior href="/resume">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Lets See
            </a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              Projects
            </a>
          </Link>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
