import {objToQueryString} from "./fns";


function batchInterceptor(instance) {
    instance.interceptors.request.use( function (config) {
            console.log("request", config.params, objToQueryString(config.params))

            config.url = config.url+objToQueryString(config.params)
            config.params = null
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }, error => Promise.reject(error));

    instance.interceptors.response.use(
        response => {
            return response.data.items;
        },
        error => {
            return Promise.reject(error);
        }
    );
}
export default batchInterceptor;
