// pages/api/spotify.js

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          trackId: // Fetch the token
          any;
        }): void;
        new (): any;
      };
    };
  }
) {
  // Fetch the token
  const tokenResponse = await fetch(
    'https://api.nango.dev/connection/tammilore@gmail.com?provider_config_key=spotify',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.NANGO_SECRET_KEY}`,
      },
    }
  );

  const tokenData = await tokenResponse.json();

  // Fetch the current song
  const songResponse = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenData.credentials.access_token}`,
      },
    }
  );

  const songData = await songResponse.json();

  res.status(200).json({ trackId: songData.item.id });
}
