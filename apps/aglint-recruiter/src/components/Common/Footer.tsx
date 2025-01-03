'use client';
import Image from 'next/image';
import React from 'react';

interface FooterProps {
  brand?: boolean;
}

const Footer: React.FC<FooterProps> = ({ brand = false }) => {
  return (
    <footer className='flex items-center justify-center py-4'>
      {brand ? (
        <div className='flex items-center justify-center'>
          <p className='flex items-center text-sm text-muted-foreground'>
            Powered by{' '}
            <Image
              src='/images/brand/footer-logo.svg'
              alt='Aglint Logo'
              width={16}
              height={16}
              className='mx-1'
            />{' '}
            &copy; {new Date().getFullYear()} Aglint Inc. All rights reserved.
          </p>
        </div>
      ) : (
        <p className='text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} Aglint Inc. All rights reserved.
        </p>
      )}
    </footer>
  );
};

export default Footer;
