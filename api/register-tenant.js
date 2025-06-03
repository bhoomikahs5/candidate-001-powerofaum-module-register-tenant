export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tenantName, contactEmail } = req.body;

  if (!tenantName || !contactEmail) {
    return res.status(400).json({ error: 'Missing tenantName or contactEmail' });
  }

  const shortCode = tenantName.slice(0, 4).toUpperCase();
  const tenantId = `TEN_${shortCode}123`;
  const stripe_account_id = `acct_client_${shortCode}123`;

  return res.status(200).json({
    success: true,
    tenantId,
    stripe_account_id,
  });
}
