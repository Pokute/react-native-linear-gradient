import React, { Component, PropTypes } from 'react';
import { processColor, requireNativeComponent, View } from 'react-native';

type PropsType = {
  start?: Array<number>;
  end?: Array<number>;
  colors: Array<string>;
  locations?: Array<number>;
} & typeof(View);

export default class LinearGradient extends Component {
  static propTypes = {
    start: PropTypes.arrayOf(PropTypes.number),
    end: PropTypes.arrayOf(PropTypes.number),
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    locations: PropTypes.arrayOf(PropTypes.number),
    ...View.propTypes,
  };
  props: PropsType;
  gradientRef: any;

  render() {
    const {
      colors,
      locations,
      ...otherProps
    } = this.props;
    if ((colors && locations) && (colors.length !== locations.length)) {
      console.warn('LinearGradient colors and locations props should be arrays of the same length');
    }

    return (
      <View
        ref={(component) => { this.gradientRef = component; }}
        {...otherProps}
        style={[otherProps.style ? otherProps.style : {}, colors.length > 0 ? { backgroundColor: colors[0] } : {} ]}
      />
    );
  }
}