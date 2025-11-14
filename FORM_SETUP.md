# Form Submission Setup Guide

The "Request a Quote" form supports multiple submission methods. Choose the one that best fits your needs:

## Option 1: Formspree (Recommended) ⭐

**Best for:** Most users - Easy setup, reliable, free tier

### Setup Steps:
1. Go to [https://formspree.io](https://formspree.io) and sign up (free)
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
4. Add to your `.env.local` file:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. Or replace `{{FORMSPREE_ENDPOINT}}` in the code with your endpoint

**Free Tier:** 50 submissions/month  
**Paid Plans:** Start at $10/month for 1,000 submissions

---

## Option 2: FormSubmit (Simplest)

**Best for:** Quick setup, no signup required

### Setup Steps:
1. Change the form endpoint in `ContactForm.tsx`:
   ```typescript
   const formEndpoint = `https://formsubmit.co/${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "{{EMAIL_ADDRESS}}"}`;
   ```
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   ```

**Note:** FormSubmit sends emails directly to your inbox. Less reliable for high volume.

---

## Option 3: EmailJS

**Best for:** Client-side email sending without backend

### Setup Steps:
1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Install: `npm install @emailjs/browser`
5. Update `ContactForm.tsx` to use EmailJS SDK

**Free Tier:** 200 emails/month

---

## Option 4: Next.js API Route (Most Flexible)

**Best for:** Full control, custom email service integration

### Setup Steps:
1. Create `app/api/contact/route.ts`
2. Integrate with email service (SendGrid, Resend, AWS SES, etc.)
3. Update form to submit to `/api/contact`

**Example with Resend:**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'your-email@example.com',
    subject: `Quote Request: ${data.serviceNeeded}`,
    html: `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p>...`,
  });
  
  return Response.json({ success: true });
}
```

---

## Option 5: Netlify Forms (Netlify Only)

**Best for:** Sites deployed on Netlify

### Setup Steps:
1. Add `data-netlify="true"` to your form
2. Add hidden input: `<input type="hidden" name="form-name" value="quote-request" />`
3. Forms are automatically detected and handled by Netlify

**Free Tier:** 100 submissions/month

---

## Quick Start (Formspree)

1. Visit [formspree.io](https://formspree.io) and create account
2. Create new form → Copy endpoint URL
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
4. Done! Forms will now submit to your email

---

## Template Mode

If no endpoint is configured, the form will show a success message for preview purposes. This allows the template to work out of the box for demonstration.

