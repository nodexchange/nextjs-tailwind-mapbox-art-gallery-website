// import { getSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { login } from '../../lib/security';

// POST /api/login
// Required fields in body: username
// Optional fields in body: password
export default async function handle(req, res) {
  const email = req.body.username;
  const password = req.body.password;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user) {
    if (login(password, user.password)) return res.json(user); 
  };
  return res.json({error: true});
}