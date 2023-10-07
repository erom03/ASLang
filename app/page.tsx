import Image from 'next/image'
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <section>
      <header><Navigation /></header>
      <main>

      <div className="max-w-4xl mx-auto sm:pt-16">
        <h1 className="text-4xl sm:text-6xl text-gray-700 dark:text-gray-200 font-medium mx-auto pb-6 tracking-tighter">
          Your <span className="text-gold-600 dark:text-gold-600">Career in Web Development</span> <span className="block font-medium">Starts Here</span>
        </h1>
        <div className="text-gray-600 dark:text-gray-300/80 pb-8 max-w-xl mx-auto">
          <p className="mb-4 text-xl text-gray-500 dark:text-gray-400">Our full stack curriculum is free and supported by a passionate open source community.</p>
        </div>
      </div>

      </main>
    </section>
  );
}
