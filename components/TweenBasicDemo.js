import React from 'react';

import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

export default function TweenBasicDemo(props) {
  return (
    <TweenOne
      animation={{ 
        x: 80, 
        scale: 0.5, 
        rotate: 120, 
        yoyo: true, // TweenBasicDemo 演示需要
        repeat: -1, // TweenBasicDemo 演示需要
        duration: 1000
      }}
      paused={props.paused}
      style={{ transform: 'translateX(-80px)' }}
      className="code-box-shape"
    />
  );
}

TweenBasicDemo.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  paused: PropTypes.bool,
};
