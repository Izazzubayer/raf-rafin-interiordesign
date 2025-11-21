'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PrivacyPolicyPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.privacy-hero', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.privacy-section', {
        scrollTrigger: {
          trigger: '.privacy-section',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const lastUpdated = 'January 1, 2026'

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            At Umbrella Interiors (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
          </p>
          <p>
            By accessing or using our website at <strong>umbrellainteriors.com</strong>, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
          </p>
          <p>
            This policy applies to all information collected through our website, services, and any related applications, sales, marketing, or events (we refer to them collectively in this Privacy Policy as the &quot;Services&quot;).
          </p>
        </div>
      ),
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <Eye className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Personal Information</h4>
            <p className="body-text text-neutral-700 mb-3">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 body-text text-neutral-700 ml-4">
              <li>Register for an account or create a profile</li>
              <li>Request information about our services</li>
              <li>Fill out contact forms or request consultations</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys, contests, or promotions</li>
              <li>Contact us via email, phone, or other communication methods</li>
            </ul>
            <p className="body-text text-neutral-700 mt-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside space-y-2 body-text text-neutral-700 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Project details and preferences</li>
              <li>Budget information</li>
              <li>Property information and location</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Automatically Collected Information</h4>
            <p className="body-text text-neutral-700 mb-3">
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc list-inside space-y-2 body-text text-neutral-700 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information (type, model, screen resolution)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Cookies and Tracking Technologies</h4>
            <p className="body-text text-neutral-700">
              We use cookies, web beacons, and similar tracking technologies to collect and store information about your preferences and browsing activities. Cookies are small data files stored on your device that help us improve your experience, analyze site usage, and assist in marketing efforts. You can control cookie preferences through your browser settings, though disabling cookies may affect website functionality.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our interior design services, respond to your inquiries, and fulfill your requests</li>
            <li><strong>Communication:</strong> To send you updates, newsletters, marketing materials, and respond to your questions or concerns</li>
            <li><strong>Project Management:</strong> To manage your projects, schedule consultations, and coordinate design services</li>
            <li><strong>Business Operations:</strong> To process transactions, manage accounts, and conduct business analytics</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our terms of service, and protect our rights and interests</li>
            <li><strong>Personalization:</strong> To customize your experience, show relevant content, and provide tailored recommendations</li>
            <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, and security threats</li>
            <li><strong>Marketing:</strong> To send promotional materials, special offers, and information about new services (with your consent where required)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
          </p>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Service Providers</h4>
            <p className="mb-3">
              We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients. These providers are contractually obligated to protect your information and use it only for specified purposes.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Business Transfers</h4>
            <p className="mb-3">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Legal Requirements</h4>
            <p className="mb-3">
              We may disclose information if required by law, court order, or governmental authority, or to protect our rights, property, or safety, or that of our clients or others.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">With Your Consent</h4>
            <p className="mb-3">
              We may share your information with your explicit consent or at your direction.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Encryption of sensitive data in transit and at rest</li>
            <li>Secure servers and databases</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication procedures</li>
            <li>Employee training on data protection</li>
            <li>Incident response and breach notification procedures</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and contractual obligations</li>
            <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
          </p>
        </div>
      ),
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider when determining retention periods include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>The nature and sensitivity of the information</li>
            <li>The purposes for which we collected it</li>
            <li>Legal, contractual, or regulatory requirements</li>
            <li>The potential risk of harm from unauthorized use or disclosure</li>
            <li>Whether we can achieve the purposes through other means</li>
          </ul>
          <p>
            When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.
          </p>
        </div>
      ),
    },
    {
      id: 'children-privacy',
      title: 'Children&apos;s Privacy',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
          </p>
        </div>
      ),
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. When we transfer information across borders, we take appropriate safeguards to ensure your information receives adequate protection, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Using standard contractual clauses approved by relevant data protection authorities</li>
            <li>Ensuring recipients are bound by appropriate data protection obligations</li>
            <li>Conducting due diligence on third-party service providers</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links and Services',
      icon: <Eye className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Our website may contain links to third-party websites, services, or applications that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
          <p>
            This Privacy Policy does not apply to information collected by third parties, even if accessed through our website. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </div>
      ),
    },
    {
      id: 'policy-updates',
      title: 'Changes to This Privacy Policy',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Posting the updated policy on this page with a new &quot;Last Updated&quot; date</li>
            <li>Sending an email notification to registered users (where applicable)</li>
            <li>Displaying a prominent notice on our website</li>
          </ul>
          <p>
            Your continued use of our Services after any changes to this Privacy Policy constitutes acceptance of those changes. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 section-padding bg-gradient-to-br from-beige to-cream">
        <div className="container-width">
          <div className="privacy-hero max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-medium tracking-wider uppercase rounded-full">
                Legal Information
              </span>
            </motion.div>
            <h1 className="heading-1 text-slate mb-6">Privacy Policy</h1>
            <p className="body-text text-lg text-neutral-700 leading-relaxed mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-neutral-600">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-3 text-slate mb-6">Table of Contents</h2>
            <nav className="bg-beige rounded-sm p-6">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-slate hover:text-gold transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="text-gold">•</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-spacing">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="privacy-section scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center text-gold">
                    {section.icon}
                  </div>
                  <h2 className="heading-2 text-slate flex-1">{section.title}</h2>
                </div>
                <div className="ml-16">{section.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-beige rounded-sm p-8 md:p-12 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Mail className="w-7 h-7" />
                </div>
                <h2 className="heading-3 text-slate mb-0">Have questions? Reach out.</h2>
              </div>
              <p className="body-text text-neutral-700 mb-8">
                Share your details and our team will follow up promptly about privacy requests.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="section-spacing bg-gradient-to-br from-beige to-cream">
        <div className="container-width section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="btn-primary inline-flex items-center"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
