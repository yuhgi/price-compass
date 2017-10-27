import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import FontIconStyle from './style';

class FontIcon extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Text
                style={[FontIconStyle.icon,this.props.style]}
                onPress={this.props.onPress}
            >
                {this.props.font}
            </Text>
        );
    }
}

FontIcon.propTypes = {
    font:PropTypes.string.isRequired,
    onPress:PropTypes.func
};

export default FontIcon;