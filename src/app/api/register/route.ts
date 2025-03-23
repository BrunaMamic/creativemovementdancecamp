export async function POST(req: Request) {
    try {
        const { name, email, phone, birthday, category, package: selectedPackage, description } = await req.json();

        if (!name || !email || !phone || !birthday || !category || !selectedPackage) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const API_KEY = process.env.MAILGUN_API_KEY;
        const DOMAIN = process.env.MAILGUN_DOMAIN;
        const url = `https://api.eu.mailgun.net/v3/${DOMAIN}/messages`;

        const auth = `Basic ${Buffer.from(`api:${API_KEY}`).toString("base64")}`;

        // --- 1️⃣ Send Registration Data to Admin ---
        const adminFormData = new URLSearchParams();
        adminFormData.append("from", `Registration Form <postmaster@${DOMAIN}>`);
        adminFormData.append("to", "creative.movement.camp@gmail.com"); // Your email
        adminFormData.append("h:Reply-To", email); // Allows replying to the user
        adminFormData.append("subject", `New Registration from ${name}`);
        adminFormData.append(
            "text",
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBirthday: ${birthday}\nCategory: ${category}\nPackage: ${selectedPackage}\nDescription: ${description || "N/A"}`
        );

        const adminResponse = await fetch(url, {
            method: "POST",
            headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
            body: adminFormData.toString(),
        });

        if (!adminResponse.ok) {
            throw new Error("Failed to send registration email to admin");
        }

        // --- 2️⃣ Send Confirmation Email to User ---
        const userFormData = new URLSearchParams();
        userFormData.append("from", `Creative Movement Dance Camp Registration <noreply@${DOMAIN}>`);
        userFormData.append("to", email);
        userFormData.append("subject", "Creative Movement Dance Camp Registration Received - Next Steps");
        userFormData.append(
            "text",
            `Hi ${name},\n\nThank you for registering! Your submission has been received successfully. \n\nOur team will review your details and get back to you shortly with further information about payment and the next steps.\n\nIf you have any questions in the meantime, feel free to reach out via contact form on our website or via email creative.movement.camp@gmail.com.\n\nBest,\nThe Creative Movement Dance Camp Team`
        );

        const userResponse = await fetch(url, {
            method: "POST",
            headers: { Authorization: auth, "Content-Type": "application/x-www-form-urlencoded" },
            body: userFormData.toString(),
        });

        if (!userResponse.ok) {
            throw new Error("Failed to send confirmation email to user");
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
