export default function Navbar() {
  return (
    <nav className="flex justify-between container p-6 md:p-8">
      <a className="flex justify-center items-center text-center w-12 h-12 text-xl font-bold text-white" href="">
        xrdn00
      </a>
      <ul className="flex justify-center items-center">
        <li className="mx-2 md:mx-4 hover:scale-105 transition-transform">
          <a href="/" className="font-sans text-xl font-bold leading-none text-white orange-slide">Home</a>
        </li>
        <li className="mx-2 md:mx-4 hover:scale-105 transition-transform">
          <a href="/projects" className="font-sans text-xl font-bold leading-none text-white orange-slide">Projects</a>
        </li>
      </ul>
    </nav>
  )
}
//change file dir later if you want to deploy the website online (github pages)
