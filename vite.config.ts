import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// In-development mock store for testing in AI Studio preview without needing a local LAMP/XAMPP stack
const devDb = {
  event_settings: {
    id: 1,
    event_name: "BMO 150th Week Celebration",
    event_date: "2026-10-13",
    event_time: "08:00 AM - 01:30 PM IST",
    venue: "Kalyana Mandapam & Convention Centre",
    location: "Kumbakonam, Tamil Nadu",
    description: "Celebrating 150 weeks of business synergy, trust and referrals.",
    hero_title: "150TH WEEK CELEBRATION",
    hero_subtitle: "A COMMUNITY OF BUSINESS OWNERS BUILDING CONNECTIONS THAT MATTER.",
    phone: "+91 98400 12345",
    email: "info@bmokumbakonam.org",
    whatsapp: "+91 98400 12345",
    google_maps_url: "https://maps.google.com/?q=Kumbakonam+Tamil+Nadu",
  },
  journey: [
    { id: 1, week_number: "Week 1", title: "The Beginning", description: "First circle of passionate local entrepreneurs assembled in Kumbakonam.", sort_order: 1 },
    { id: 2, week_number: "Week 25", title: "Growing Community", description: "Cross-sector knowledge exchange and first 100 business referrals exchanged.", sort_order: 2 },
    { id: 3, week_number: "Week 50", title: "More Opportunities", description: "Expanded membership footprint with specialized industry focus sessions.", sort_order: 3 },
    { id: 4, week_number: "Week 100", title: "Stronger Together", description: "Milestone century mark with multi-crore business synergy generated.", sort_order: 4 },
    { id: 5, week_number: "Week 150", title: "A Milestone to Celebrate", description: "A proud gala celebration of solidarity, enterprise, and future growth.", sort_order: 5 },
  ],
  testimonials: [
    {
      id: 1,
      name: "Sample Member 01",
      business_name: "Kumbakonam Agro Enterprises",
      designation: "Managing Director",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      quote: "BMO provided a structured, ethical platform to share leads and learn best practices. Over the past 150 weeks, our business expanded across the Delta region with trusted partner support.",
    },
    {
      id: 2,
      name: "Sample Member 02",
      business_name: "Heritage City Infra Builders",
      designation: "Founder & CEO",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      quote: "The camaraderie and business discipline within BMO are unparalleled. Every meeting brings tangible value, trusted referrals, and sincere professional encouragement.",
    },
    {
      id: 3,
      name: "Sample Member 03",
      business_name: "Thanjavur Art & Crafts Export",
      designation: "Principal Partner",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      quote: "Celebrating 150 weeks is proof of our collective consistency. BMO isn't just a networking chapter; it is an extended business family that cheers each other's triumphs.",
    }
  ],
  gallery: [
    { id: 1, title: "Weekly Business Exchange Forum", category: "Meetings", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", date: "Meeting Session" },
    { id: 2, title: "100th Week Milestone Celebration", category: "Events", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", date: "Milestone Event" },
    { id: 3, title: "Business Networking & Referrals", category: "Members", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", date: "Member Synergy" },
    { id: 4, title: "Leadership Panel & Growth Strategy", category: "Events", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80", date: "Leadership Summit" },
    { id: 5, title: "Kumbakonam Regional Business Circle", category: "Meetings", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", date: "Regional Meet" },
    { id: 6, title: "Member Achievements & Honors", category: "Members", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", date: "Recognition Meet" },
    { id: 7, title: "Inspiring Keynote & Vision 2030", category: "Videos", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", date: "Keynote Session" },
    { id: 8, title: "Collaborative Partnerships & MOUs", category: "Events", image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=800&q=80", date: "Partnerships" }
  ],
  messages: [] as any[],
};

function devApiPlugin(): Plugin {
  return {
    name: 'dev-bmo-api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        if (url.startsWith('/api/')) {
          res.setHeader('Content-Type', 'application/json');

          if (url.includes('event.php') || url === '/api/event') {
            res.end(JSON.stringify({ success: true, data: devDb.event_settings }));
            return;
          }

          if (url.includes('settings.php') || url === '/api/settings') {
            res.end(JSON.stringify({
              success: true,
              data: {
                ...devDb.event_settings,
                social_links: [
                  { platform: "facebook", url: "https://facebook.com" },
                  { platform: "instagram", url: "https://instagram.com" },
                  { platform: "linkedin", url: "https://linkedin.com" },
                  { platform: "youtube", url: "https://youtube.com" },
                ]
              }
            }));
            return;
          }

          if (url.includes('journey.php') || url === '/api/journey') {
            res.end(JSON.stringify({ success: true, data: devDb.journey }));
            return;
          }

          if (url.includes('testimonials.php') || url === '/api/testimonials') {
            res.end(JSON.stringify({ success: true, data: devDb.testimonials }));
            return;
          }

          if (url.includes('gallery.php') || url === '/api/gallery') {
            res.end(JSON.stringify({ success: true, data: devDb.gallery }));
            return;
          }

          if (url.includes('contact.php') || url === '/api/contact') {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body || '{}');
                  if (!data.full_name || !data.phone || !data.email || !data.message) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ success: false, message: 'Please fill in all required fields.' }));
                    return;
                  }
                  devDb.messages.push({
                    id: devDb.messages.length + 1,
                    ...data,
                    created_at: new Date().toISOString()
                  });
                  res.end(JSON.stringify({
                    success: true,
                    message: 'Thank you! Your message has been received by BMO desk.'
                  }));
                } catch {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ success: false, message: 'Invalid payload.' }));
                }
              });
              return;
            }
          }
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), devApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
