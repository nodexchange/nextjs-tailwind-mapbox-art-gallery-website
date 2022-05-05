// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { generatePassword } from '../../lib/security';

// POST /api/register
// Required fields in body: email, password
export default async function handle(req, res) {
  const content = {...req.body};
  content.password = generatePassword(content.password);
  try {
    const result = await prisma.user.create({
      data: {
        ...content
      },
    });
    res.json(result);
  } catch (e) {
    console.log('Register error', e.message);
    return res.status(400).json({error: true, message: `Register error. Are you already registered? If error presists, please contact us at latin_shine@outlook.co.uk.`});
  }
}