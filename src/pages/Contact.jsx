import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const heroImages = [
  {
    url: "/images/CINEC-CINEC-Campus.jpg",
    title: "Step Into Tecstricke",
    subtitle: "Empowering Future Innovators",
  },
  {
    url: "/images/hero3.jpg",
    title: "Explore Our Modern Facilities",
    subtitle: "A Space Designed for Learning and Growth",
  },
  {
    url: "/images/hero1.jpg",
    title: "Building Bright Futures at Tecstricke",
    subtitle: "A Place Designed for Your Success",
  },
  {
    url: "/images/hero5.jpg",
    title: "Join Our Community",
    subtitle: "Let’s Build a Brighter Future Together",
  },
];


  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="App min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Building Bright Futures at Tecstricke
            </p>
          </div>
        </div>
      </header>
      {/* Hero Slider */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {heroImages[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              {heroImages[currentSlide].subtitle}
            </p>
            <div className="mt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Contact Us
              </h2>
              <p className="text-lg">Get in touch with our team</p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How to Find Us
              </h2>
              <p className="text-gray-600 mb-8">
                If you have any questions, just fill in the contact form, and we
                will answer you shortly.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <p className="text-gray-700 font-medium">
                      CINEC Campus (Pvt) Ltd.
                    </p>
                    <p className="text-gray-700">
                      Millennium Drive, IT Park, Malabe, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Telephone: +11 2 413 505</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    E-mail:{" "}
                    <a
                      href="mailto:info@cinec.edu"
                      className="text-blue-600 hover:underline"
                    >
                      info@cinec.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Find Us on Map
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.965805810764!2d79.95792797414726!3d6.895477693105151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25751e7d16d27%3A0xf8cfc7de0b6e0d7f!2sCINEC%20Campus!5e0!3m2!1sen!2slk!4v1720773286789!5m2!1sen!2slk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-72"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/place/CINEC+Campus/@6.8954777,79.957928,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  <MapPin size={16} className="mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>{" "}
         
          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">#</span>
            </div>
            <span className="text-xl font-bold">TaxExpert</span>
          </div>
          <p className="text-gray-400">
            © 2025 TaxExpert. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
