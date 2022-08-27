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

  const cookies = Cookies(req, res)
  cookies.set('access_token')//remove token

  res.status(200).json({ message: 'Logout successfully' })
}
