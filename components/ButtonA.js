import Link from 'next/link';

function ButtonA({ path, title }) {
  return (
    <div className="top-0 flex cursor-pointer group h-btn justify-center">
      <Link
        href={path}
        className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-almostBlack group-hover:bg-shineDark font-bigShoulder text-button">
        {title}
      </Link>
      <div className="flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine">
        <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
        </svg>
      </div>
    </div>
  );
}

export default ButtonA;
