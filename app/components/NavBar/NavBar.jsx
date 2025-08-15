import NavComps from "./navComps";

export default function NavBar({ className = "" }) {
  return (
    <nav className={`flex justify-center p-8 ${className}`}>
      <div className="flex border border-fuchsia-200/20 bg-white/5 px-20 py-6 rounded-full backdrop-blur-md">
        <div className="flex w-full justify-center space-x-20">
          <NavComps link="/" name="Home" />
          <NavComps link="/about" name="About" />
          <NavComps link="/contact" name="Contact" />
          <NavComps link="/experience" name="Experience" />
        </div>
      </div>
    </nav>
  );
}
