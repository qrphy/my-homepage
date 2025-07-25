export default function HomePage() {
  return (
    <>
      <div className="space-y-0">
        <p className="text-[15px] leading-6 text-gray-100 font-normal mb-4">
          I'm currently working on frontend projects and sharing them on
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#08d9d6] no-underline hover:text-[#e84545] transition-all duration-300 ease-in-out hover:drop-shadow-[2px_2px_10px_#d2daff] drop-shadow-[2px_2px_12px_#08d9d6]"
          >
            {" "}
            GitHub
          </a>
          .
        </p>
        
        <p className="text-[15px] leading-6 text-grey-100 font-normal mb-4">
          Feel free to check them out and reach out for{" "}
          <a 
            href="mailto:furkantitiz96@gmail.com"
            className="text-[#08d9d6] no-underline hover:text-[#e84545] transition-all duration-300 ease-in-out hover:drop-shadow-[2px_2px_10px_#d2daff] drop-shadow-[2px_2px_12px_#08d9d6]"
          >
            collaboration
          </a>
          .
        </p>
        
        <br />
        
        <p className="text-[15px] leading-6 text-gray-100 font-normal mb-4">
          Outside of coding, I enjoy watching F1 races, tennis matches, and
          listening to music.
        </p>
        
        <h4 className="text-lg font-semibold mt-[70px] mb-5">Contact</h4>
        
        <p className="text-[15px] leading-6 text-gray-100 font-normal mb-4">
          You can reach me via email at{" "}
          <a 
            href="mailto:furkantitiz96@gmail.com"
            className="text-[#08d9d6] no-underline hover:text-[#e84545] transition-all duration-300 ease-in-out hover:drop-shadow-[2px_2px_10px_#d2daff] drop-shadow-[2px_2px_12px_#08d9d6]"
          >
            furkantitiz96@gmail.com
          </a>
          , or catch me on{" "}
          <a 
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#08d9d6] no-underline hover:text-[#e84545] transition-all duration-300 ease-in-out hover:drop-shadow-[2px_2px_10px_#d2daff] drop-shadow-[2px_2px_12px_#08d9d6]"
          >
            LinkedIn
          </a>
          .
        </p>
        
        <div className="flex-shrink-0 mt-[50px]">
          <img 
            src="/YoungKnight.jpg" 
            alt="Young Knight in a Landscape by Vittore Carpaccio 1510" 
            className="max-w-[150px] w-full h-auto rounded-md sm:max-w-[120px]"
          />
          <p className="mt-2 text-[10px] text-gray-400 italic font-light max-w-[150px] sm:text-[8px]">
            Young Knight in a Landscape by Vittore Carpaccio 1510
          </p>
        </div>
      </div>
    </>
  );
}