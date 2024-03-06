import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tokenResponse = await fetch(
      `https://api.nango.dev/connection/tammilore@gmail.com?provider_config_key=spotify`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.NANGO_SECRET_KEY}`,
        },
      }
    );

    if (!tokenResponse.ok) {
      throw new Error('Failed to fetch token');
    }

    const tokenData = await tokenResponse.json();

    const songResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenData.credentials.access_token}`,
        },
      }
    );

    if (!songResponse.ok) {
      throw new Error('Failed to fetch song');
    }

    const songData = await songResponse.json();

    res.status(200).json({ trackId: songData.item.id });
  } catch (error) {
    res.status(500).json({ message: 'An unknown error occured.' });
  }
}
