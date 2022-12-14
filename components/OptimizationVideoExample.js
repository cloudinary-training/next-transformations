import { CloudinaryVideo } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { scale } from '@cloudinary/url-gen/actions/resize';


function OptimizationVideoExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });

  const cldVid = new CloudinaryVideo('wave', cloudConfig, urlConfig);

  // Perform the transformation.
  cldVid
    .resize(scale().width(600)) // scale the video
    .format('auto') // f_auto */
    .quality('auto'); // q_auto

  // log the transformation
  const cldURL = cldVid.toURL();
  console.log('video optimization:', cldURL);
  const transform =
  cldURL.split('/')[6] +
  '/' +
  cldURL.split('/')[7] +
  '/' +
  cldURL.split('/')[8];

  return (
    <div>
    <h3>{transform}</h3>
    <AdvancedVideo
      cldVid={cldVid}
      controls
      className='cld-vid'
    />
    </div>
  );
}

export default OptimizationVideoExample;

