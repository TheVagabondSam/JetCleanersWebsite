import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // sua chave na variável de ambiente

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not available' });
    }

    const {
        name,
        address,
        phone,
        company,
        service,
        gardenTap,
        frequency,
        size,
        access,
        message,
    } = req.body;

    if (!name || !address || !phone || !service) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        await resend.emails.send({
            from: 'Your site <contato@seudominio.com>', // o email verificado na Resend
            to: ['thomazrussian@gmail.com'], // substitua pelo e-mail do dono do site
            subject: `Novo formulário recebido de ${name}`,
            html: `
            <h2>Informações do Formulário:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service Required:</strong> ${service}</p>
            <p><strong>Garden Tap:</strong> ${gardenTap}</p>
            <p><strong>Frequency:</strong> ${frequency}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Access to Area:</strong> ${access}</p>
            <p><strong>Message:</strong><br/> ${message.replace(/\n/g, '<br/>')}</p>
        `,
        });
    

    return res.status(200).json({ success: true });
    } catch (error) {
    console.error('Error when sending e-mail:', error);
    return res.status(500).json({ error: 'Error when sending e-mail.' });
    }
}
