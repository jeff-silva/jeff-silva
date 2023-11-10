import axios from 'axios';

export default async () => {
  const access_token = 'xxx';
  const headers = { 'Authorization': `Bearer ${access_token}` };
  try {
    // const { data } = await axios.get('https://api.linkedin.com/v2/me', { headers });
    const { data } = await axios.get('https://api.linkedin.com/v2/people', { headers });
    console.log(data);
  } catch(e) {
    console.log(e.message);
  }
};