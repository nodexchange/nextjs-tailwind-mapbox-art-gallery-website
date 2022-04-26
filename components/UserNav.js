import Link from 'next/link';

const NavLeft = ({ isActive }) => (
  <div className="left">
    <Link href="/">
      <a className="bold" data-active={isActive('/')}>
        Home page
      </a>
    </Link>
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
    <Link href="/api/auth/signin">
      <a data-active={isActive('/signup')}>Log in</a>
    </Link>
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
      <Link href="/">
        <a className="bold" data-active={isActive('/')}>
          Home Page
        </a>
      </Link>
      <Link href="/payments">
        <a data-active={isActive('/payments')}>Payments</a>
      </Link>
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
    <p>
      {info}
    </p>
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
    <Link href="/account/profile">
      <a className="bold" data-active={isActive('/')}>
        Profile
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
