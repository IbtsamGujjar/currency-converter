import axios from 'axios';

import { APP_CONSTANTS } from '../constants/constants';

const contentType = {
  json: 'application/json',
  multipart: 'multipart/form-data',
};

class API {
  constructor(
    config = {
      headers: { contentType: contentType.json },
    }
  ) {
    this.config = {};
    this.instance = null;

    this.config = {
      baseURL: config.baseURL || APP_CONSTANTS.API_BASE_URL,
      headers: {
        'Content-Type': config.headers.contentType || contentType.json,
      },
      timeout: 20000,
    };

    this.instance = axios.create(this.config);
  }

  get(url, id, params) {
    let endpoint = url;
    if (id) {
      endpoint += `/${id}`;
    }
    return this.instance.get(endpoint, { params });
  }
}

export { API };
