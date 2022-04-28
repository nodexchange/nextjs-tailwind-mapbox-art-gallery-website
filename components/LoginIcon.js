import Link from 'next/link';

const LoginIcon = () => {
  return (
    <div className="row flex flex-row gap-5 justify-center">
        <Link href="/api/auth/signin" passHref>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:fill-almostBlack dark:hover:fill-white hover:fill-shine transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </a>
        </Link>
    </div>
  )
}

export default LoginIcon;