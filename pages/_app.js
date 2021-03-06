import React from 'react'
import { SessionProvider, getSession, useSession, signIn, signOut } from 'next-auth/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
      <button onClick={() => signOut()}>Sign out</button>
    </SessionProvider>
  );
}

export default MyApp

export async function getInitialProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}

function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  React.useEffect(() => {
    if (status === "loading") return // Do nothing while loading
    if (!isUser) signIn(null, {redirect: false}) // If not authenticated, force log in
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}