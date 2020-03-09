import axios from 'axios';

export const getlistrestoran = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
                headers: {
                    "user-key": "75162bb707dfc9544420513e4f7bb699"
                }
            })
            console.log(response.data.restaurants[0])
            dispatch({
                type: 'fill_listrestoran',
                payload: response.data.restaurants
            })
        }
        catch (error) {
            console.log('ada error');
        }
    }
}

export const isirestoran = (sembarang) => {
    return {
        type: 'isi_restoran',
        payload: sembarang
    }
}