import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function handle(req, res) {
  const { email, firstName, lastName, beginner } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  const selectedTag = beginner ? 'experienced' : 'beginner';
  // const response = await mailchimp.lists.getListMergeFields(process.env.MAILCHIMP_AUDIENCE_ID);

  // const response2 = await mailchimp.lists.addListMergeField(process.env.MAILCHIMP_AUDIENCE_ID, {
  //   name: "experience",
  //   type: "text",
  // });

  // const response3 = await mailchimp.lists.getListMergeFields(process.env.MAILCHIMP_AUDIENCE_ID);

  // return res.status(201).json({ error: '' });

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      "merge_fields": {
        "FNAME": firstName,
        "LNAME": lastName,
        "MMERGE6": selectedTag
      },
      status: 'subscribed',
    });
    return res.status(201).json({ error: '' });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
