import Footer from '@/common/Footer/Footer';
import Navigation from '@/common/Navigation/Navigation';
import '@/css/style.css'

const metadata = {
  title: {
    default: "Azar Ahmadov | Personal Portfolio",
    template: `Azar Ahmadov | %s `,
  },
  description: "Azar Ahmadov personal website. This is a place where you can find my projects and information about me.",
  url: "https://azarahmadov.com/",
  image: "/hero.jpg",
  type: "website",
  locale: "en_US"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <link rel="icon" type="image/x-icon" href='/logo.png' />
      <meta name="keywords" content="Azar Ahmadov, Azər Əhmədov, Web Developer, Front-end developer, Html, Css, Js, Javascript, React, React.js, Next js, Node, Node.js" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Azar Ahmadov" />
      <meta property="og:title" content={metadata.title.default} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:type" content={metadata.type} />
      <meta property="og:locale" content={metadata.locale} />

      <body className='dark:bg-[#0a0d19]'>
        {children}
        <Navigation />
        <Footer />
      </body>
    </html>
  );
}
