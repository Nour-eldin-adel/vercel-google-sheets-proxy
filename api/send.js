export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzwE4kBe3BtxJ4W2hP2qyU9-SMIgmrx5wjs2vvbTUO9H59HCVu71vq9D4oj-qIJiuFrrg/exec',
      {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: text });
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: err.message });
  }
}
