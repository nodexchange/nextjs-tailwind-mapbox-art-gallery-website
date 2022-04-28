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
    <div className='absolute top-10 lg:right-20 sm:right-12 row flex flex-row gap-5 justify-center'>
      <LoginIcon />
      <SocialIcons />
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
    <div className='absolute top-10 lg:right-20 sm:right-12 row flex flex-row gap-5 justify-center'>
      <p>
        Welcome, {info}
      </p>
      <HomeIcon />
      <ProfileIcon />
      <LogoutIcon action={signOut} />
      <SocialIcons />
    </div>
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
