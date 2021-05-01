import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { em, WIDTH } from '../constants';

export default class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<Text style={styles.radioText}>{res.text}</Text>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                                  {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
						</View>
					);
				})}
                {/* <Text> Selected: {this.state.value} </Text> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        marginBottom: em*35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: em*80,
        fontSize: 18*em,
        color: '#1E2D60',fontFamily:'lato-bold'
    },
	radioCircle: {
		height: em*30,
		width: em*30,
		borderRadius: em*100,
		borderWidth: em*2,
		borderColor: '#40CDDE',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: em*15,
		height: em*15,
		borderRadius: em*50,
		backgroundColor: '#40CDDE',
    },
    result: {
        marginTop: em*20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});