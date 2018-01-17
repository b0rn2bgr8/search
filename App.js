import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
 
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-dropdown-latest';
 
class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      canada: ''
    }
  }
 
  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }
 
  
  _canada(province) {
 
  this.setState({
      canada: province
    });
  }
 
  render() {
    return (
      <View>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Select
            width={150}
            style={{borderColor: 'red'}}
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Category"
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
            <Option>New Brunswick</Option>
            <Option>Newfoundland and Labrador</Option>
            <Option>Northwest Territories</Option>
            <Option>Nova Scotia</Option>
            <Option>Nunavut</Option>
            <Option>Ontario</Option>
            <Option>Prince Edward Island</Option>
            <Option>Quebec</Option>
            <Option>Saskatchewan</Option>
            <Option>Yukon</Option>
          </Select>
          <OptionList ref="OPTIONLIST"/>
          
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
      <TextInput placeholder="Search" placeholderTextColor="red" style={{height: 30, width: 210, borderWidth: 0.5, fontSize: 8, borderBottomColor: 'red', borderRightColor: 'red', borderTopColor: 'red', borderLeftWidth: 0}} underlineColorAndroid="transparent" />
      </View>
      </View>
    );
  }
}

export default App;
