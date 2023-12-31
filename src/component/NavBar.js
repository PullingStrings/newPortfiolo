import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Tito Zwane</span>
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
              Resume
            </a>
          </Link>
          <Link legacyBehavior href="/projects">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
              See Work
            </a>
          </Link>
        </div>
        <div>
          <Link legacyBehavior href="/contact">
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0">
            Contact Me
          </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
