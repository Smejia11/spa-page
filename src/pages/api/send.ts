import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string | undefined = process.env.FROM_EMAIL;
const toEmail: string | undefined = process.env.TO_EMAIL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (fromEmail === undefined || toEmail === undefined) {
            return res.status(500).json({ message: 'Sufrimos un error inesperado: el correo del remitente no está configurado.' });
        }

        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Método no permitido. Utilice POST para enviar correos electrónicos.' });
        }

        const { email, description, name } = req.body;

        if (!email || !name || !description) {
            return res.status(400).json({ message: 'Faltan campos obligatorios en la solicitud.' });
        }

        const data = await resend.emails.send({
            from: fromEmail as string,
            to: [toEmail],
            subject: 'Nuevo contacto',
            react: EmailTemplate({ name, description, email }),
            text: ''
        });

        return res.status(200).json(data);
    } catch (error) {
        if (error instanceof Error)
            return res.status(500).json({ message: 'Se produjo un error inesperado al enviar el correo.', error: error.message });
    }
}
