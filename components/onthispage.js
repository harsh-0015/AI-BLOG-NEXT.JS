"use client"
import React, { useEffect, useState } from 'react';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Function to extract headings from the actual DOM once content is rendered
    const extractHeadings = () => {
      // Target the main content area - you'll need to adjust this selector to match your layout
      const contentArea = document.querySelector('.blog-content'); 
      
      if (contentArea) {
        // Get all h2 and h3 headings in the content area
        const headingElements = contentArea.querySelectorAll('h2, h3');
        
        const extractedHeadings = Array.from(headingElements).map(heading => ({
          text: heading.textContent,
          id: heading.id || createIdFromText(heading.textContent),
          level: heading.tagName.toLowerCase()
        }));
        
        setHeadings(extractedHeadings);
        
        // Ensure all headings have IDs for anchor links
        headingElements.forEach(heading => {
          if (!heading.id) {
            heading.id = createIdFromText(heading.textContent);
          }
        });
      }
    };
    
    // Helper function to create IDs from heading text
    const createIdFromText = (text) => {
      return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    };
    
    // Extract headings after a short delay to ensure content is rendered
    const timer = setTimeout(() => {
      extractHeadings();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [htmlContent]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="on-this-page rounded bg-gray-50 p-4 sticky top-24">
      <h2 className="text-lg font-bold mb-3">On This Page</h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`${heading.level === 'h3' ? 'ml-4' : ''}`}
          >
            <a 
              href={`#${heading.id}`}
              className="hover:text-blue-600 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;