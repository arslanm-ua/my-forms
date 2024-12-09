import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  success?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Nur POST-Anfragen erlaubt' });
  }

  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: 'E-Mail und Name sind erforderlich' });
  }

  try {
    // Verbindung zur D1-Datenbank
    const result = await process.env.DATABASE.prepare(
      'INSERT INTO leads (email, name) VALUES (?, ?)'
    ).bind(email, name).run();

    res.status(200).json({ message: 'Lead erfolgreich gespeichert!', success: true });
  } catch (error) {
    console.error('Fehler beim Speichern des Leads:', error);
    
  }
}
