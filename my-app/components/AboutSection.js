export default function AboutSection() {
    return (
      <section className="py-16 bg-gray-800 text-white min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8 animate-pulse">About Me</h2>
        <div className="max-w-4xl text-lg text-center mb-8">
          <p>
            Hello! I'm a passionate web developer with experience in building modern web applications. 
            I specialize in creating dynamic and responsive websites using technologies like React, 
            Next.js, JavaScript, and Tailwind CSS. I have a deep interest in building user-centric solutions
            and optimizing performance for smooth and delightful user experiences.
          </p>
          <p className="mt-4">
            When I'm not coding, you can find me exploring new technologies, working on personal projects, or
            enjoying outdoor activities. I'm always excited to learn and grow as a developer, and I look forward
            to collaborating with talented individuals to create amazing products.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src="/images/image.png" 
            alt="Your Photo"
            className="rounded-full w-40 h-40 object-cover shadow-lg"
          />
        </div>
      </section>
    );
  }
  