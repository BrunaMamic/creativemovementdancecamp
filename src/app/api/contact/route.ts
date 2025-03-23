// import { NextResponse } from "next/server";
// import Mailgun from "mailgun.js";
// import FormData from "form-data";
//
// export async function POST(req: Request) {
//
//
//     try {
//         console.log('Evala')
//         const API_KEY = process.env.MAILGUN_API_KEY ?? '';
//         const DOMAIN = process.env.MAILGUN_DOMAIN ?? '';
//
//         const mailgun = new Mailgun(FormData);
//         const mg = mailgun.client({
//             username: "api",
//             key: process.env.MAILGUN_API_KEY || "API_KEY",
//             // When you have an EU-domain, you must specify the endpoint:
//             url: `https://api.eu.mailgun.net/v3/${DOMAIN}`,
//         });
//
//         console.log('-->')
//
//
//         const { name, email, description } = await req.json();
//
//         if (!name || !email || !description) {
//             return NextResponse.json({ error: "All fields are required" }, { status: 400 });
//         }
//
//         console.log('--->')
//         const data = await mg.messages.create("mg.creativemovementdancecamp.com", {
//             from: "Mailgun Sandbox <postmaster@mg.creativemovementdancecamp.com>",
//             to: ["Bruna Mamic <brunamamic00@gmail.com>"],
//             subject: `New Contact Form Submission from ${name}`,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${description}`,
//         });
//
//
//         console.log('--->',data); // logs response data
//
//
//
//         console.log(API_KEY, DOMAIN);
//
//         // const url = `https://api.mailgun.net/v3/${DOMAIN}/messages`;
//
//         // const formData = new URLSearchParams();
//         // formData.append("from", `Contact Form <contact@${DOMAIN}>`);
//         // formData.append("to", "brunamamic00@gmail.com");
//         // formData.append("subject", `New Contact Form Submission from ${name}`);
//         // formData.append("text", `Name: ${name}\nEmail: ${email}\nMessage: ${description}`);
//
//         // const auth = `Basic ${Buffer.from(`api:${API_KEY}`).toString("base64")}`;
//         //
//         // const response = await fetch(url, {
//         //     method: "POST",
//         //     headers: {
//         //         Authorization: auth,
//         //         "Content-Type": "application/x-www-form-urlencoded",
//         //     },
//         //     body: formData.toString(),
//         // });
//         //
//         // const responseBody = await response.text();
//         // console.log("Mailgun Response:", responseBody);
//         //
//         // if (!response.ok) {
//         //     throw new Error(`Failed to send email: ${responseBody}`);
//         // }
//
//         return NextResponse.json({ success: true });
//     } catch (error) {
//         return NextResponse.json({ error: error }, { status: 500 });
//     }
// }

export async function POST(req: Request) {
    try {
        // Parse JSON from request body
        const { name, email, description } = await req.json();

        // Validate input
        if (!name || !email || !description) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const API_KEY = process.env.MAILGUN_API_KEY;
        const DOMAIN = process.env.MAILGUN_DOMAIN;
        const url = `https://api.eu.mailgun.net/v3/${DOMAIN}/messages`;

        const formData = new URLSearchParams();
        formData.append("from", `Contact Form <postmaster@${DOMAIN}>`);
        formData.append("to", "creative.movement.camp@gmail.com");
        formData.append("h:Reply-To", email);
        formData.append("subject", `New Message from ${name} via creativemovementdancecamp.com`);
        formData.append(
            "text",
            `You received a new message from your contact form:\n\n
            Name: ${name}\n
            Email: ${email}\n
            Message: ${description}`
        );

        const auth = `Basic ${Buffer.from(`api:${API_KEY}`).toString("base64")}`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: auth,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        // Parse Mailgun response
        const result = await response.json();
        console.log("Mailgun Response:", result);

        if (!response.ok) {
            return new Response(JSON.stringify({ error: result.message || "Failed to send email" }), { status: response.status });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Mailgun Error:", error);
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}
