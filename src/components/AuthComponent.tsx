import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export function AuthComponent() {
  const { data: session } = useSession();
  return (
    <div style={{ padding: '50px', minHeight: '400px' }}>
      {session ? (
        <>
          <h3>Signed in as {session?.user?.email}</h3>
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h3>Not signed in</h3>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
