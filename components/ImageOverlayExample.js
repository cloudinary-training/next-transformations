import { CloudinaryImage } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
// Import required actions and qualifiers.
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { compass } from '@cloudinary/url-gen/qualifiers/gravity';

import { fill } from '@cloudinary/url-gen/actions/resize';
import {AdvancedImage} from '@cloudinary/react'

function ImageOverlayExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const cldImg = new CloudinaryImage('cld-sample-3', cloudConfig, urlConfig);

  // Perform the transformation.
  cldImg
    .resize(fill().width(600).height(400).gravity('auto')) // Crop the image
    .overlay(
      source(
        text('Move!', new TextStyle('Arial', 50).fontWeight('bold')).textColor(
          'black'
        )
      ).position(
        new Position().gravity(compass('north_east')).offsetX(20).offsetY(10)
      )
    );

  // log the transformation
  const cldURL = cldImg.toURL();
  const transform =
    cldURL.split('/')[6] +
    '/' +
    cldURL.split('/')[7] +
    '/' +
    cldURL.split('/')[8];
  console.log('image overlay:', cldURL);

  return (
    <div>
      <h3>{transform}</h3>
      <AdvancedImage
        width='600'
        height='400'
        cldImg={cldImg}
        alt='Image Overlay'
      /> 
     
    </div>
  );
}

export default ImageOverlayExample;
