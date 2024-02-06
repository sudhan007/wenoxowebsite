"use client";
import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateViewportHeight);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  const pdfUrl = "/portfolio.pdf";

  return (
    <div id="pdf-container" style={{ height: '100%' }}>
      <object data={pdfUrl} type="application/pdf" width="100%" height={viewportHeight}>
        If you are unable to view the PDF, you can <a href={pdfUrl}>download it here</a>.
      </object>
    </div>
  );
};

export default Portfolio;