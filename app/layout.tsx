import SideBar from '../components/SideBar';
import '../styles/globals.css';
import { getServerSession } from 'next-auth';
import { SessionProvider } from '../components/SessionProvider';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from '../components/Login';
import ClientProvider from '../components/ClientProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (

            <div className='flex'> 
          <div className='bg-[#202123] max-w-xs h-screen overflow-x-hidden min-w-fit md:min-w-[20rem]'>
            <SideBar />
          </div>
          {/* clientProvider - notifications */}
          <ClientProvider />
        <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
          )}
        </SessionProvider>
        </body>
    </html>
  )
}
