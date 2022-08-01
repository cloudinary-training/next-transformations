import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import Image from 'next/image';


// Import required actions.
import { fill } from '@cloudinary/url-gen/actions/resize';

import { sepia } from '@cloudinary/url-gen/actions/effect';
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";


function EffectsExample() {

  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const cldImg = new CloudinaryImage('green-car', cloudConfig, urlConfig);

  // Perform the transformation.
  cldImg
  .resize(fill().width(400).height(400))
    .effect(sepia())  //also try cartoonify, sepia
    .roundCorners(byRadius(100)) ;

  // log the transformation
  const cldURL = cldImg.toURL();
  console.log('effects-sepia and rounded corders:', cldURL);
  return (
    <Image
      width='400'
      height='400'
      src={cldURL}
      alt='Effects with Image'
      priority='true'
    />
  );
}

export default EffectsExample;
