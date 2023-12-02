import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    // Read the JSON file
    const filePath = './recordings/'+id+'.json';
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Send the JSON data as the response
    res.status(200).json(data);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Failed to read JSON file' });
  }
}
