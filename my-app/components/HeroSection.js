// /components/HeroSection.js
export default function HeroSection() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl md:text-6xl font-bold animate-bounce text-blue-700">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-xl animate-pulse">
          Hi! I'm <span className="text-blue-500 font-semibold">Neelam Koli</span>, a
          passionate developer. Explore my projects and get in touch!
        </p>
      </main>
    </div>
  );
}
