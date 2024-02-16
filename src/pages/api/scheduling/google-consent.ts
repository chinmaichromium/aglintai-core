import { NextApiRequest, NextApiResponse } from 'next';

// Import required modules
const { OAuth2Client } = require('google-auth-library');

// Set up OAuth2 client
const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_SCHEDULE_CLIENT_ID,
  process.env.GOOGLE_SCHEDULE_CLIENT_SECRET,
  process.env.GOOGLE_SCHEDULE_REDIRECT_URI,
);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/calendar.events',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
    });

    return res.status(200).json(authUrl);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default handler;
