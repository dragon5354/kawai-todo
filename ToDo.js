import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class ToDo extends Component{
    state = {
        isEditing: false,
        isCompleted: false
    };
    render(){
        const {isCompleted} = this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.unCompletedCircle]} />
                </TouchableOpacity>
                <Text style={styles.Text}>Hello I'm a To Do</Text>
            </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return{
                isCompleted: !prevState.isCompleted
            };
        });
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"

    },
    unCompletedCircle: {
        borderColor: "#F23657"
    },
    Text:{
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
});