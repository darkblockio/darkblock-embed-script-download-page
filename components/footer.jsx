import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="text-white bg-black" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-8 xl:col-span-1">
          <img // eslint-disable-line
            className="h-10 text-white"
            src="/images/footericon.svg"
            alt="Darkblock"
          />

          <p className="text-sm text-gray-400">
            Darkblock. Decentralized unlockables. Content, web3 compatible.
            Support for Ethereum, Polygon, Solana, Tezos and Avalanche.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://discord.darkblock.io"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Discord</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
              </svg>
            </a>

            <a
              href="https://darkblock.medium.com/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Medium</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"></path>
              </svg>
            </a>

            <a
              href="https://twitter.com/darkblockio"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@darkblock"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">YouTube</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/Darkblockio"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="pt-8 font-sans text-lg font-bold text-gray-200 border-t tracking-widerborder-gray-200">
            About Darkblock
          </h3>
          <ul role="list" className="mt-4 space-y-0">
            <li>
              <a
                href="http://www.darkblock.io/"
                className="text-sm text-white hover:text-gray-500"
              >
                Company Site
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=G0KIdNRg57Y"
                className="text-sm text-white hover:text-gray-500"
              >
                What is a Darkblock?
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/protocol/"
                className="text-sm text-white hover:text-gray-500"
              >
                The Protocol
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/usecases/comicsandbooks/"
                className="text-sm text-white hover:text-gray-500"
              >
                Use Cases
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/monetization/"
                className="text-sm text-white hover:text-gray-500"
              >
                Monetization
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pt-8 font-sans text-lg font-bold text-gray-200 border-t tracking-widerborder-gray-200">
            Creator Tools
          </h3>
          <ul role="list" className="mt-4 space-y-0">
            <li>
              <a
                href="https://docs.darkblock.io/creatingadarkblock/"
                className="text-sm text-white hover:text-gray-500"
              >
                Create A Darkblock
              </a>
            </li>
            <li>
              <a
                href="https://docs.darkblock.io/products/theviewer/"
                className="text-sm text-white hover:text-gray-500"
              >
                Unlockable Viewer
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=io.darkblock.darkblock&hl=en&gl=US"
                className="text-sm text-white hover:text-gray-500"
              >
                Google Play
              </a>
              &nbsp; &amp; &nbsp;
              <a
                href="https://www.amazon.com/Darkblock-NFT-Display/dp/B09B4FLQZ6/Amazon"
                className="text-sm text-white hover:text-gray-500"
              >
                Amazon App Store
              </a>
            </li>

            <li>
              <a
                href="https://chrome.google.com/webstore/detail/darkblock-extension/napfclmneabjkfcibhookdfhffllalgl"
                className="text-sm text-white hover:text-gray-500"
              >
                Chrome Extension
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/embed/"
                className="text-sm text-white hover:text-gray-500"
              >
                No-Code Embed
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="pt-8 font-sans text-lg font-bold text-gray-200 border-t tracking-widerborder-gray-200">
            Developer Tools
          </h3>
          <ul role="list" className="mt-4 space-y-0">
            <li>
              <a
                href="https://docs.darkblock.io/"
                className="text-sm text-white hover:text-gray-500"
              >
                Documentation
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/openapi/core/tag/Darkblock-API/"
                className="text-sm text-white hover:text-gray-500"
              >
                APIs
              </a>
            </li>

            <li>
              <a
                href="https://docs.darkblock.io/npm/"
                className="text-sm text-white hover:text-gray-500"
              >
                NPM (5 different chains)
              </a>
            </li>
            <li>
              <a
                href="https://docs.darkblock.io/directintegration/"
                className="text-sm text-white hover:text-gray-500"
              >
                Direct Integration
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Darkblockio"
                className="text-sm text-white hover:text-gray-500"
              >
                GitHub Repos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 mt-12 border-t border-white">
        <p className="text-sm text-gray-400">
          Copyright &copy; 2021-2022. &nbsp; All rights reserved. &nbsp;
          <a
            className="underline"
            href="https://www.darkblock.io/privacy-policy"
          >
            Privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
