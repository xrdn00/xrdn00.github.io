import Script from "next/script";


export default function Navbar() {
  return (
    <nav class="flex justify-between container p-6 md:p-8">
      <a class="flex justify-center items-center text-center w-12 h-12 text-xl font-bold" href="">
        xrdn00
      </a>
      <ul class="flex justify-center items-center">
        <li class="mx-2 md:mx-4 hover:scale-105 transition-transform">
          <a href="/" class="font-sans text-xl font-bold leading-none text-white gradient-slide">Home</a>
        </li>
        <li class="mx-2 md:mx-4  hover:scale-105 transition-transform">

          <a href="/projects" class="font-sans text-xl font-bold leading-none text-white gradient-slide">Projects</a>
        </li>
      </ul>
    </nav>

  )
}
