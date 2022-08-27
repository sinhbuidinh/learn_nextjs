// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'

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
  if (req.method != 'POST') {
    return res.status(404).json({ message: 'Method not supported' })
  }

  return new Promise((resolve) => {
    //remove cookie dont send to api server
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
          body += chunk
      });
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt, error } = JSON.parse(body)
          if (error) {
            throw new Error(error)
          }

          //save token to cookie http-only
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development'
          })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt)
          })

          // return res.end("my response to cli"); //string only
          ;(res as NextApiResponse).json({ 'message': 'Login succesfully' })//parse type for show json
        } catch (err:any) {
          ;(res as NextApiResponse).status(500).json({
            'message': err.message,
            'detail': err.stack,
          })
        }

        resolve(true)
      });
    }

    proxy.once('proxyRes', handleLoginResponse)
    // api/students => https://js-post-api.herokuapp.com/api/students
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })

    // res.status(200).json({ name: 'Api catch ALL except hello' })
  })
}
