import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './app/store';

const { worker } = require('./mocks/browser');

const root = createRoot(document.getElementById('root'));

worker.start();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);