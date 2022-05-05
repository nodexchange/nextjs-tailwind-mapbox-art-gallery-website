import Stripe from 'stripe';
import { buffer } from 'micro';
import prisma from '../../lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function webhookHandler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sign = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SIGNING_SIGNATURE;
    let event;

    try {
      if (!sign || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sign, webhookSecret);
      if (event.type === 'checkout.session.completed') {
        const { metadata: { type }, customer_details: { email } } = event.data.object;
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          if (!user) return res.status(400).send(`Webhook error: User not found.`);

          const transaction = await prisma.transaction.create({
            data: {
              id: event.data.object.payment_intent,
              type,
              userId: user.id,
            }
          });
        } catch (e) {
          console.log('[update prisma] error', e);
        }
      }
    } catch (error) {
      console.log('Webhook error', error.message);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }
    res.status(200).send();
  }
}
