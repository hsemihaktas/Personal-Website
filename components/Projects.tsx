export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-10 lg:px-40 py-16 lg:py-24 space-y-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group flex flex-col bg-secondary-dark/70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/10 hover:scale-105 border border-transparent hover:border-accent-dark/30">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYchKNHXzsCl-7nc1QMsHK3c11jigYQUiSVYu2NC4fwBzbb8z3iL7Qg82C39DOO3ASPt7aFWYYNM-HD-r2yDEtUda6iiOJw0DBqoy21V-JVisQE1txsrFsKqouZRgf-uvR4g7XRGHzYulFc5Wb-YJsUYE7RoG_7MigVKsloFvI-ZSmGhy_00YqudyWZsTSFA6nBl7HRVLI5aNE9l-KXL2IaCa0dQoV_UF2-RR37YiNflEjSmnpvzOmZhXQzSLEfMvAlN3cuE-qDJI')",
              }}
            ></div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Project Alpha</h3>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  A web application for task management.
                </p>
              </div>
              <button className="bg-accent-dark/20 text-accent-dark hover:bg-accent-dark/40 font-bold rounded-lg h-10 px-5 text-sm transition-colors w-full">
                Details
              </button>
            </div>
          </div>
          <div className="group flex flex-col bg-secondary-dark/70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/10 hover:scale-105 border border-transparent hover:border-accent-dark/30">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmhm9LWxXYpDnACBew9iWk0RtbHZWvcWNbb3l1zfHfYp1VdulqTLcTFUW5PT_m6iXc7ynZ8jk2ZTJLms-4FjSD2_fKo-n1sSOcCBgfVIjivL-NoAlkmy9-naTVNNYy9YoHofL6FfUL5uN5v1oo4boiLOp8E9pqsAig-wIdTTRYOuLtMF0uJv7pNYUkK8U50t2KkGf-lV9ka-Si17SDYrEQmVxQAd-a-AaqhvXPKP9g4jc2PyDI1njXPzY9IOVkB-yu1Kayrt3eXWo')",
              }}
            ></div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Project Beta</h3>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  A mobile app for fitness tracking.
                </p>
              </div>
              <button className="bg-accent-dark/20 text-accent-dark hover:bg-accent-dark/40 font-bold rounded-lg h-10 px-5 text-sm transition-colors w-full">
                Details
              </button>
            </div>
          </div>
          <div className="group flex flex-col bg-secondary-dark/70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/10 hover:scale-105 border border-transparent hover:border-accent-dark/30">
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnDINj0H39g4E0e8mEkd9W3q8_P7198QQT6zr7LaMhSxTCZxXUC_GCVH_gadon66JcUT0SfwY1aoscSxJ2HNTmNBKqKTxTswzgww1Mb7gjkuDIz6nKOqYDLM7Y_2n0Hfa7zmcUhdJF7pTF5nCN8d1Bs6V417ZYIX37Zw03CUUmBpvyhSFqjW9CRLHsSMeXZIGWl2xgjEZfJhd6gGJtlUR7sCwaQ5Vk4N92xqSgjtUCGwUBAN1TRJ-YdR2C6VLkTd9OyDqRHds3Kss')",
              }}
            ></div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Project Gamma</h3>
                <p className="text-sm text-gray-400 mt-1 mb-4">
                  A data analysis tool for market research.
                </p>
              </div>
              <button className="bg-accent-dark/20 text-accent-dark hover:bg-accent-dark/40 font-bold rounded-lg h-10 px-5 text-sm transition-colors w-full">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-accent-dark hover:bg-accent-dark/80 text-primary-dark font-bold rounded-lg h-10 px-5 text-sm transition-colors">
            <span className="truncate">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
}
