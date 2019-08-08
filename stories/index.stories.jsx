import { storiesOf } from '@storybook/react'; // eslint-disable-line
import React, { useEffect, useState } from 'react';

import ReactCompareImage from '../src/ReactCompareImage';

const leftImageSrc = '/cat1.jpg';
const rightImageSrc = '/cat2.jpg';

const Animated = () => {
  const [position, setPosition] = useState(0.5);

  useEffect(() => {
    setTimeout(() => setPosition(0.8), 500);
    setTimeout(() => setPosition(0.2), 1000);
    setTimeout(() => setPosition(0.5), 1500);
  }, []);

  return (
    <div style={{ maxWidth: '100%', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage
        leftImage={leftImageSrc}
        rightImage={rightImageSrc}
        sliderPositionPercentage={position}
      />
    </div>
  );
};

storiesOf('ReactCompareImages', module)
  .add('animated', () => <Animated />)
  .add('200px', () => (
    <div style={{ maxWidth: '200px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage leftImage={leftImageSrc} rightImage={rightImageSrc} />
    </div>
  ))
  .add('300px', () => (
    <div style={{ maxWidth: '300px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage leftImage={leftImageSrc} rightImage={rightImageSrc} />
    </div>
  ))
  .add('500px', () => (
    <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage leftImage={leftImageSrc} rightImage={rightImageSrc} />
    </div>
  ))
  .add('100%', () => (
    <div style={{ maxWidth: '100%', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage leftImage={leftImageSrc} rightImage={rightImageSrc} />
    </div>
  ))
  .add('all sizes', () => (
    <div>
      <div style={{ maxWidth: '200px', padding: '30px 0', background: 'gray' }}>
        <ReactCompareImage
          leftImage={leftImageSrc}
          rightImage={rightImageSrc}
        />
      </div>
      <p />
      <div style={{ maxWidth: '300px', padding: '30px 0', background: 'gray' }}>
        <ReactCompareImage
          leftImage={leftImageSrc}
          rightImage={rightImageSrc}
        />
      </div>
      <p />
      <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
        <ReactCompareImage
          leftImage={leftImageSrc}
          rightImage={rightImageSrc}
        />
      </div>
      <p />
      <div style={{ maxWidth: '100%', padding: '30px 0', background: 'gray' }}>
        <ReactCompareImage
          leftImage={leftImageSrc}
          rightImage={rightImageSrc}
        />
      </div>
    </div>
  ))
  .add('linecolor', () => (
    <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage
        leftImage={leftImageSrc}
        rightImage={rightImageSrc}
        sliderLineColor="rebeccapurple"
      />
    </div>
  ))
  .add('apply-css', () => (
    <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage
        leftImage={leftImageSrc}
        rightImage={rightImageSrc}
        leftImageCss={{ filter: 'brightness(50%)' }}
        rightImageCss={{ filter: 'sepia(100%)' }}
      />
    </div>
  ))
  .add('labels', () => (
    <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage
        leftImage={leftImageSrc}
        leftImageLabel="Before"
        rightImage={rightImageSrc}
        rightImageLabel="After"
      />
    </div>
  ))
  .add('handle', () => (
    <div style={{ maxWidth: '500px', padding: '30px 0', background: 'gray' }}>
      <ReactCompareImage
        leftImage="/forest1.jpg"
        rightImage="/cat2.jpg"
        handle={
          <button type="button">
            Custom
            <br />
            handle
          </button>
        }
      />
    </div>
  ));
