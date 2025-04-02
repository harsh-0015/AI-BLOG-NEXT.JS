// pages/about.jsx
"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Effect to detect system preference and localStorage setting
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }

    // Listen for theme changes (from your theme toggle button)
    const handleStorageChange = () => {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setDarkMode(false);
      }
    };

    // Listen for storage events (when theme is changed in another tab)
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>AI -assisted-blog | About</title>
        <meta name="description" content="Dive into the world of modern programming with AI -assisted-blog - Your source for cutting-edge tech insights and development tutorials" />
      </Head>

      <div className="min-h-screen ">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold">
                Welcome to AI -assisted-blog
              </h1>
              <p className="mt-4 text-xl ">
                Where code refracts into endless possibilities
              </p>
              
              {/* Tech Stack Tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'TypeScript', 'Python', 'AI/ML', 'DevOps'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-50  transition-all cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-md p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">🚀</span> Our Mission
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Empowering developers with crystal-clear tutorials, real-world projects, 
                and the latest tech insights. We break down complex concepts into 
                prismatic knowledge fragments.
              </p>
            </div>

            <div className=" shadow-md p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">💡</span> What We Do
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                From Next.js deep dives to Python wizardry, cloud architectures to 
                AI implementations. We explore the full spectrum of modern 
                development.
              </p>
            </div>

            <div className=" shadow-md p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">👨‍💻</span> The Crew
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                A collective of full-stack navigators, open-source contributors, 
                and tech evangelists. We are obsessed with clean code and 
                innovative solutions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Level Up Your Coding Skills?
            </h3>
            <button className=" px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-neutral-400/20 transition-all">
              Dive Into the Blog
            </button>
          </div>
        </main>
      </div>
    </>
  );
}