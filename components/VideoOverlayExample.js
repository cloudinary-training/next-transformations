import { Transformation } from '@cloudinary/url-gen';
import { CloudinaryVideo } from '@cloudinary/url-gen';
import { URLConfig } from '@cloudinary/url-gen';
import { CloudConfig } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { fit, scale } from '@cloudinary/url-gen/actions/resize';

import { source } from '@cloudinary/url-gen/actions/overlay';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { opacity } from '@cloudinary/url-gen/actions/adjust';
import { Position } from '@cloudinary/url-gen/qualifiers/position';

import { compass } from '@cloudinary/url-gen/qualifiers/gravity';

function VideoOverlayExample() {
  // Set the Cloud configuration and URL configuration
  const cloudConfig = new CloudConfig({ cloudName: 'cloudinary-training' });
  const urlConfig = new URLConfig({ secure: true, analytics: false });
  const cldVid = new CloudinaryVideo('wave', cloudConfig, urlConfig);

  // Perform the transformation.
  cldVid
    .resize(scale().width(700)) // scale the image
    .overlay(
      source(
        image('logo').transformation(
          new Transformation()
            .resize(fit().width(100).height(100))
            .adjust(opacity(60)) // Adjust the opacity of the logo.
            .roundCorners(byRadius(100)) // Round the corners.
        )
      ).position(
        new Position().gravity(compass('north_west')).offsetX(30).offsetY(30)
      )
    );

  // log the transformation
  const cldURL = cldVid.toURL();
  console.log('video overlay:', cldURL);

  return <AdvancedVideo cldVid={cldVid} controls className='cld-vid' />;
}

export default VideoOverlayExample;
