import Link from 'next/link';

function ButtonA({ path, title, target = '_self' }) {
  return (
    <div className="top-0 flex cursor-pointer group h-btn justify-center">
      <Link
        href={path}
        target={target}
        className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-almostBlack group-hover:bg-shine font-bigShoulder text-button">
        {title}
      </Link>
      <Link href={path}>
        <div className="flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine h-[72px]">
          <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default ButtonA;
