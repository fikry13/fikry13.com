import { ReactNode } from 'react';
import Head from 'next/head';
import SocialButton from '../components/SocialButton';
import { Facebook, Github, Instagram, LinkedIn, Twitter, Mail } from '../icons';

export default function Home(): ReactNode {
  return (
    <>
      <Head>
        <title>Fikry Abdullah Aziz Personal Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content="Fikry Abdullah Aziz Personal Site" />
        <meta
          name="description"
          content="Personal site of Fikry Abdullah Aziz, it will be housing his blogs, portfolios, contacts, or everything that the public needs to know about him."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fikry13.com/" />
        <meta property="og:title" content="Fikry Abdullah Aziz Personal Site" />
        <meta
          property="og:description"
          content="Personal site of Fikry Abdullah Aziz, it will be housing his blogs, portfolios, contacts, or everything that the public needs to know about him."
        />
        <meta property="og:image" content="/images/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fikry13.com/" />
        <meta property="twitter:title" content="Fikry Abdullah Aziz Personal Site" />
        <meta
          property="twitter:description"
          content="Personal site of Fikry Abdullah Aziz, it will be housing his blogs, portfolios, contacts, or everything that the public needs to know about him."
        />
        <meta property="twitter:image" content="/images/thumbnail.png" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen text-gray-800 bg-gray-50">
        <div className="relative w-11/12 mx-auto overflow-hidden bg-white shadow-lg lg:w-1/3 rounded-xl">
          <div className="w-full h-24 overflow-hidden">
            <img src="/images/cover.png" alt="cover" className="w-full" />
          </div>
          <img
            src="/images/avatar.png"
            alt="avatar"
            className="absolute w-24 mx-auto -ml-12 border-4 border-white rounded-full top-10 left-1/2"
          />
          <div className="p-4 mt-10">
            <div className="flex flex-col items-center justify-center">
              <div className="text-md">Hi! My Name is</div>
              <div className="text-xl font-bold">Fikry Abdullah Aziz</div>
              <div className="text-md">and I do too much stuff!</div>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-1">
              <SocialButton
                icon={<Github />}
                href="https://www.github.com/fikry13"
                rel="norefferer noopener"
                target="_blank"
              />
              <SocialButton
                icon={<LinkedIn />}
                href="https://www.linkedin.com/in/fikry13"
                rel="norefferer noopener"
                target="_blank"
              />
              <SocialButton
                icon={<Twitter />}
                href="https://www.twitter.com/fikry13_"
                rel="norefferer noopener"
                target="_blank"
              />
              <SocialButton
                icon={<Instagram />}
                href="https://www.instagram.com/fikry13"
                rel="norefferer noopener"
                target="_blank"
              />
              <SocialButton
                icon={<Facebook />}
                href="https://www.facebook.com/fikry13"
                rel="norefferer noopener"
                target="_blank"
              />
              <SocialButton
                icon={<Mail />}
                href="mailto:hello@fikry13.com"
                rel="norefferer noopener"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
