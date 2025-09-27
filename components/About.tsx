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
              <img
                alt="Profile Photo"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKGrnTkVytU7dwhOjrG2ah8RJcfTMbfqqfoKlBakKnsJpkBdGGGQhbpgjmbvLOfoUQ-qPzuGyiqGFX2WT2fsCGs26TQ2D7ND0JJXqLVXt2xIWADAJgbbd-_mtQnQpYMG1Fo-hfLEC1SvOf4BlUxaikphfYtZAEtZnZNU1K3447oxgScYqDGTDWFOLcLf6RBqztNnjvNzV6unC0viOxRKzXtLGoBRyvZk13he5r3ONfGx_hUrRE3E03Qpzylt9aO9dr1N2nBdC21f4"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-base leading-relaxed text-gray-300">
              I'm a software engineer with a strong foundation in computer
              science principles and a passion for creating impactful software
              solutions. My expertise spans various programming languages,
              frameworks, and tools, allowing me to tackle diverse challenges
              and deliver high-quality results. I'm always eager to learn and
              adapt to new technologies, ensuring that my skills remain at the
              forefront of the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
