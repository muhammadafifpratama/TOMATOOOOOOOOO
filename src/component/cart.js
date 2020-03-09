import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { Header, Card } from 'react-native-elements';

class cart extends Component {
    componentDidMount() {
        console.log(this.props.name + 'asd')
    }
    render() {
        return (
            <View>
                <Card>
                    <Text>
                        isi cart : {this.props.cart.name}
                    </Text>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return { cart }
}


export default connect(mapStateToProps)(cart);