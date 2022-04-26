import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import { AdminMenu, UserNavLeft, UserNavRight, NavLeft, NavRight } from './UserNav';

const Header = () => {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (<NavLeft isActive={isActive} />);

  let right = null;

  if (status === 'loading') {
    left = (<NavLeft isActive={isActive} />);
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (<NavRight isActive={isActive} />);
  }

  if (session) {
    if (session.user) {
      const { admin } = session.user; 
      const info = `${session.user.name} ${session.user.email}`
      left = (<UserNavLeft isActive={isActive} />);
      right = !admin ? (
        <UserNavRight isActive={isActive} info={info} signOut={signOut} />
        ) : (
        <AdminMenu isActive={isActive} info={info} signOut={signOut} />
      );
    } else {
      right = (<NavRight isActive={isActive} />);
    }
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
          color: white;
        }
      `}</style>
    </nav>
  );
};

export default Header;
