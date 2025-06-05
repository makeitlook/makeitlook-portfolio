import Web3ContactForm from "@/components/ContactForm/ContactForm";
import PageLayout from "@/components/Layouts/PageLayout";
import { Mail, Phone, Building2, Instagram } from "lucide-react";
import { contactInfo } from "@/data/contactData";
import SEO from "@/components/SEO/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the Make It Look team to discuss your next project."
        url="https://makeitlook.co.uk/contact"
        image="/images/og-image.png"
      />
      <section id="contact">
        <PageLayout>
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 pb-12">
            <div className="relative ">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-elements-secondary-contrastText">
                  Let&#39;s{" "}
                  <span className="text-elements-primary-main">Connect</span>
                </h2>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Got a project in mind? Fill out the form below or reach out
                  through any of these channels.
                </p>
                <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <Phone
                        aria-hidden="true"
                        className="h-7 w-6 text-gray-400"
                      />
                    </dt>
                    <dd>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <Mail
                        aria-hidden="true"
                        className="h-7 w-6 text-gray-400"
                      />
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-6 w-6" />
                    </dt>
                    <dd>
                      <a
                        href="https://www.instagram.com/makeitlook_"
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <p className="text-text-primary">@makeitlook_</p>
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="bg-neutral-dimmed p-4 rounded-md mt-8 sm:mt-0">
              <Web3ContactForm accessKey="400d16a4-fddd-41ab-9f18-1836a575faa2" />
            </div>
          </div>
        </PageLayout>
      </section>
    </>
  );
}
