import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import detail from './detail';

class home extends Component {
    state = {}

    // async componentDidMount() {
    //     try {
    //         const kucing = AsyncStorage.getItem('username')
    //         if (kucing !== null) {
    //             console.log(kucing);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     };
    // }


    render() {
        return (
            <View>
                <Text>
                    ini home {this.props.cekuser.username}
                </Text>
            </View>
        );
    }
}

const mapstatetoprops = ({ cekuser }) => {
    return { cekuser }
}

export default connect(mapstatetoprops)(home)

// export default home