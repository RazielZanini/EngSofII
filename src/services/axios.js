// Service para ser acessado via server sider
import axios from "axios";

import { parseCookies } from "nookies";

export function getAPIClient(ctx) {

   const api = axios.create({
      baseURL: process.env.URL_API
   })

   api.interceptors.response.use(response => {
      return response.data;
   })

   api.interceptors.request.use(async (options) => {
      const { '@usiminas.token': token } = await parseCookies(ctx)
      if (token) {
         options.headers['x-access-token'] = token
      }
      return options;
   })

   return api;

}