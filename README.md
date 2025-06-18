# Joshua Baer Tutoring Website

A modern, professional tutoring website built with Next.js, TypeScript, and Tailwind CSS. Specializing in Math, Physics, and Chemistry tutoring services with a focus on personalized learning and academic excellence.

## Features

- **Modern Design**: Clean, professional interface with gradient accents
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Interactive elements powered by Framer Motion
- **EmailJS Integration**: Direct email sending through contact forms
- **Multiple Contact Methods**: Email, phone, SMS, and contact form options
- **Professional Presentation**: Dedicated space for tutor introduction and credentials
- **Service Showcase**: Detailed tutoring services and pricing information

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tutoring-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## EmailJS Setup

This website uses EmailJS for contact form functionality:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - User's name
   - `{{from_email}}` - User's email  
   - `{{subject}}` - Email subject
   - `{{message}}` - User's message
4. Get your credentials and update the `.env.local` file

## Customization

### Contact Information
Current contact details (update in `components/Contact.tsx`):
- **Email**: dinojosh2014@gmail.com
- **Phone**: (818) 826-9912
- **SMS**: (818) 826-9912
- **Availability**: Everyday after 12 PM
- **Location**: Online sessions worldwide

### Professional Photo
Replace the placeholder in `public/Josh_professional.JPG` with the actual professional photo.

### Services & Pricing
Update tutoring services and rates in `components/Services.tsx`.

## Project Structure

```
tutoring-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form & info
│   ├── Hero.tsx          # Hero section
│   ├── Navigation.tsx    # Navigation bar
│   └── Services.tsx      # Services section
├── public/               # Static assets
└── .env.local           # Environment variables
```

## Technologies Used

- **Next.js 15.3.3**: React framework with App Router and Turbopack
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12**: Animation and gesture library
- **EmailJS**: Client-side email sending
- **Lucide React**: Modern icon library

##  Contact Features

The website provides multiple communication channels:

1. **Contact Form**: EmailJS-powered form with subject categories
2. **Direct Email**: Quick email buttons with mailto links
3. **Phone**: Click-to-call functionality for mobile users
4. **SMS**: Direct text message links
5. **Fallback**: Automatic mailto fallback if EmailJS fails

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production
Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## License

This project is private and proprietary. All rights reserved.

## 👨‍🏫 About Joshua Baer

Dedicated tutor specializing in STEM subjects with a focus on personalized learning approaches and academic excellence. Available for online tutoring sessions worldwide.

---

For questions or support, contact: dinojosh2014@gmail.com