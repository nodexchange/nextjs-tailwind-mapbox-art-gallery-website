import Link from 'next/link';

const ProfileIcon = () => {
  return (
    <div className="row flex flex-row gap-5 justify-center">
      <Link href="/account/profile" passHref>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:fill-almostBlack dark:hover:fill-white hover:fill-shine transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default ProfileIcon