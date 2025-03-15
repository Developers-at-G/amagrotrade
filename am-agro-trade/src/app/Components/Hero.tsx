export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/Images/truck.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content */}
      <div className="relative container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 sm:px-4">
        {/* Left content */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-12 py-8 lg:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            AM Agro Trade <span className="text-green-400">Services</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed">
            Efficiently connecting businesses and ensuring smooth operations across the entire supply chain
          </p>
        </div>

        {/* Feature cards - visible on all screens */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
          <div className="space-y-4 mx-2 sm:mx-4 lg:mr-12">
            {/* Feature Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">Fast Delivery</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Efficient and timely transportation services</p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-md lg:translate-x-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">Secure Transport</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Your cargo&apos;s safety is our priority</p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">Global Network</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">Connected across continents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 right-4 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-green-400/30 rounded-full blur-2xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    </div>
  )
}
