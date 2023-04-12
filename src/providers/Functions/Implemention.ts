import { Functions } from './index';

class Implementation implements Functions {
    copyObject(source: Object): Object {
        return JSON.parse(JSON.stringify(source));
    }
  }