import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import ResizeExample from '../components/ResizeExample';
import CropExample from '../components/CropExample';
import OptimizationImageExample from '../components/OptimizationImageExample';
import OptimizationVideoExample from '../components/OptimizationVideoExample';
import EffectsExample from '../components/EffectsExample';
import ImageOverlayExample from '../components/ImageOverlayExample';
import VideoOverlayExample from '../components/VideoOverlayExample';
import DocsImage from '../components/DocsImage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudinary Transformations</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='box'>
        <div>
          <h2>Resize Example: fit</h2>
          <ResizeExample />
        </div>
        <div>
          <h2>Resize with Crop Example: thumb, g_face</h2>
          <CropExample />
        </div>
        <div>
          <h2>Optimization Image: fill, f_auto,q_auto</h2>
          <OptimizationImageExample />
        </div>
        <div>
          <h2>Optimization Video: f_auto, q_auto</h2>
          <OptimizationVideoExample />
        </div>
        <div>
          <h2>Effects: sepia with rounded corners</h2>
          <EffectsExample />
        </div>
        <div>
          <h2>Overlay: Image with Text</h2>
          <ImageOverlayExample />
        </div>
        <div>
          <h2>Overlay: Video with Image</h2>
          <VideoOverlayExample />
        </div>
        <div>
          <h2>Image From Documentation Example</h2>
          <DocsImage />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
