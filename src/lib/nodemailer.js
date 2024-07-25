import nodemailer from 'nodemailer';

export const sendEmail = async () => {

    const to = 'gauravgames26@gmail.com'
    const subject = "New Update from PynChe website"

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // let attachments = null;

        // if(ticketId){
        //     attachments = [
        //         {
        //             filename: `ticket_${ticketId}.pdf`,
        //             content: pdfBuffer,
        //             contentType: 'application/pdf',
        //         },
        //     ]
        // }

        // if(!htmlContent){
        //     htmlContent = "A new submission has been received"
        // }

        const htmlContent = `A new submission has been received - ${to}`

        // Set email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: htmlContent,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

