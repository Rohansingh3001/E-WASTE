import React from "react";
import { Recycle, Zap, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-green-400 text-2xl font-bold">EcoJunk</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/add-ewaste" className="text-gray-300 hover:text-white">AddEwaste</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            EcoJunk: The Future of E-Waste
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Join the revolution in electronic waste management. Recycle smarter, live greener.
        </p>
        <Link to="/auth">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition">
            Start Recycling Now
          </button>
        </Link>
      </main>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16 px-6 md:px-20">
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
          <Cpu className="w-12 h-12 text-green-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Protect the Environment</h2>
          <p>
            E-waste contains toxic materials that can harm our ecosystem. Proper management prevents these toxins from
            polluting our soil and water.
          </p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
          <Recycle className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Conserve Resources</h2>
          <p>
            Many electronic components contain valuable materials that can be recycled. E-waste management helps
            conserve these finite resources.
          </p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg">
          <Zap className="w-12 h-12 text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Energy Efficiency</h2>
          <p>
            Recycling e-waste requires less energy than mining and processing new raw materials, contributing to
            overall energy conservation.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg mb-16 mx-6 md:mx-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Why E-Waste Management Matters</h2>
        <p className="text-lg mb-4">
          Electronic waste, or e-waste, is one of the fastest-growing waste streams in the world. As technology
          advances and we upgrade our devices more frequently, the amount of discarded electronics continues to rise
          at an alarming rate.
        </p>
        <p className="text-lg mb-4">Proper e-waste management is crucial because:</p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>It prevents hazardous materials from harming the environment and human health</li>
          <li>It recovers valuable materials that can be reused in manufacturing</li>
          <li>It reduces the need for mining new raw materials, which has significant environmental impacts</li>
          <li>It helps in reducing carbon emissions associated with the production of new electronics</li>
        </ul>
        <p className="text-lg">
          By using <span className="text-green-400 font-bold">EcoJunk</span>, you're taking an important step towards responsible e-waste management and contributing to
          a more sustainable future.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-gray-800 text-center py-6">
        <p className="text-gray-300">&copy; 2025 All rights reserved. Made by Team Hackaholics.</p>
      </footer>
    </div>
  );
};

export default Home;
