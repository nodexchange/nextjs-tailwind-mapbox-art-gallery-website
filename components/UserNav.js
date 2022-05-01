import Link from 'next/link';
import SocialIcons from './SocialIcons';
import ProfileIcon from './ProfileIcon';
import LogoutIcon from './LogoutIcon';
import LoginIcon from './LoginIcon';
import HomeIcon from './HomeIcon';


const NavLeft = ({ isActive }) => (
  <div className="left">
    <style jsx>{`
      .bold {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: var(--geist-foreground);
        display: inline-block;
      }

      .left a[data-active='true'] {
        color: gray;
      }

      a + a {
        margin-left: 1rem;
      }
    `}</style>
  </div>
);

const NavRight = ({ isActive }) => (
  <div className="right">
    <div className='absolute top-4 right-2 gap-3 lg:right-20 md:right-20 md:top-10 sm:gap-5 sm:top-5 row flex flex-row justify-center'>
      <LoginIcon />
      <div className="hidden md:inline">
        <SocialIcons />
      </div>
    </div>
    <style jsx>{`
      a {
        text-decoration: none;
        color: var(--geist-foreground);
        display: inline-block;
      }

      a + a {
        margin-left: 1rem;
      }

      .right {
        margin-left: auto;
      }

      .right a {
        border: 1px solid var(--geist-foreground);
        padding: 0.5rem 1rem;
        border-radius: 3px;
      }
    `}</style>
  </div>
);


const UserNavLeft = ({ isActive }) => {
  return (
    <div className="left">
      {/* <Link href="/"> */ }
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};



const UserNavRight = ({ isActive, info, signOut }) => (
  <div className="right">
    <div className='absolute top-4 right-2 gap-3 lg:right-20 md:right-20 md:top-10 sm:gap-5 sm:top-5 row flex flex-row justify-center'>
      <p className="hidden text-sm pr-1 lg:inline-block">
        Welcome, {info}
      </p>
      <HomeIcon />
      <ProfileIcon />
      <LogoutIcon action={signOut} />
      <div className="hidden md:inline">
        <SocialIcons />
      </div>
    </div>
    <style jsx>{`
      a {
        text-decoration: none;
        color: var(--geist-foreground);
        display: inline-block;
      }

      a + a {
        margin-left: 1rem;
      }

      .right {
        margin-left: auto;
      }

      .right a {
        border: 1px solid var(--geist-foreground);
        padding: 0.5rem 1rem;
        border-radius: 3px;
      }

      button {
        border: none;
      }
    `}</style>
  </div>
);

const AdminMenu = ({ isActive, info, signOut }) => (
  <div className="right">
    <p>
      {info}
    </p>
    <Link href="/admin/customers">
      <a className="bold" data-active={isActive('/')}>
        Customers
      </a>
    </Link>
    <button onClick={() => signOut()}>
      <a>Log out</a>
    </button>
    <style jsx>{`
      a {
        text-decoration: none;
        color: var(--geist-foreground);
        display: inline-block;
      }

      p {
        display: inline-block;
        font-size: 13px;
        padding-right: 1rem;
      }

      a + a {
        margin-left: 1rem;
      }

      .right {
        margin-left: auto;
      }

      .right a {
        border: 1px solid var(--geist-foreground);
        padding: 0.5rem 1rem;
        border-radius: 3px;
      }

      button {
        border: none;
      }
    `}</style>
  </div>
);

export { UserNavLeft, UserNavRight, NavLeft, NavRight, AdminMenu };
