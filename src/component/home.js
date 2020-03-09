import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import detail from './detail';
import { getlistrestoran, isirestoran } from '../redux/actions'
import Icon from './icon'
import RestaurantCard from './kartu';

class home extends Component {
    componentDidMount() {
        this.props.getlistrestoran()
    }

    restaurantItemPress = (kucing) => {
        this.props.isirestoran(kucing)
        this.props.navigation.navigate('Detail')
    }


    render() {
        return (
            <View>
                <Header
                    rightComponent={{
                        text: `Hallo,${this.props.cekuser.username}`,
                        style: { color: 'white', fontSize: 18, fontWeight: '700' }
                    }}
                    leftComponent={{
                        icon: 'ticket-account',
                        color: 'white',
                        type: 'material-community'
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 10
                }}>
                    <Icon icons={'credit-card'} types={'entypo'} name={'Credit'} />
                    <Icon icons={'food-variant'} types={'material-community'} name={'Variant'} />
                    <Icon icons={'food-fork-drink'} types={'material-community'} name={'Recipe'} />
                    <Icon icons={'location-pin'} types={'entypo'} name={'Location'} />
                    <Icon icons={'shopping-cart'} types={'font-awesome'} name={'Cart'} />
                    <Icon icons={'local-pizza'} types={'material'} name={'Pizza'} />
                    <Icon icons={'hamburger'} types={'material-community'} name={'Burger'} />
                    <Icon icons={'more-horizontal'} types={'feather'} name={'More'} />
                </View>
                <FlatList
                    data={this.props.home.listrestoran}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback
                            onPress={() => this.restaurantItemPress(item.restaurant)}
                        >
                            <View style={{ width: '50%' }}>
                                <RestaurantCard data={item} />
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    keyExtractor={item => item.restaurant.name}
                    style={{ width: '98%' }}
                    numColumns={2}
                    onRefresh={() => this.props.getlistrestoran()}
                    refreshing={this.props.home.loading}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

const mapstatetoprops = ({ cekuser, home }) => {
    return { cekuser, home }
}

export default connect(mapstatetoprops, { getlistrestoran, isirestoran })(home)