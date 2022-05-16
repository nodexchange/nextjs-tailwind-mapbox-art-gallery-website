export default async function instagramHandler(req, res) {
  const url = process.env.INSTA_OPEN_API_URL;
  const accessKey = process.env.INSTA_OPEN_API_ACCESS_TOKEN;
  const feedUrl = `${url}${accessKey}`;
  if (req.method === 'GET') {
    const instaFeed = await fetch(feedUrl);
    const instaFeedJson = await instaFeed.json();
    res.status(200).send(instaFeedJson);
  }
}
