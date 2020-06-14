import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

export default class Home extends Component {

	constructor(properties) {
		super(properties);
	}

	render() {
		return (
            <SafeAreaView style={{flex:1, justifyContent:'center', alignItems: 'center', backgroundColor:'white',}}>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Screen1")}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Screen 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Screen2")}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Screen 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Screen3")}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Screen 3</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
	}
	
}


const styles = StyleSheet.create({
    button: {
        width:200, 
        height: 40, 
        marginVertical:15, 
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: 8,
        backgroundColor: '#FF9966',
    },
    buttonText: {
        color:'white',
        fontSize: 16,
    },
});