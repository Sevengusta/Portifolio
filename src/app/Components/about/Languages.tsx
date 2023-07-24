import React from "react";

const Languages = () => {
  return (
    <div className="flex gap-4 justify-around mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 512 512"
        id="javascript"
        className="ease-out duration-300 cursor-pointer transform hover:scale-125"
      >
        <linearGradient id="color" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#ef4444" offset="0%" />
          <stop stopColor="#f97316" offset="100%" />
        </linearGradient>
        <g transform="translate(384 48)" fill="url(#color)">
          <path d="M-192 56.001v197.017c0 41.567-9.644 71.988-28.662 90.417-17.06 16.53-42.061 24.565-76.431 24.565-12.002 0-25.78-1.496-37.185-3.886l4.09-30.505c7.146 1.269 15.465 2.149 24.774 2.149 21.92 0 37.892-6.459 48.827-19.745C-245.27 302.268-240 282.085-240 252.499V56.001h48m16-16h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L-352 375.904c14.7 5.062 37.259 8.096 54.907 8.096C-225.045 384-176 350.129-176 253.02V40.001zM-1.537 48c24.458 0 45.898 3.146 65.1 9.585l-9.581 32.062C40.37 84.142 21.446 78.71-2.504 78.71c-18.607 0-34.462 4.584-45.849 13.256-11.732 8.936-18.194 21.583-18.194 35.613 0 34.974 33.062 48.149 71.347 63.405l.107.043.108.041c26.977 10.299 45.938 22.261 57.969 36.572C74.593 241.451 80 257.543 80 278.284c0 25.177-9.333 46.71-26.99 62.274-20.35 17.939-51.417 27.422-89.843 27.422-28.052 0-54.698-6.427-72.615-13.979l7.593-31.603c17.579 7.248 41.882 14.382 69.438 14.382 20.28 0 36.629-4.478 48.591-13.306 12.807-9.45 19.857-23.697 19.857-40.119 0-15.348-6.041-27.922-18.469-38.444-10.157-8.603-24.801-16.048-47.467-24.136-26.86-9.904-47.359-21.947-60.934-35.795C-105.078 170.455-112 153.829-112 134.154c0-24.149 9.831-45.101 28.43-60.591C-63.49 56.839-35.124 48-1.537 48m0-16C-78.98 32-128 75.998-128 134.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L-128 362.727c18.639 10.638 53.441 21.255 91.167 21.255C53.854 383.98 96 335.43 96 278.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C63.125 39.22 36.188 32-1.537 32z"></path>
        </g>
      </svg>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={80} 
        height={80} 
        viewBox="0 0 24 24" 
        id="php"
        className="ease-out duration-300 cursor-pointer transform hover:scale-125"
      >
        
        <g fill="url(#color)">
          <path d="M12 19c-6.729 0-12-3.075-12-7s5.271-7 12-7 12 3.075 12 7-5.271 7-12 7zm0-13C5.935 6 1 8.691 1 12s4.935 6 11 6 11-2.691 11-6-4.935-6-11-6z"></path>
          <path d="M5.501 16a.5.5 0 0 1-.494-.582l.33-1.98a.475.475 0 0 1 .007-.04l.663-3.979A.5.5 0 0 1 6.5 9h1.371c.552 0 1.071.244 1.424.669.354.425.498.98.396 1.524l-.194 1.036A2.171 2.171 0 0 1 7.364 14H6.257l-.264 1.582a.5.5 0 0 1-.492.418zm.923-3h.94c.562 0 1.046-.401 1.15-.955l.194-1.035A.853.853 0 0 0 7.871 10h-.947l-.5 3zm9.327 3a.5.5 0 0 1-.494-.582l.33-1.98a.475.475 0 0 1 .007-.04l.663-3.979A.5.5 0 0 1 16.75 9h1.371c.552 0 1.071.244 1.424.669.354.425.498.98.396 1.524l-.194 1.036A2.171 2.171 0 0 1 17.614 14h-1.107l-.264 1.582a.5.5 0 0 1-.492.418zm.923-3h.94c.562 0 1.046-.401 1.15-.955l.194-1.035a.853.853 0 0 0-.837-1.01h-.947l-.5 3zm-5.673 1a.5.5 0 0 1-.494-.582l1-6a.5.5 0 0 1 .986.164l-1 6a.5.5 0 0 1-.492.418z"></path>
          <path d="M14.001 14a.5.5 0 0 1-.496-.57l.359-2.518a.36.36 0 0 0-.356-.412H11.75a.5.5 0 0 1 0-1h1.758a1.36 1.36 0 0 1 1.346 1.554l-.359 2.517a.5.5 0 0 1-.494.429z"></path>
        </g>
      </svg>
    </div>
  );
};

export default Languages;
