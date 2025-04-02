"use client";
import Image from "next/image"; // Keep only one import statement for Image
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

/**
 * Home component that serves as the main entry point for the application.
 * It displays a welcoming message and a search form for Tailwind CSS components.
 *
 * @returns {JSX.Element} The rendered Home component.
 */

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Design', 'Tailwind CSS', 'React', 'Next.js'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug   md:text-4xl">
            A <span className="font-semibold">free repository</span> for community
            <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              {/* Form content */}
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section>
        <div className="py-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 ">Choose Your Plan</h2>
            <div className="flex flex-wrap justify-center space-x-0 md:space-x-4">
              {/* Basic Plan */}
              <div className="shadow-lg rounded-lg p-6 w-full sm:w-1/3 m-4 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 ">Basic</h3>
                <p className="text-2xl font-bold mb-4 ">$10/month</p>
                <ul className="mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">✔ Feature 1</li>
                  <li className="mb-2">✔ Feature 2</li>
                  <li className="mb-2">✔️ Feature 3</li>
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Select Plan</button>
              </div>

              {/* Standard Plan */}
              <div className="shadow-lg rounded-lg p-6 w-full sm:w-1/3 m-4 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 ">Standard</h3>
                <p className="text-2xl font-bold mb-4 ">$20/month</p>
                <ul className="mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">✔ Feature 1</li>
                  <li className="mb-2">✔ Feature 2</li>
                  <li className="mb-2">✔ Feature 3</li>
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Select Plan</button>
              </div>

              {/* Premium Plan */}
              <div className="shadow-lg rounded-lg p-6 w-full sm:w-1/3 m-4 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 ">Premium</h3>
                <p className="text-2xl font-bold mb-4 ">$30/month</p>
                <ul className="mb-6 text-gray-600 dark:text-gray-300">
                  <li className="mb-2">✔ Feature 1</li>
                  <li className="mb-2">✔ Feature 2</li>
                  <li className="mb-2">✔ Feature 3</li>
                </ul>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 transition-transform duration-500 transform hover:scale-105">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 ">Join Our Community</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Be part of a vibrant community of developers and designers. Share your ideas, get feedback, and collaborate on exciting projects!
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </section>


    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Top Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/blog1.webp"
              alt="TypeScript Blog"
              className="w-full h-64 object-cover"
              width={500}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Blog Title 1</h3>
              <p className="text-gray-600 mt-2">A brief description of the blog post goes here.</p>
              <Button className="m-2" variant="outline">Read more</Button>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/blog2.webp"
              alt="Blog 2"
              className="w-full h-64 object-cover"
              width={500}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Blog Title 2</h3>
              <p className="text-gray-600 mt-2">A brief description of the blog post goes here.</p>
              <Button className="m-2" variant="outline">Read more</Button>
            </div>
          </div>
          
          {/* Blog 3 */}
          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/blog3.jpg"
              alt="Blog 3"
              className="w-full h-64 object-cover"
              width={500}
              height={200}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Blog Title 3</h3>
              <p className="text-gray-600 mt-2">A brief description of the blog post goes here.</p>
              <Button className="m-2" variant="outline">Read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
