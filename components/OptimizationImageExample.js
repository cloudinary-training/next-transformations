import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
// import { autoGravity} from '@cloudinary/url-gen/qualifiers/gravity';


// Import required actions.
import { fill } from '@cloudinary/url-gen/actions/resize';

function OptimizationImageExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldImg = new CloudinaryImage(
    'cld-forest-reflection',
    cloudConfig,
    urlConfig
  );

  // Perform the transformation
  // crop fill the bounding box letting Cloudinary determine gravity
  cldImg
    // .resize(fill().width(600).height(300).gravity(autoGravity())) // c_fill..g_auto
    .resize(fill().width(600).height(300).gravity('auto')) // c_fill..g_auto

    .format('auto')    // f_auto 
    .quality('auto');  // q_auto

  // log the transformation
  const cldURL = cldImg.toURL();
  console.log('image optimization:', cldURL);
  const transform =
    cldURL.split('/')[6] +
    '/' +
    cldURL.split('/')[7] +
    '/' +
    cldURL.split('/')[8];
  return (
    <div>
      <h3>{transform}</h3>

      <AdvancedImage
        width='600'
        height='300'
        cldImg={cldImg}
        alt='Optimized Image'
      />
    </div>
  );
}

export default OptimizationImageExample;
