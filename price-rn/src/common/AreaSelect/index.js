import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,ScrollView,TouchableOpacity,Button} from 'react-native';
import AreaSelectStyle from './style';

const TYPES = [
    'current','hot',
    'A','B','C','D','E','F','G',
    'H','J','K','L','M','N',
    'P','Q','R','S','T','W','X','Y','Z'
];

class AreaSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {position:{}};
    }
    _onTypePress(type){
        if(!this.state.position[type]){
            return;
        }

        this.refs.scrollView.scrollTo({
            x:0,
            y:this.state.position[type].y,
            animated:false
        });
    }
    _onCityPress(areaCode,name){
        this.props.onSelect && this.props.onSelect(areaCode,name);
    }
    _onTypeLayout(type,e){
        this.state.position[type] = {
            x:e.nativeEvent.layout.x,
            y:e.nativeEvent.layout.y
        };
    }
    _renderTypes(){
        return (
            <View style={AreaSelectStyle.areaType}>
                {TYPES.map((type,index) => {
                    return (
                        <TouchableOpacity key={index} onPress={this._onTypePress.bind(this,type)}>
                            <Text style={AreaSelectStyle.areaTypeItem}>{type==='hot'?'热门':(type==='current'?'当前':type)}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
    _renderHot(cities){
        return (
            <View key="hot" style={AreaSelectStyle.hot}  onLayout={this._onTypeLayout.bind(this,'hot')}>
                <Text style={AreaSelectStyle.cityHeader}>热门</Text>
                <View style={AreaSelectStyle.hotCities}>
                    {cities.map((city,index) => {
                        return (
                            <TouchableOpacity key={index} onPress={this._onCityPress.bind(this,city.areaCode,city.name)}>
                                <View style={AreaSelectStyle.hotCity}>
                                    <Text>{city.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
    _renderArea(){
        let areaList = this.props.areaList;
        let types = Object.keys(areaList);
        
        return (
            <ScrollView ref="scrollView">
                {
                    types.map((type,index) => {
                        return type === 'hot'?this._renderHot(areaList[type]):(
                            <View key={index} onLayout={this._onTypeLayout.bind(this,type)}>
                                <Text key={index} style={AreaSelectStyle.cityHeader}>{type}</Text>
                                {areaList[type].map((city,index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={this._onCityPress.bind(this,city.areaCode,city.name)}>
                                            <View style={AreaSelectStyle.cityItem}>
                                                <Text style={AreaSelectStyle.cityItemText}>{city.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        );
                    })
                }
            </ScrollView>
        );
    }
    render(){
        return (
            <View style={AreaSelectStyle.container}>
                {this._renderArea()}
                {this._renderTypes()}
            </View>
        );
    }
}

AreaSelect.propTypes = {
    onSelect:PropTypes.func,
    currentAreaCode:PropTypes.string,
    areaList:PropTypes.object
};

export default AreaSelect;