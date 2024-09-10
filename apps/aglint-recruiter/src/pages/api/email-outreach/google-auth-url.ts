// Import required modules
import { OAuth2Client } from 'google-auth-library';
import { type NextApiRequest, type NextApiResponse } from 'next';

// Set up OAuth2 client
const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXT_PUBLIC_HOST_NAME}/auth-email/google`,
);

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://mail.google.com/',
      ],
    });

    return res.status(200).json(authUrl);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default handler;
