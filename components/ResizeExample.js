import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Import required actions.
import { fit } from '@cloudinary/url-gen/actions/resize';

function ResizeExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldImg = new CloudinaryImage('cld-sample-3', cloudConfig, urlConfig);

  // Perform the transformation.
  cldImg
    .resize(fit().width(600).height(400)) // Crop the image
    .format('png'); // Deliver as PNG. */

  // log the transformation
  const cldURL = cldImg.toURL();
  const transform = cldURL.split('/')[6];
  console.log('resize:', cldURL);

  return (
    <div>
      <h3>{transform}</h3>
      <AdvancedImage
        width='600'
        height='400'
        cldImg={cldImg}
        alt='Resized Image'
      />
    </div>
  );
}

export default ResizeExample;
