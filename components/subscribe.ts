import jsonp from 'jsonp';

type CreateURLParams = {
    list_id: string;
    email: string;
    tags: string;
};

// type CheckUrlParams = {
//     email: string;
//     list_id: string;
// };

// const API_SERVER = 'us19';
// const ARPA_NETWORK_TAG_ID = '6263431';
// audience: ARPA
const BELLA_LIST_ID = 'e268c38a54';

const createUrl = ({ email, list_id, tags }: Partial<CreateURLParams>) => {
    const url = new URL(
        // `https://arpachain.us19.list-manage.com/subscribe/post-json?u=b8c5cc1bd46aa074e2c9b8e2c&f_id=00348be4f0`
        `https://bella.us2.list-manage.com/subscribe/post-json?u=bab50301f5148ef7c637afcb4`
    );

    if (email === undefined) {
        throw Error('email is required.');
    }

    url.searchParams.set('id', list_id ?? BELLA_LIST_ID);
    url.searchParams.set('EMAIL', email);
    // url.searchParams.set('tags', tags ?? ARPA_NETWORK_TAG_ID);

    return url.href;
};

export const subscribe = (email: string, others?: Partial<CreateURLParams>): Promise<boolean> =>
    new Promise((resolve, reject) => {
        jsonp(createUrl({ email, ...others }), { param: 'c' }, (err, data) => {
            if (err) reject(err);
            else {
                resolve(data.result === 'success');
            }
        });
    });
