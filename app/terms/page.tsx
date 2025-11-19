'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FileText, Scale, AlertCircle, CreditCard, Shield, Users, Gavel, Mail } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TermsOfServicePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.terms-hero', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.terms-section', {
        scrollTrigger: {
          trigger: '.terms-section',
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

  const lastUpdated = 'January 1, 2024'

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement to Terms',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you&quot; or &quot;Client&quot;) and Umbrella Interiors (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding your use of our website, services, and any related applications (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services. These Terms apply to all visitors, users, and others who access or use the Services.
          </p>
          <p>
            We reserve the right to change, modify, or revise these Terms at any time. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
          </p>
        </div>
      ),
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Umbrella Interiors provides interior design services, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Residential interior design and space planning</li>
            <li>Design consultations and project management</li>
            <li>Custom furniture and fixture design</li>
            <li>Material selection and procurement assistance</li>
            <li>3D renderings and design visualizations</li>
            <li>Project coordination and contractor management</li>
            <li>Design-related advisory services</li>
          </ul>
          <p>
            The specific services to be provided will be detailed in a separate written agreement or proposal (&quot;Project Agreement&quot;) that will be executed between you and Umbrella Interiors for each project. These Terms govern the general use of our Services and website, while specific project terms will be outlined in the Project Agreement.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice, and without liability to you.
          </p>
        </div>
      ),
    },
    {
      id: 'user-obligations',
      title: 'User Obligations and Conduct',
      icon: <AlertCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            When using our Services, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Provide accurate, current, and complete information about yourself and your project</li>
            <li>Maintain and promptly update your information to keep it accurate and complete</li>
            <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
            <li>Respect the intellectual property rights of Umbrella Interiors and third parties</li>
            <li>Not engage in any activity that interferes with or disrupts the Services</li>
            <li>Not attempt to gain unauthorized access to any portion of the Services</li>
            <li>Not use the Services to transmit any harmful code, viruses, or malicious software</li>
            <li>Not impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            <li>Not use the Services in any manner that could damage, disable, or impair our servers or networks</li>
            <li>Comply with all applicable local, state, national, and international laws and regulations</li>
          </ul>
          <p className="mt-4">
            Violation of any of these obligations may result in immediate termination of your access to the Services and may subject you to legal liability.
          </p>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Our Intellectual Property</h4>
            <p className="mb-3">
              All content, features, and functionality of the Services, including but not limited to text, graphics, logos, images, designs, software, and other materials (collectively, the &quot;Content&quot;), are owned by Umbrella Interiors, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p>
              You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the Content without our prior written consent, except as expressly permitted by these Terms.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Design Work and Project Materials</h4>
            <p className="mb-3">
              All design concepts, drawings, specifications, renderings, and other materials created by Umbrella Interiors in connection with a project (&quot;Design Materials&quot;) remain the property of Umbrella Interiors until full payment has been received for the project. Upon full payment, you will receive a license to use the Design Materials for the specific project for which they were created.
            </p>
            <p>
              Umbrella Interiors retains the right to use completed projects and Design Materials for marketing, promotional, and portfolio purposes, unless otherwise agreed in writing. You grant Umbrella Interiors a non-exclusive, royalty-free license to photograph, publish, and display the completed project in our portfolio and marketing materials.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Your Content</h4>
            <p>
              You retain ownership of any content, information, or materials you provide to us (&quot;Your Content&quot;). By providing Your Content, you grant Umbrella Interiors a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display Your Content solely for the purpose of providing the Services to you.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: <CreditCard className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            Payment terms for specific projects will be detailed in the Project Agreement. Generally:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Payment schedules will be established in the Project Agreement</li>
            <li>Initial deposits may be required before work commences</li>
            <li>Progress payments may be required at various project milestones</li>
            <li>Final payment is typically due upon project completion and delivery</li>
            <li>All prices are in the currency specified in the Project Agreement</li>
            <li>Prices are subject to change for materials, labor, or other costs beyond our control</li>
          </ul>
          <div className="mt-6">
            <h4 className="font-serif text-lg text-slate mb-3">Late Payments</h4>
            <p className="mb-3">
              If payment is not received by the due date, we reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Suspend work on the project until payment is received</li>
              <li>Charge interest on overdue amounts at a rate specified in the Project Agreement</li>
              <li>Withhold delivery of Design Materials or project deliverables</li>
              <li>Terminate the project agreement</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="font-serif text-lg text-slate mb-3">Additional Costs</h4>
            <p>
              Additional costs may be incurred for changes to the original design, additional revisions beyond the agreed scope, rush services, or other modifications requested by you. These costs will be communicated and approved before work proceeds.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'cancellation-refunds',
      title: 'Cancellation and Refunds',
      icon: <AlertCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Cancellation by Client</h4>
            <p className="mb-3">
              If you wish to cancel a project, you must provide written notice to Umbrella Interiors. Cancellation terms will be specified in your Project Agreement. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You will be responsible for payment for all work completed up to the date of cancellation</li>
              <li>Deposits are typically non-refundable unless otherwise specified</li>
              <li>You may be responsible for costs incurred for materials ordered or services contracted on your behalf</li>
              <li>Design Materials remain the property of Umbrella Interiors until full payment is received</li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Cancellation by Umbrella Interiors</h4>
            <p className="mb-3">
              We reserve the right to cancel or terminate a project agreement if:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You fail to make payments as required</li>
              <li>You breach any material term of the agreement</li>
              <li>Circumstances arise that make completion of the project impractical or impossible</li>
              <li>You engage in conduct that is harmful to our business or reputation</li>
            </ul>
            <p className="mt-4">
              In the event of cancellation by Umbrella Interiors, you will be responsible for payment for all work completed and costs incurred up to the date of cancellation.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Refunds</h4>
            <p>
              Refund policies will be specified in your Project Agreement. Generally, refunds are not provided for completed work or services already rendered. If you are dissatisfied with our services, please contact us to discuss potential resolutions.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'warranties',
      title: 'Warranties and Disclaimers',
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Our Warranties</h4>
            <p>
              We warrant that we will perform the Services with reasonable care and skill, in accordance with generally accepted professional standards for interior design services. We will use our best efforts to meet any deadlines specified in the Project Agreement, subject to factors beyond our reasonable control.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Disclaimers</h4>
            <p className="mb-3">
              EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS OR THE PROJECT AGREEMENT, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Implied warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties regarding the accuracy, completeness, or reliability of any information or materials</li>
              <li>Warranties that the Services will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding third-party products, materials, or services</li>
            </ul>
            <p className="mt-4">
              We do not guarantee specific results or outcomes from the use of our Services. Design preferences are subjective, and we cannot guarantee that you will be satisfied with the final design.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Third-Party Products and Services</h4>
            <p>
              We may recommend or facilitate the purchase of products, materials, or services from third parties. We are not responsible for the quality, safety, or performance of third-party products or services. Any warranties provided by third parties are between you and the third party.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <Scale className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL UMBRELLA INTERIORS, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UMBRELLA INTERIORS ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Errors, mistakes, or inaccuracies in the Services or Content</li>
            <li>Personal injury or property damage resulting from your access to or use of the Services</li>
            <li>Any unauthorized access to or use of our servers or any personal information stored therein</li>
            <li>Any interruption or cessation of transmission to or from the Services</li>
            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Services</li>
            <li>Any errors or omissions in any Content or for any loss or damage incurred as a result of the use of any Content</li>
            <li>Delays, failures, or problems inherent in the use of the Internet and electronic communications</li>
          </ul>
          <p className="mt-4">
            IN NO EVENT SHALL UMBRELLA INTERIORS&apos; TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO UMBRELLA INTERIORS IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
          </p>
        </div>
      ),
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: <Gavel className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            You agree to defend, indemnify, and hold harmless Umbrella Interiors, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your use of the Services or violation of these Terms</li>
            <li>Your violation of any third-party rights, including intellectual property rights</li>
            <li>Your violation of any applicable law, rule, or regulation</li>
            <li>Your Content or any other content you submit, post, or transmit through the Services</li>
            <li>Your negligence or willful misconduct</li>
          </ul>
          <p className="mt-4">
            We reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.
          </p>
        </div>
      ),
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      icon: <Scale className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Informal Resolution</h4>
            <p>
              If you have any concerns or disputes regarding the Services or these Terms, we encourage you to first contact us directly to seek an informal resolution. We will make good faith efforts to resolve any disputes through direct communication.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Governing Law</h4>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Dhaka, Bangladesh.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Arbitration</h4>
            <p className="mb-3">
              For disputes that cannot be resolved informally, you and Umbrella Interiors agree to submit to binding arbitration, except as provided below. The arbitration will be conducted in Dhaka, Bangladesh, in accordance with the rules of the Bangladesh International Arbitration Centre (BIAC) or a similar arbitration body.
            </p>
            <p>
              You and Umbrella Interiors agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. If for any reason a claim proceeds in court rather than in arbitration, you and Umbrella Interiors each waive any right to a jury trial.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms and Services',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We reserve the right to modify, suspend, or discontinue the Services, or any part thereof, at any time, with or without notice, and without liability to you. We may also modify these Terms at any time by posting the modified Terms on our website and updating the &quot;Last Updated&quot; date.
          </p>
          <p>
            Your continued use of the Services after any such modifications constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must stop using the Services.
          </p>
          <p>
            We are not obligated to provide notice of changes to these Terms, but we will make reasonable efforts to notify you of material changes. It is your responsibility to review these Terms periodically for any changes.
          </p>
        </div>
      ),
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <AlertCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <p>
            We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Services will cease immediately. All provisions of these Terms that by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
          <p>
            If you wish to terminate your use of the Services, you may simply discontinue using the Services. However, any ongoing project agreements will be governed by the terms of those specific agreements.
          </p>
        </div>
      ),
    },
    {
      id: 'general-provisions',
      title: 'General Provisions',
      icon: <FileText className="w-6 h-6" />,
      content: (
        <div className="space-y-4 body-text text-neutral-700">
          <div>
            <h4 className="font-serif text-lg text-slate mb-3">Entire Agreement</h4>
            <p>
              These Terms, together with any Project Agreements, constitute the entire agreement between you and Umbrella Interiors regarding the Services and supersede all prior agreements and understandings.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Severability</h4>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Waiver</h4>
            <p>
              No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Assignment</h4>
            <p>
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign or transfer these Terms or our rights and obligations hereunder without restriction.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-slate mb-3 mt-6">Force Majeure</h4>
            <p>
              We shall not be liable for any failure or delay in performance under these Terms which is due to fire, earthquake, flood, act of God, act of war, terrorism, epidemic, pandemic, government action, or other causes which are beyond our reasonable control.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 section-padding bg-gradient-to-br from-beige to-cream">
        <div className="container-width">
          <div className="terms-hero max-w-4xl mx-auto text-center">
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
            <h1 className="heading-1 text-slate mb-6">Terms of Service</h1>
            <p className="body-text text-lg text-neutral-700 leading-relaxed mb-4">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
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

      {/* Terms Content */}
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
                className="terms-section scroll-mt-24"
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
            <div className="bg-beige rounded-sm p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <Mail className="w-8 h-8" />
                </div>
              </div>
              <h2 className="heading-3 text-slate mb-4">Questions About These Terms?</h2>
              <p className="body-text text-neutral-700 mb-6">
                If you have any questions, concerns, or need clarification regarding these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <p className="text-slate font-medium">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:legal@umbrellainteriors.com"
                    className="text-gold hover:underline"
                  >
                    legal@umbrellainteriors.com
                  </a>
                </p>
                <p className="text-slate font-medium">
                  <strong>General Contact:</strong>{' '}
                  <a
                    href="mailto:hello@umbrellainteriors.com"
                    className="text-gold hover:underline"
                  >
                    hello@umbrellainteriors.com
                  </a>
                </p>
                <p className="text-slate font-medium">
                  <strong>Phone:</strong> +880 1234-567890
                </p>
                <p className="text-slate font-medium">
                  <strong>Address:</strong> Gulshan, Dhaka, Bangladesh
                </p>
              </div>
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

