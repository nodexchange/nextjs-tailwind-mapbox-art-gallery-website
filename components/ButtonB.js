import Link from 'next/link';

function ButtonB({ path, title }) {
  return (
    <div className="absolute top-0 flex cursor-pointer md:ml-8 lg:ml-40 group h-[38px] sm:h-[38px] md:h-btn">
      <Link href={path}>
        <div className="h-[72px] flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine">
          <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
          </svg>
        </div>
      </Link>
      <Link
        href={path}
        className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-almostBlack group-hover:bg-shine font-bigShoulder text-button">
        {title}
      </Link>
    </div>
  );
}

export default ButtonB;
