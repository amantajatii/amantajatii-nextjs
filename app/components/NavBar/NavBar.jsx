import NavComps from "./navComps";

export default function NavBar({ className = "" }) {
  return (
    <nav className={`flex justify-center p-8 ${className}`}>
      <div className="flex border border-fuchsia-200/20 bg-gray-200/2 rounded-full backdrop-blur-md overflow-hidden">
        <div className="flex w-full justify-center">
          <NavComps
            link="/"
            name="Home"
            className="font-semibold hover:text-gray-400 transition-all py-6 pr-12 pl-16"
          />
          <NavComps
            link="/about"
            name="About"
            className="font-semibold hover:text-gray-400 transition-all py-6 px-12"
          />
          <NavComps
            link="/contact"
            name="Contact"
            className="font-semibold hover:text-gray-400 transition-all py-6 px-12"
          />
          <NavComps
            link="/experience"
            name="Experience"
            className="font-semibold hover:text-gray-400 transition-all py-6 pl-12 pr-16"
          />
        </div>
      </div>
    </nav>
  );
}
