"use client";
import Image from "next/image";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200 font-sans relative">
      {/* Header */}
      <header className="text-center py-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
        <h1 className="text-4xl font-bold">Sisteme de Operare pentru PC</h1>

      </header>

      {/* Main Content */}
      <main className="py-12 space-y-12 px-4 sm:px-8">
        {/* Windows Section */}
        <section className="py-8 px-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">Windows 10</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
            Windows 10 este un sistem de operare pentru computere personale
            dezvoltat de Microsoft ca parte a familiei de sisteme de operare
            Windows NT.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/windows.webp"
                alt="Windows 10"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        <section className="py-8 px-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">Windows 11</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
            Windows 11 este un sistem de operare dezolvat de Microsoft fiind cel mai nou sistem de operare din familia Windows NT.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/windows11.png"
                alt="Windows 11"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Linux Section */}
        <section className="py-8 px-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">Linux</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
            Linux este un nucleu de sistem de operare open-source care formează
            baza pentru diverse distribuții precum Ubuntu și Kali Linux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium">Ubuntu</h3>
              <Image
                src="/images/ubuntu.png"
                alt="Ubuntu"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium">Kali Linux</h3>
              <Image
                src="/images/kali.png"
                alt="Kali Linux"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* macOS Section */}
        <section className="py-8 px-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">macOS</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
            macOS, dezvoltat de Apple, oferă o interfață elegantă și intuitivă,
            optimizată pentru computerele Mac cu integrare perfectă în ecosistemul
            Apple.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/macos.jpg"
                alt="MacOS"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* ChromeOS Section */}
        <section className="py-8 px-6 bg-gray-800 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-4">ChromeOS</h2>
          <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto">
          Chrome OS este un sistem de operare creat de Google, care se bazează pe kernelul Linux și utilizează navigatorul web Google Chrome ca interfață principală a utilizatorului.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Image
                src="/images/chromeos.webp"
                alt="ChromeOS"
                width={300}
                height={200}
                className="rounded-md shadow-lg mx-auto transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gradient-to-r from-gray-800 to-gray-900">
        <p className="text-sm text-gray-500">
          &copy; 2025 Stancu Eduard Andrei - Realizat pentru proiect.
        </p>
      </footer>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center shadow-md transform hover:bg-gray-600 hover:scale-110 transition-all duration-300"
        aria-label="Go to Top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
