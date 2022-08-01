import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import Image from 'next/image';

// Import required actions.
import { fill } from '@cloudinary/url-gen/actions/resize';

function OptimizationImageExample() {

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldImg = new CloudinaryImage(
    'images/forest-reflection',
    cloudConfig,
    urlConfig
  );

  // Perform the transformation.
  cldImg
    .resize(fill().width(600).height(300)) // fill the image
    .format('auto') // f_auto */
    .quality('auto'); // q_auto

  // log the transformation
  const cldURL = cldImg.toURL();
  console.log('image optimization:', cldURL);

  return (
    <Image
      width='600'
      height='300'
      src={cldURL}
      alt='Optimized Image'
      priority='true'
    />
  );
}

export default OptimizationImageExample;
