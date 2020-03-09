import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { isicart } from '../redux/actions'

class restaurantdetail extends Component {
    state = {}

    asd = (sembarang) => {
        this.props.isicart(sembarang)
        this.props.navigation.navigate('cart')
    }

    render() {
        return (
            <View>
                <Header
                    placement='left'
                    centerComponent={{
                        text: this.props.name,
                        style: { color: 'white', fontSize: 18, fontWeight: '700' }
                    }}
                    leftComponent={{
                        icon: 'arrow-back',
                        color: 'white',
                        onPress: () => this.props.navigation.goBack()
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
                <ScrollView>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.asd(this.props.name)}
                    >
                        <Card
                            title={this.props.name + `\n(Rating : ${this.props.user_rating.aggregate_rating})`}
                            image={{ uri: this.props.featured_image }}
                            wrapperStyle={{ justifyContent: 'center', alignItems: 'center' }}
                            imageWrapperStyle={{ width: '100%' }}
                            imageStyle={{ height: 250 }}
                        >
                            <Text style={{
                                marginBottom: 10,
                                fontSize: 18,
                                textDecorationLine: 'underline'
                            }}>
                                Address
                        </Text>
                            <Text style={{ marginBottom: 10 }}>
                                {this.props.location.address}
                            </Text>
                            <Text style={{
                                marginBottom: 10,
                                fontSize: 18,
                                textDecorationLine: 'underline'
                            }}>
                                Cuisines
                        </Text>
                            <Text style={{ marginBottom: 10 }}>
                                {this.props.cuisines}
                            </Text>
                            <Text style={{
                                marginBottom: 10,
                                fontSize: 18,
                                textDecorationLine: 'underline'
                            }}>
                                Open Schedule
                        </Text>
                            <Text style={{ marginBottom: 10 }}>
                                {this.props.timings}
                            </Text>
                            <Text style={{
                                marginBottom: 10,
                                fontSize: 18,
                                textDecorationLine: 'underline'
                            }}>
                                Avg Cost for 2 Persons
                        </Text>
                            <Text style={{ marginBottom: 10 }}>
                                {this.props.currency}{this.props.average_cost_for_two}
                            </Text>
                        </Card>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})


const mapStateToProps = ({ isirestoran }) => {
    return {
        ...isirestoran
    }
}

export default connect(mapStateToProps, { isicart })(restaurantdetail)