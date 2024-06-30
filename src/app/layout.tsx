import Footer from '@/common/Footer/Footer';
import '../css/style.css'
import { Metadata } from 'next';
import Navigation from '@/common/Navigation/Navigation';

export const metadata: Metadata = {
  title: {
    default: "Azar Ahmadov | Personal Portfolio",
    template: `Azar Ahmadov | %s `,
  },
  description: 'Azar Ahmadov personal website. This is a place where you can find my projects and information about me.',
  metadataBase: new URL('https://azarahmadov.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/round-icons-vol-2/512/Code_javascript_development-512.png" />
        <meta name="keywords" content="Azar Ahmadov, Azər Əhmədov, Web Developer, Front-end developer, Html, Css, Js, Javascript, React, React.js, Next js, Node, Node.js" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Azar Ahmadov" />
      </head>
      <body className='dark:bg-[#0a0d19]'>
        {children}
        <Navigation />
        <Footer />
      </body>
    </html>
  );
}
