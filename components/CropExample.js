import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import Image from 'next/image';

function CropExample() {

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const cldImg = new CloudinaryImage('cld-sample-3', cloudConfig, urlConfig);

  // Perform the transformation.
  cldImg
    .resize(thumbnail().width(400).height(400).gravity(focusOn(FocusOn.face()))) // Crop the image
    .format('png'); // Deliver as PNG. */

  // log the transformation
  const cldURL = cldImg.toURL();
  console.log('crop:', cldURL);
  return (
    <Image
      width='400'
      height='400'
      src={cldURL}
      alt='Cropped Image'
      priority='true'
    />
  );
}

export default CropExample;
