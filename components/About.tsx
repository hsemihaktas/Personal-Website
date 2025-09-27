import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-40 py-16 lg:py-24 space-y-16"
    >
      <div className="max-w-4xl mx-auto bg-secondary-dark/70 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-square rounded-lg bg-secondary-dark border-2 border-accent-dark/30 flex items-center justify-center overflow-hidden">
              <Image
                alt="Profile Photo"
                className="object-cover"
                src="/images/profilePicture.webp"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-base leading-relaxed text-gray-300">
              Hello! I'm Hasan Semih Aktaş. I've built websites using React,
              Next.js, TypeScript, and modern web technologies. Recently, I've
              been learning to develop mobile applications with React Native. I
              enjoy keeping up with new technologies, experimenting with them,
              and constantly improving myself. My goal is to develop
              applications and websites that everyone can use and enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
