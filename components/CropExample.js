import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';
import { AdvancedImage } from '@cloudinary/react';

function CropExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const cldImg = new CloudinaryImage('cld-sample-3', cloudConfig, urlConfig);

  // Perform the transformation
  // Crop the image
  cldImg
    .resize(thumbnail().width(400).height(400).gravity(focusOn(FocusOn.face()))) 

  // log the transformation
  const cldURL = cldImg.toURL();
  const transform = cldURL.split('/')[6]
  console.log('crop:', cldURL);
  
  return (
    <div>
      <h3>{transform}</h3>

      <AdvancedImage
        width='400'
        height='400'
        cldImg={cldImg}
        alt='Documentation Image'
      />
    
    </div>
  );
}

export default CropExample;
