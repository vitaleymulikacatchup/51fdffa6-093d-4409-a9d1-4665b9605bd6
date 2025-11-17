"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Camera, Eye, Heart, Mail, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"hover-bubble"}
      defaultTextAnimation={"background-highlight"}
      borderRadius={"pill"}
      contentWidth={"medium"}
      sizing={"large"}
      background={"gradientBars"}
      cardStyle={"layered-gradient"}
      primaryButtonStyle={"flat"}
      secondaryButtonStyle={"glass"}
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="PhotoGallery"
          button={{
            text: "Contact Me",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Capturing Life's Beautiful Moments"
          description="Professional photography services specializing in portraits, weddings, and nature photography with artistic vision and technical excellence"
          tag="Portfolio Showcase"
          tagIcon={Camera}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371970318-umbi8wyu.jpg",
              imageAlt: "Professional portrait photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371971586-omw6cfrc.jpg",
              imageAlt: "Landscape nature photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371972767-74z7323i.jpg",
              imageAlt: "Wedding photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371974120-i6vk2o1v.jpg",
              imageAlt: "Street photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763386188330-qk51tojo.jpg",
              imageAlt: "Fashion photography"
            }
          ]}
          buttons={[
            {
              text: "See My Work",
              href: "gallery"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About My Photography"
          description="With over a decade of experience capturing life's most precious moments, I specialize in creating timeless images that tell your unique story with artistic vision and professional excellence"
          tag="My Story"
          tagIcon={Heart}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371976654-mx3rqjir.jpg"
          imageAlt="Photographer in workspace"
          bulletPoints={[
            {
              title: "Professional Excellence",
              description: "10+ years of experience with state-of-the-art equipment and techniques",
              icon: Award
            },
            {
              title: "Creative Vision",
              description: "Unique artistic perspective that captures emotion and tells your story",
              icon: Eye
            },
            {
              title: "Personal Approach",
              description: "Tailored sessions that reflect your personality and vision",
              icon: Users
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardOne
          title="Photography Collections"
          description="Explore my diverse portfolio showcasing different photography styles and specialties"
          tag="Featured Work"
          tagIcon={Camera}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          features={[
            {
              title: "Nature & Landscapes",
              description: "Breathtaking natural scenes captured at golden hour with perfect composition and lighting",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371978090-s22eupt4.jpg",
              imageAlt: "Mountain landscape photography",
              button: {
                text: "View Collection",
                href: "nature"
              }
            },
            {
              title: "Portrait Sessions",
              description: "Professional headshots and artistic portraits that capture personality and character",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371982156-n5ut8zo3.jpg",
              imageAlt: "Professional portrait photography",
              button: {
                text: "View Collection",
                href: "portraits"
              }
            },
            {
              title: "Wedding Photography",
              description: "Romantic and elegant wedding photography preserving your most precious moments forever",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371985706-0tpwuef9.jpg",
              imageAlt: "Wedding ceremony photography",
              button: {
                text: "View Collection",
                href: "weddings"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Clients Say"
          description="Real testimonials from satisfied clients who trusted me to capture their special moments"
          tag="Client Reviews"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Bride",
              company: "Wedding Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371990265-1x0e2aoz.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CEO",
              company: "Corporate Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371991396-072r3rka.jpg",
              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",
              name: "Emily & David",
              role: "Couple",
              company: "Engagement Session",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371992644-ktfte9f0.jpg",
              imageAlt: "Emily and David testimonial"
            },
            {
              id: "4",
              name: "Lisa Rodriguez",
              role: "Family Client",
              company: "Portrait Session",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371993862-vpx82lzd.jpg",
              imageAlt: "Lisa Rodriguez testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Capture Your Story?"
          description="Let's discuss your photography needs and create beautiful memories together. Contact me to book your session or ask any questions about my services"
          tagIcon={Mail}
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763371995061-r2q2iue8.jpg"
          imageAlt="Photography studio setup"
          inputPlaceholder="Enter your email address"
          buttonText="Send Message"
          termsText="By contacting me, you agree to receive communication about photography services and session availability."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="PhotoGallery"
          copyrightText="© 2025 PhotoGallery | All Rights Reserved"
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Portrait Photography",
                  href: "portraits"
                },
                {
                  label: "Wedding Photography",
                  href: "weddings"
                },
                {
                  label: "Nature Photography",
                  href: "nature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "My Story",
                  href: "about"
                },
                {
                  label: "Portfolio",
                  href: "gallery"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}