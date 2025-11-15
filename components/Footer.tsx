import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">{"Brendan Coonan Plumbing & Gasfitting"}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              Professional trade services in {"Toowoomba & Darling Downs"}
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start gap-2 text-sm sm:text-base text-gray-400">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{"15/19 Wylie St, Toowoomba QLD 4350"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation inline-block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation inline-block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>{"Plumbing & Gas Fitting"}</li>
              <li>{"Hot Water System Installations"}</li>
              <li>{"Emergency Leak Repairs"}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={`tel:0418 793 898`}
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation py-1"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{"0418 793 898"}</span>
                </a>
              </li>
              {("{{EMAIL_ADDRESS}}" !== "{{EMAIL_ADDRESS}}") && (
                <li>
                  <a
                    href={`mailto:{{EMAIL_ADDRESS}}`}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation py-1"
                  >
                    <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                    <span className="break-all">{"{{EMAIL_ADDRESS}}"}</span>
                  </a>
                </li>
              )}
              <li>
                <div className="flex items-start gap-2 text-sm sm:text-base text-gray-400 py-1">
                  <ClockIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-300 mb-1">Hours</span>
                    <span className="leading-relaxed">{"{{OPERATING_HOURS}}"}</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors"
              >
                Call now for a free quote!
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-8 border-t border-gray-800 mb-6">
          <div className="flex items-center justify-center gap-4">
            {("{{SOCIAL_FACEBOOK}}" !== "{{SOCIAL_FACEBOOK}}") && (
              <a
                href={"{{SOCIAL_FACEBOOK}}"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {("{{SOCIAL_INSTAGRAM}}" !== "{{SOCIAL_INSTAGRAM}}") && (
              <a
                href={"{{SOCIAL_INSTAGRAM}}"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {("{{SOCIAL_WEBSITE}}" !== "{{SOCIAL_WEBSITE}}") && (
              <a
                href={"{{SOCIAL_WEBSITE}}"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <GlobeAltIcon className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Legal Information */}
        <div className="pt-6 border-t border-gray-800 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-500">
            <div>
              <span className="font-medium text-gray-400">ABN:</span> {"{{ABN}}"}
            </div>
            <div>
              <span className="font-medium text-gray-400">License:</span> {"{{LICENSE_NUMBER}}"}
            </div>
            <div>
              <span className="font-medium text-gray-400">Insured:</span> {"{{INSURANCE_PROVIDER}}"}
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {"Brendan Coonan Plumbing & Gasfitting"}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <span>Licensed</span>
              <span>•</span>
              <span>Insured</span>
              <>
                <span>•</span>
                <span>{"{{YEARS_EXPERIENCE}}"} Years Experience</span>
              </>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

