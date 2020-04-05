import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

export default class InputTextfield extends React.Component {
    render(){
            return (
            <View style={this.props.style}>
                <Text style={styles.inputTitle}>{this.props.title}</Text>
                <TextInput 
                    placeholder={this.propsplaceholderText} 
                    secureTextEntry={this.props.isSecure} 
                    style={StyleSheet.input}
                ></TextInput>
                <View style={{ borderBottomColorBottomWidth: 1, borderBottomColor:"#DBDBDB" }}></View>

            </View>
           
 

        );
    }
}

const styles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: "#1D2029",
        fontSize: 13,
        fontFamily: "Avenir Next"
    }
})