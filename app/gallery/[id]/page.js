import { Footer, Header, Gallery } from '@/components';
import React from 'react';

export default function GalleryPage({ params }) {
  const { id } = params;
  return (
    <React.Fragment>
      <Header />
      <Gallery galleryId={id} />
      <Footer />
    </React.Fragment>
  )
}