import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import { logout } from '../redux/actions'

class Logout extends Component {
    componentDidUpdate() {
        if (!this.props.cekuser.username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Login' }
                ]
            });
            this.props.rootStackNavigation.dispatch(resetAction);
        }
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Button
                    title="Log Out"
                    containerStyle={{
                        marginVertical: 15,
                        borderWidth: 0.5,
                        borderColor: 'tomato',
                        width: '90%'
                    }}
                    titleStyle={{ color: 'tomato' }}
                    type='outline'
                    onPress={this.props.logout}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = ({ cekuser }) => {
    return { cekuser }
}


export default connect(mapStateToProps, { logout })(Logout);