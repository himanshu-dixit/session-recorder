
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // ADD CORS support
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.status(200).end();
    return;
  }
  if (req.method === 'POST') {
    const { events, recordingID } = req.body;

    // Read existing data from file
    let data = [];

    const filePath = './recordings/'+recordingID+'.json';
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(fileData);
    } catch (error) {
      console.error('Error reading file:', error);
    }

    // Append new event and recording ID
    data = [...data, ...events]

    // Write updated data to file
    try {
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(200).json({ message: 'Event saved successfully' });
    } catch (error) {
      console.error('Error writing file:', error);
      res.status(500).json({ message: 'Failed to save event' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
