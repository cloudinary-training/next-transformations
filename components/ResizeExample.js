import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import Image from 'next/image';

// Import required actions.
import { fill } from '@cloudinary/url-gen/actions/resize';

function ResizeExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldImg = new CloudinaryImage('cld-sample-3', cloudConfig, urlConfig);

  // Perform the transformation.
  cldImg
    .resize(fill().width(600).height(400).gravity('auto')) // Crop the image
    .format('png'); // Deliver as PNG. */

  // log the transformation
  const cldURL = cldImg.toURL();
  const transform = cldURL.split('/')[6];
  console.log('resize:', cldURL);

  return (
    <div>
      <h3>{transform}</h3>
      <Image
        width='600'
        height='400'
        src={cldURL}
        alt='Resized Image'
        priority='true'
      />
    </div>
  );
}

export default ResizeExample;
