import axios from 'axios';

export default function handler(req, res) {
  const API_KEY =
    'NTUwYWI1MDg2ODMxNGFmOGI0Y2Y0NWQzY2FlMmIwN2YtMTY5NzU2MTcwOA=='; // Replace with your HeyGen API key

  const headers = {
    'X-Api-Key': API_KEY,
  };

  if (req.body.video_id == null) {
    res.status(400).send('video_id is required in body');
  }
  axios
    .get(
      `https://api.heygen.com/v1/video_status.get?video_id=${req.body.video_id}`,
      {
        headers,
      },
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
}
