export default function BottomNav() {
  return (
    <>
      <svg
        className="bottom-0 left-0 z-[9] fixed w-full object-cover"
        width="100%"
        height="109"
        viewBox="0 0 1913 79"
        fill="white"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M29.5 68.0396C756.304 85.792 1061.95 86.5569 1882 70.6583C1912 60.1583 1912 1 1912 1H29.5C1 1 1 60.1583 29.5 68.0396Z"
          fill="white"
          stroke="lightgray"
          strokeWidth="1"
          transform="scale(1, -1) translate(0, -98)"
        />
      </svg>

      <div className="right-0 bottom-10 left-0 z-[9999] fixed flex justify-center items-center px-4">
        <div className="relative top-4 z-[auto] flex justify-center items-center space-x-[60%] md:space-x-[500px] w-full">
          <button className="py-2 rounded-full text-white">
            <img src="/icon-1.png" alt="Icon 1" className="w-8 md:w-8 h-8 md:h-8" />
          </button>

          <button className="px-6 py-2 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35" height="35" viewBox="0 0 194 194"
              fill="none"
            >
              <g fill="#CACACA">
                <path d="M147.04,144.34c-7.02,0-13.6-2.7-18.57-7.67L101.7,109.9c-1.84-1.84-5.18-1.84-7.02,0L67.8,136.78c-4.97,4.97-11.55,7.67-18.57,7.67h-5.29l34.01,34.01c10.58,10.58,27.85,10.58,38.43,0l34.11-34.11L147.04,144.34L147.04,144.34z"></path>
                <path d="M49.12,49.55c7.02,0,13.6,2.7,18.57,7.67L94.57,84.1c1.94,1.94,5.07,1.94,7.02,0l26.88-26.77c4.97-4.97,11.55-7.67,18.57-7.67h3.24l-34.11-34.11c-10.58-10.58-27.85-10.58-38.43,0L43.72,49.55H49.12L49.12,49.55z"></path>
                <path d="M178.45,77.84l-20.62-20.62c-0.43,0.22-0.97,0.32-1.51,0.32h-9.39c-4.86,0-9.61,1.94-12.95,5.4L107.2,89.71c-2.48,2.48-5.83,3.78-9.07,3.78c-3.35,0-6.59-1.3-9.07-3.78L62.18,62.83c-3.45-3.45-8.2-5.4-12.95-5.4H37.68c-0.54,0-0.97-0.11-1.4-0.32L15.55,77.84c-10.58,10.58-10.58,27.85,0,38.43l20.62,20.62c0.43-0.22,0.86-0.32,1.4-0.32h11.55c4.86,0,9.61-1.94,12.95-5.4l26.88-26.88c4.86-4.86,13.39-4.86,18.24,0l26.77,26.77c3.45,3.45,8.2,5.4,12.95,5.4h9.39c0.54,0,0.97,0.11,1.51,0.32l20.62-20.62C189.03,105.58,189.03,88.42,178.45,77.84"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
