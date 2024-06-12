import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/connectorOne/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f', {
        headers: {
            'Authorization': `Bearer ${process.env.YEXT_API_KEY}`,
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.status(error.response.status).json(error.response.data);
      });
}

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ message: 'This is a response from route1' });
//   console.log('Request method:', req.method);  
//   const YEXT_API_URL = 'https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f';
//   const YEXT_API_KEY = process.env.YEXT_API_KEY;

//   console.log('Request method:', req.method);
//   console.log('API Key:', YEXT_API_KEY ? 'Set' : 'Not set');

//   axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f', {
//     headers: {
//         'Authorization': `Bearer ${process.env.YEXT_API_KEY}`,
//         'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     res.json(response.data);
//   })
//   .catch(error => {
//     res.status(error.response.status).json(error.response.data);
//   });

//   // if (!YEXT_API_KEY) {
//   //   console.error('YEXT_API_KEY environment variable not set');
//   //   return res.status(500).json({ error: 'YEXT_API_KEY environment variable not set' });
//   // }

//   // if (req.method === 'GET') {
//   //   try {
//   //     console.log('Making fetch request to Yext API');
//   //     const response = await fetch(YEXT_API_URL);
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! status: ${response.status}`);
//   //     }
//   //     const data = await response.json();
//   //     res.status(200).json(data);
//   //   } catch (error) {
//   //     console.error('Fetch request failed:', (error as Error).message);
//   //     res.status(500).json({ error: (error as Error).message });
//   //   }
//   // } else {
//   //   console.warn('Method not allowed:', req.method);
//   //   res.setHeader('Allow', ['GET']);
//   //   res.status(405).end(`Method ${req.method} Not Allowed`);
//   // }
// };

// export default handler;
