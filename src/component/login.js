import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import { onketik, login, ceklogin } from '../redux/actions'
import * as Animatable from 'react-native-animatable';

class Login extends Component {

    componentDidMount() {
        this.props.ceklogin()
    }

    componentDidUpdate() {
        if (this.props.cekuser.username) {
            this.props.navigation.dispatch(StackActions.replace('tabmenu'));
        }
    }

    kenapa = async () => {
        this.props.login(this.props.loginkucing)
    }

    render() {
        if (this.props.cekuser.checked && !this.props.cekuser.username) {
            return (
                <View style={styles.containerStyle}>
                    <Animatable.Text animation={'fadeInDown'} duration={2000}>
                        <Text h3 style={{ color: 'tomato' }}>TomatoApp</Text>
                    </Animatable.Text>
                    <Icon type="material-community" size={70} name="food" color='tomato' />
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Username'
                            leftIcon={
                                <Icon
                                    name='people'
                                    size={24}
                                    color='tomato'
                                />
                            }
                            value={this.props.loginkucing.username}
                            onChangeText={(val) => this.props.onketik('username', val)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{this.props.loginkucing.error}</Text>
                    <Button
                        title="Enter"
                        containerStyle={{ width: '95%', marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: 'tomato' }}
                        onPress={this.kenapa}
                        loading={this.props.loginkucing.loading}
                    />
                </View>
            );
        }
        return (
            <View style={styles.logo}>
                <Text h3 style={{ color: 'white' }}>TomatoApp</Text>
                <Icon
                    name='food'
                    size={80}
                    type='material-community'
                    color='white'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff6347',
        color: 'white'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

const mapstatetoprops = ({ loginkucing, cekuser }) => {
    return { loginkucing, cekuser }
}

export default connect(mapstatetoprops, { onketik, login, ceklogin })(Login)