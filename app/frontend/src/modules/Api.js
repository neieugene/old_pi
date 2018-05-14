import axios from "axios";
import toSnakeCase from "toSnakeCase";
import toCamelCase from "toCamelCase";
import convertObjectKeys from "convertObjectKeys";

axios.interceptors.response.use((response) => {
  if (response.data) {
    response.data = convertObjectKeys(response.data, toCamelCase);
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.request.use((config) => {
  if (config.data && !config.dontConvertToSnakeCase) {
    config.data = convertObjectKeys(config.data, toSnakeCase);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default class Api {
  static signUpUser(user) {
    return axios.post("api/auth", user);
  }

  static loginUser(user) {
    return axios.post("api/auth/sign_in", user);
  }

  static logoutUser(userTokens) {
    return axios.delete("api/auth/sign_out", {
      headers: userTokens
    });
  }

  static profileShow(userTokens) {
    return axios({
      method: "get",
      url: "api/profile",
      headers: userTokens
    }).then(({ data }) => {
      return data;
    });
  }

  static profileUpdate(profile, userTokens) {
    return axios({
      method: "put",
      url: "/api/profile",
      headers: userTokens,
      data: { profile: convertObjectKeys(profile, toSnakeCase) }
    }).then(({ data }) => {
      return data;
    });
  }

  static getEditions(userTokens, allEditions = false) {
    return axios({
      method: "get",
      url: "/api/editions",
      headers: userTokens,
      params: { all_editions: allEditions }
    }).then(({ data }) => {
      return data;
    });
  }

  static getEdition(editionId, userTokens) {
    return axios({
      method: "get",
      url: `/api/editions/${editionId}`,
      headers: userTokens
    }).then(({ data }) => {
      return data;
    });
  }

  static getArticles(editionId, userTokens) {
    return axios({
      method: "get",
      url: `/api/editions/${editionId}/articles`,
      headers: userTokens
    }).then(({ data }) => {
      return data;
    });
  }

  static getArticle(editionId, articleId, userTokens) {
    return axios({
      method: 'get',
      url: `/api/editions/${editionId}/articles/${articleId}`,
      headers: userTokens
    }).then(({data}) => data);
  }

  static getStaticPage(slug) {
    return axios({
      method: 'get',
      url: `/api/static_pages/${slug}`
    }).then(({data}) => data)
  }

  static createSubscriptionRequests(params, userTokens) {
    return axios({
      method: "post",
      url: "/api/user/subscription_requests",
      headers: userTokens,
      data: { subscription_request: convertObjectKeys(params, toSnakeCase) }
    });
  }
}
