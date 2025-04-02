import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">Email: <a href="mailto:harshmisha.1520@gmail.com" className="text-blue-600 hover:text-blue-800">harshmisha.1520@gmail.com</a></p>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">Mobile: <a href="tel:834914587" className="text-blue-600 hover:text-blue-800">834914587</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}