// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

export const config = {
  api: {
    bodyParser: false,//not parse body before send to api server => transfer all body
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    //remove cookie dont send to api server
    req.headers.cookie = ''

    // api/students => https://js-post-api.herokuapp.com/api/students

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })

    // res.status(200).json({ name: 'Api catch ALL except hello' })
    proxy.once('proxyRes', () => {
      resolve(true)// when proxy return => done for response.
    })
  })
}
