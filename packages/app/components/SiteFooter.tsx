
import Logo from '../../../apps/expo/components/Logo'
import { Link } from 'solito/link'
import {Footer, Div, Span, UL, LI, H2, H3, P } from '@expo/html-elements';
import { Text } from '../../../apps/expo/components/text'
export function SiteFooter() {
  return (
    <Footer
      style={{ zIndex: -1000 }}
      className="relative w-full bg-red-800 -z-10 text-slate-200"
    >
      <Div className="mx-auto self-center px-4 py-12 max-w-screen-2xl">
        <Div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First column with logo */}
          <Div className="flex-1 flex-col space-y-6">
            <Link href="/" className="flex items-center">
              <Logo height={100} width={250} />
            </Link>
            <P className="mt-2 text-sm text-slate-400">
              We're dedicated to providing exceptional service and innovative
              solutions to meet your needs.
            </P>
            <Div className="mt-4 flex flex-row space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <img
                  src="https://www.svgrepo.com/show/521654/facebook.svg"
                  alt="Company Logo"
                  className="h-10"
                />
                <Span className="sr-only">Facebook</Span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <img
                  src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebe246fdedd41e706d946_X-logo-transparent-black-twitter.png"
                  alt="Company Logo"
                  className="h-10"
                />
                <Span className="sr-only">Twitter</Span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <img
                  src="https://www.svgrepo.com/show/521711/instagram.svg"
                  alt="Company Logo"
                  className="h-10"
                />
                <Span className="sr-only">Instagram</Span>
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <img
                  src="https://www.svgrepo.com/show/466487/tiktok.svg"
                  alt="Company Logo"
                  className="h-10"
                />
                <Span className="sr-only">Tik-Tok</Span>
              </Link>
            </Div>
          </Div>

          <Div className="flex">
            <H3 className="mb-4 text-white  font-semibold uppercase tracking-wider">
              Company
            </H3>
            <UL className="space-y-2">
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    About Us
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Careers
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    News
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Text>
                </Link>
              </LI>
            </UL>
          </Div>

          <Div className="flex">
            <H3 className="mb-4 text-white  font-semibold uppercase tracking-wider">
              Company
            </H3>
            <UL className="space-y-2">
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    About Us
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Careers
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    News
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Text>
                </Link>
              </LI>
            </UL>
          </Div>

          <Div className="flex">
            <H3 className="mb-4 text-white  font-semibold uppercase tracking-wider">
              Company
            </H3>
            <UL className="space-y-2">
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    About Us
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Careers
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    News
                  </Text>
                </Link>
              </LI>
              <LI>
                <Link href="#">
                  <Text className="text-lg text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Text>
                </Link>
              </LI>
            </UL>
          </Div>
        </Div>
      </Div>
      <Div className="relative mt-6 border-t border-slate-800  bg-black w-full items-center justify-center">
        <P className="mb-4 text-center text-md font-semibold text-slate-400">
          © {new Date().getFullYear()} Morphinpedia. All rights reserved...May
          the Power Protect You ⚡
        </P>
      </Div>
    </Footer>
  )
}
