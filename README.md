# Joshua's STEM Tutoring Website

A modern, professional tutoring website for Joshua Baer, built with Next.js, TypeScript, and Tailwind CSS. Features a clean green design theme and comprehensive STEM tutoring services with seamless contact integration.

## Features

- **Modern Design**: Clean green gradient color scheme with professional styling
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Interactive elements powered by Framer Motion
- **EmailJS Integration**: Contact form with direct email sending capability
- **Multiple Contact Options**: Email, SMS, phone, and contact form
- **Service Showcase**: Detailed tutoring services for Chemistry, Physics, and Calculus
- **Professional About Section**: Comprehensive introduction and credentials
- **High Performance**: Built with Next.js 15 and modern React 19

## Page Sections

### Hero Section

- Large-scale "JOSHUA" title with gradient text effects
- Professional circular profile photo
- Call-to-action buttons for quick contact
- Animated elements and smooth scrolling

### About Section

- Comprehensive background and qualifications
- Educational credentials and experience
- Teaching philosophy and approach
- Professional achievements

### Services Section

- **Chemistry**: High school/Honors, AP Chemistry, College General Chemistry
- **Physics**: AP Physics C (Mechanics & E&M), College General Physics  
- **Calculus**: AP Calculus AB, College Calculus 1
- One-on-one personalized sessions
- Flexible scheduling options

### Contact Section

- Interactive contact form with EmailJS integration
- Multiple contact methods (email, SMS, phone)
- Availability information and location details
- Automatic fallback to mailto if EmailJS fails

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

Create a `.env` file in the root directory:

```env
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

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website! 

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

- **Email**: <dinojosh2014@gmail.com>
- **Phone**: (818) 826-9912
- **SMS**: (818) 826-9912
- **Availability**: Everyday after 12 PM
- **Location**: Online sessions worldwide

### Services & Pricing

Update tutoring services and rates in `components/Services.tsx`.

## 📁 Project Structure

```text
tutoring-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Main landing page
│   └── favicon.ico       # Site favicon
├── components/            # React components
│   ├── About.tsx         # About Joshua section
│   ├── Contact.tsx       # Contact form & information
│   ├── Hero.tsx          # Hero section with main CTA
│   ├── Navigation.tsx    # Top navigation bar
│   └── Services.tsx      # Tutoring services showcase
├── public/               # Static assets
│   ├── Josh_professional.JPG    # Profile photo
│   ├── Tutoring_Logo_JB.png    # Site logo
│   └── *.svg            # Various icons
├── .env                 # Environment variables (not tracked)
├── package.json         # Dependencies and scripts
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Technologies Used

- **Next.js 15.3.3**: React framework with App Router and Turbopack
- **React 19**: Latest React with concurrent features  
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12.18.1**: Animation and gesture library
- **EmailJS 4.4.1**: Client-side email sending
- **Lucide React 0.516.0**: Modern icon library
- **Heroicons 2.2.0**: Additional icon set

## Contact Features

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

This project is proprietary. All rights reserved.

## About Joshua Baer

Dedicated tutor specializing in STEM subjects with a focus on personalized learning approaches and academic excellence. Available for online tutoring sessions worldwide.

---

For questions or support, contact: <dinojosh2014@gmail.com> or <clyde0513@g.ucla.edu> or <iclyde.villacrusis@gmail.com>
