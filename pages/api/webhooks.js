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
        const { metadata, customer_details } = event.data.object;
        // console.log('metadata', metadata);
        // console.log('customer_details', customer_details);
        try {
          const updateUser = await prisma.user.update({
            where: {
              email: customer_details.email,
            },
            data: {
              paid: true,
              transaction: event.data.object.payment_intent,
            },
          });
          // console.log(updateUser);
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
