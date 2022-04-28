import {authHost, host} from './index';

export const createType = async (type) => {
    const {data} = await authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await host.get('api/type');
    return data;
}

export const createBrand = async (brand) => {
    const {data} = await authHost.post('api/brand', brand);
    return data;
}

export const fetchBrands = async () => {
    const {data} = await host.get('api/brand',);
    return data;
}

// export const createDevice = async (device) => { //не работает
//     const {data} = await axios({
//         method: "post",
//         url: "http://localhost:5000/api/device",
//         data: device,
//         headers: {"Content-Type": "multipart/form-data"},
//     })
//     return data
// }

export const createDevice = async (device) => {
    const {data} = await fetch(process.env.REACT_APP_API_URL + 'api/device', {
        method: "POST",
        body: device,
    })
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    const {data} = await host.get('api/device', {
        params: {
            typeId, brandId, page, limit
        }
    });
    return data;
}

export const fetchOneDevice = async (id) => {
    const {data} = await host.get(`api/device/${id}`);
    return data;
}