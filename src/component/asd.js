import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Header, ListItem, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios'
import { connect } from 'react-redux';
import { onketik, login, ceklogin } from '../redux/actions'
// bikin userLoginCheck di redux action terus di login page userLoginCheck jalan di componentdidmount lalu di componentdidupdate cek ada usernamenya ada ga terus this.props.navigation(StackActions.replace('isi')); 
function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
class Asd extends Component {
    state = { data: [] }
    async componentDidMount() {
        const response = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
            headers: {
                "user-key": "74b25737566cc5cfe2644bcdf3265f8e"
            }
        })
        this.setState({ data: response.data.restaurants.restaurant })
        // this.props.loginkucing
    }

    renderasd = () => {
        this.state.data.map((val) => {
            return (
                <View>
                    <Text>
                        {val.name}
                    </Text>
                </View>
            )
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <View>
                <Header rightComponent={{
                    text: this.props.Username,
                    style: { color: 'black', fontSize: 18, fontWeight: '700' }
                }}>

                </Header>
                <Text>{this.props.Username}</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            // console.log(JSON.stringify(item.restaurant.name,featured_image))}
                            <Item title={item.restaurant.name} />}
                        keyExtractor={item => item.id}
                    >
                        {this.renderasd}
                        {/* <Card style={{ width: '96%', alignSelf: 'center' }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: `` }} />
                                    <Body>
                                        <Text>{post.username}</Text>
                                        <Text note>Instagrin {post.role}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{ uri: `${API_URL}${post.image}` }} style={{ height: 350, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>{post.caption}</Text>
                                </Left>
                            </CardItem>
                        </Card> */}
                    </FlatList>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

const mapstatetoprops = ({ loginkucing }) => {
    return { Username: loginkucing.username }
}

export default connect(mapstatetoprops)(Asd);