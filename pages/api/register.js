// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  // const { email, firstName, lastName, telephone, eName, eContact } = req.body;

  // const session = await getSession({ req });
  try {
    const result = await prisma.user.create({
      data: {
        ...req.body
      },
    });
    res.json(result);
  } catch (e) {
    console.log('Register error', e.message);
    return res.status(400).json({error: true, message: `Register error. Are you already registered? If error presists, please contact us at latin_shine@outlook.co.uk.`});
  }
}