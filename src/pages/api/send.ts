import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string | undefined = process.env.FROM_EMAIL;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (fromEmail === undefined)
            return res.status(500).json({ message: 'Sufrimos un error inesperado vuelva a intentar mas tarde.' })
        const { email, description, name } = req.body;
        // @ts-ignore
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: 'Hello world',
            react: EmailTemplate({ name, description }),
        });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
}