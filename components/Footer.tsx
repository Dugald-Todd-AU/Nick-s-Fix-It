import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { 
  FacebookIcon, 
  InstagramIcon, 
  GlobeAltIcon 
} from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">{"{{BUSINESS_NAME}}"}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              Professional trade services in {"{{REGION}}"}
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-start gap-2 text-sm sm:text-base text-gray-400">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{"{{BUSINESS_ADDRESS}}"}</span>
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
              <li>{"{{SERVICE_1}}"}</li>
              <li>{"{{SERVICE_2}}"}</li>
              <li>{"{{SERVICE_3}}"}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={`tel:{{PHONE_NUMBER}}`}
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-primary transition-colors touch-manipulation py-1"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{"{{PHONE_NUMBER}}"}</span>
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
              {"{{OPERATING_HOURS}}" ? (
                <li>
                  <div className="flex items-start gap-2 text-sm sm:text-base text-gray-400 py-1">
                    <ClockIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-300 mb-1">Hours</span>
                      <span className="leading-relaxed">{"{{OPERATING_HOURS}}"}</span>
                    </div>
                  </div>
                </li>
              ) : null}
            </ul>
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors"
              >
                Request a Free Quote
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
                <FacebookIcon className="w-5 h-5 text-gray-400 hover:text-white" />
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
                <InstagramIcon className="w-5 h-5 text-gray-400 hover:text-white" />
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
        {"{{ABN}}" || "{{LICENSE_NUMBER}}" || "{{INSURANCE_PROVIDER}}" ? (
          <div className="pt-6 border-t border-gray-800 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-500">
              {"{{ABN}}" ? (
                <div>
                  <span className="font-medium text-gray-400">ABN:</span> {"{{ABN}}"}
                </div>
              ) : null}
              {"{{LICENSE_NUMBER}}" ? (
                <div>
                  <span className="font-medium text-gray-400">License:</span> {"{{LICENSE_NUMBER}}"}
                </div>
              ) : null}
              {"{{INSURANCE_PROVIDER}}" ? (
                <div>
                  <span className="font-medium text-gray-400">Insured:</span> {"{{INSURANCE_PROVIDER}}"}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Legal Links & Copyright */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {"{{BUSINESS_NAME}}"}. All rights reserved.
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
              {"{{YEARS_EXPERIENCE}}" ? (
                <>
                  <span>•</span>
                  <span>{"{{YEARS_EXPERIENCE}}"} Years Experience</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

