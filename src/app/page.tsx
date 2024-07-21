import Skills from './components/Skills';
import Frameworks from './components/Frameworks';
import Tech from './components/Tech';

export default function Home() {
  return (
    <div className="my-16 md:my-32 lg:my-64 min-h-screen flex flex-col items-center justify-between overflow-x-hidden">
      <main className="w-full max-w-4xl px-4 md:px-8 lg:px-16">
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 border-l-4 border-gray-500 pl-4 mb-16 md:mb-32 lg:mb-96">
          <p>Hi xrdn00 here,</p>
          <p>I am a software developer specialized in the field of back end development,</p>
          <p>And I can also do some front end stuff</p>
          <p></p>
        </blockquote>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4 md:ml-8 lg:ml-16 p-4 md:p-6 lg:p-8 text-white">Skills</h1>
        <Skills />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4 md:ml-8 lg:ml-16 p-4 md:p-6 lg:p-8 text-white">Frameworks</h1>
        <Frameworks />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4 md:ml-8 lg:ml-16 p-4 md:p-6 lg:p-8 text-white">Technologies</h1>
        <Tech />
        <div className='mb-16 md:mb-32 lg:mb-96'></div>
      </main>
    </div>
  );
}
