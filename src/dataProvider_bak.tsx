import fakeRestProvider from 'ra-data-fakerest';
//import { fetchUtils,cacheDataProviderProxy } from 'react-admin';

import data from './data';
import addUploadFeature from './addUploadFeature';

const dataProvider = fakeRestProvider(data, true);
const uploadCapableDataProvider = addUploadFeature(dataProvider);
const sometimesFailsDataProvider = new Proxy(uploadCapableDataProvider, {
    get: (target, name) => (resource: string, params: { data: { title: string; }; }) => {
        // add rejection by type or resource here for tests, e.g.
        // if (name === 'delete' && resource === 'posts') {
        //     return Promise.reject(new Error('deletion error'));
        // }
        if (
            resource === 'VIP-Vehicle' &&
            params.data &&
            params.data.title === 'f00bar'
        ) {
            return Promise.reject(new Error('this title cannot be used'));
        }
        return uploadCapableDataProvider[name](resource, params);
    },
});
const delayedDataProvider = new Proxy(sometimesFailsDataProvider, {
    get: (target, name) => (resource: any, params: any) =>
        new Promise(resolve =>
            setTimeout(
                () =>
                    resolve(sometimesFailsDataProvider[name](resource, params)),
                300
            )
        ),
});

export default delayedDataProvider;
