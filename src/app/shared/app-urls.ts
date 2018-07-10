const prefix = 'http://192.168.10.112:8080/';

export const urls = {
    'authentication': {
        'login': prefix + 'api/authenticate',
        'register':  prefix + 'api/merchants'
    },
    'merchants': {
        'merchants': prefix + 'api/merchants'
    }
}