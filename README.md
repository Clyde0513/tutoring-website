# Joshua Baer Tutoring Website

A beautiful and modern tutoring website built with Next.js, TypeScript, and Tailwind CSS. This website specializes in Math, Physics, and Chemistry tutoring services.

## Features

- **Modern Design**: Clean, professional, and aesthetically pleasing interface
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Navigation**: Easy-to-use navigation with smooth scrolling
- **Contact Integration**: Multiple ways for students to reach Joshua
- **Interactive Components**: Animated elements using Framer Motion
- **Professional Presentation**: Dedicated space for Joshua's professional photo

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Adding Joshua's Professional Photo
Replace the placeholder in the Hero component (`components/Hero.tsx`) with Joshua's actual professional photo:

1. Add the photo to the `public` folder
2. Update the Hero component to use the actual image
3. Ensure the image is high-quality and professional

### Contact Information
Update the contact details in `components/Contact.tsx`:
- Email address: Currently set to `joshua.baer@example.com`
- Phone number: Currently set to `(555) 123-4567`
- Location/city: Update as needed
- Availability hours: Customize for Joshua's schedule

### Pricing
Adjust pricing information in `components/Services.tsx` (currently set to $75/hour).

## Contact Features

The website includes multiple ways for students to contact Joshua:

1. **Email**: Direct mailto links
2. **Phone**: Click-to-call functionality
3. **SMS**: Text message links
4. **Contact Form**: Structured form with subject categories

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Modern icon library