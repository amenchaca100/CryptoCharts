import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store/store';
import handleGraphSelect from './actions/handleGraphSelect';
import moment from 'moment'
import getNews from './actions/Info/getNews'

ReactDOM.render( <Provider store={store}>
    <App />
</Provider>, document.getElementById('app'), () =>
{
    handleGraphSelect({name: "bitcoin", from: moment().subtract(1, 'day').format("'YYYY-MM-DD'"), to: moment().format('YYYY-MM-DD')})(store.dispatch),

    getNews()(store.dispatch)
})
