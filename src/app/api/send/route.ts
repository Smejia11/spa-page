
import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string | undefined = process.env.FROM_EMAIL;
const toEmail: string | undefined = process.env.TO_EMAIL


export async function POST(req: { json: () => PromiseLike<{ email: any; description: any; name: any; }> | { email: any; description: any; name: any; }; }) {
    try {

        if (fromEmail === undefined || toEmail === undefined) {
            return NextResponse.json({ message: 'Sufrimos un error inesperado: el correo del remitente no está configurado.' });
        }

        const { email, description, name } = await req.json()

        if (!email || !name || !description) {
            return NextResponse.json({ message: 'Faltan campos obligatorios en la solicitud.' });
        }

        const data = await resend.emails.send({
            from: fromEmail as string,
            to: [toEmail],
            subject: 'Nuevo contacto',
            react: EmailTemplate({ name, description, email }),
            text: ''
        });

        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof Error)
            return NextResponse.json({ error });
    }
}
