import React from 'react';

export function HubSpotLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 135 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* Sprocket Icon */}
        <g fill="currentColor" className="group-hover:fill-[#FF7A59] transition-colors">
          <path d="M25.8 13.8V9.8a3.1 3.1 0 0 0 1.8-2.8 3.1 3.1 0 1 0-4.4 2.8v4a8.6 8.6 0 0 0-4.2 1.8L8.1 7a3.5 3.5 0 1 0-2.3 2.5l10.8 8.6a8.8 8.8 0 0 0-1.4 4.8c0 1.9.6 3.6 1.6 5.1l-4.1 4.1a3.1 3.1 0 1 0 2.2 2.2l4.1-4.1a8.8 8.8 0 1 0 6.9-16.4zm-1.3-9a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zM4.7 6a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm10 26a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm9.8-7.5a5.1 5.1 0 1 1 0-10.2 5.1 5.1 0 0 1 0 10.2z" />
        </g>
        {/* Wordmark HubSpot */}
        <text
          x="38"
          y="25"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="currentColor"
          letterSpacing="-0.5px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          HubSpot
        </text>
      </g>
    </svg>
  );
}

export function SalesforceLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* Salesforce Cloud */}
        <g fill="currentColor" className="group-hover:fill-[#00A1E0] transition-colors">
          <path d="M13.5 4.5c2.3-2.4 5.5-3.9 9.1-3.9 4.7 0 8.8 2.6 11 6.5 2-1 4.2-1.6 6.5-1.6 8.5 0 15.4 7 15.4 15.5 0 8.6-6.9 15.5-15.4 15.5-1 0-2.1-.1-3-.3-1.9 3.4-5.6 5.8-9.8 5.8-1.7 0-3.4-.4-4.9-1.1-2 4.6-6.5 7.8-11.8 7.8-5.5 0-10.2-3.5-12-8.4-1.6.3-3.2.4-4.9.4-6.6 0-11.9-5.4-11.9-12 0-4.5 2.4-8.3 6-10.4-1.1-5.5 1.3-11 5.8-13.8 2.9-1.8 6.3-2.6 9.7-2 1.6-1.2 3.6-2 5.7-2 1.8 0 3.5.6 4.9 1.6z" transform="scale(0.55) translate(2, 4)" />
        </g>
        {/* Wordmark salesforce */}
        <text
          x="38"
          y="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="currentColor"
          letterSpacing="-0.3px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          salesforce
        </text>
      </g>
    </svg>
  );
}

export function LinkedInLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 125 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        <text
          x="0"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="23"
          fill="currentColor"
          letterSpacing="-0.8px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          Linked
        </text>
        {/* In Box */}
        <rect
          x="77"
          y="2"
          width="28"
          height="28"
          rx="5"
          fill="currentColor"
          className="group-hover:fill-[#0A66C2] transition-colors"
        />
        <text
          x="83"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="21"
          fill="#FFFFFF"
        >
          in
        </text>
      </g>
    </svg>
  );
}

export function StripeLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        <path
          fill="currentColor"
          className="group-hover:fill-[#635BFF] transition-colors"
          d="M77.7 16.4c0-5.7-2.7-10.1-8-10.1-5.3 0-8.5 4.5-8.5 10.1 0 6.7 3.8 10 9.2 10 2.6 0 4.6-.6 6.1-1.4V20.5c-1.5.8-3.2 1.2-5.4 1.2-2.1 0-4.1-.8-4.3-3.4h10.8c0-.6.1-1.3.1-1.9zm-10.9-2.1c0-2.5 1.5-3.5 2.9-3.5 1.4 0 2.8 1 2.8 3.5h-5.7zm-14.1-8c-2.2 0-3.6 1-4.3 1.7l-.3-1.4h-4.9v25.8l5.5-1.2V25c.8.6 2 1.4 3.9 1.4 4 0 7.6-3.2 7.6-10.2 0-7.3-3.7-9.9-7.5-9.9zm-1.3 15.3c-1.3 0-2.1-.5-2.6-1l-.1-8.2c.6-.6 1.4-1.1 2.6-1.1 2 0 3.4 2.3 3.4 5.1s-1.3 5.2-3.3 5.2zm-15.6-9.1v-6h-5.5v6H27v4.6h3.7V22c0 4.9 2.5 7.4 7.2 7.4 1.7 0 3-.3 3.6-.6v-4.4c-.6.2-1.4.4-2.3.4-2.1 0-3-.9-3-3.1v-4.6h5.3v-4.6h-5.2zM21 9.8a3.1 3.1 0 0 0-3.1-3.1A3.1 3.1 0 0 0 14.8 9.8a3.1 3.1 0 0 0 3.1 3.1 3.1 3.1 0 0 0 3.1-3.1zm-5.8 4.7h5.5v14.9h-5.5V14.5zm-5-3.8c-1.3-.9-3.2-1.4-5.3-1.4-4 0-6.6 2.1-6.6 5.5 0 5.4 7.4 4.5 7.4 6.9 0 .9-.8 1.4-1.9 1.4-1.6 0-3.6-.7-5.2-1.6l-1.8 4.2c1.7 1 4.1 1.6 6.8 1.6 4.3 0 7.4-2.1 7.4-5.7 0-5.8-7.5-4.7-7.5-7 0-.8.7-1.3 1.7-1.3 1.4 0 3.1.5 4.3 1.2l1.7-3.8z"
        />
      </g>
    </svg>
  );
}

export function NotionLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* Notion Icon Cube */}
        <g fill="currentColor" className="group-hover:fill-black dark:group-hover:fill-white transition-colors">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 3.7C6.7 2.6 8.5 2 11.2 2h10.4c2 0 2.9.8 3.5 1.5.7.9.9 2.2.9 3.5v17.4c0 1.5-.5 2.8-1.5 3.8-1.1 1.1-2.5 1.8-4.2 1.8H9.9c-2.3 0-3.8-.7-4.8-1.9-1.1-1.3-1.6-2.9-1.6-4.9V8.5c0-2 .6-3.6 1.9-4.8zm14 4.5H13l-4 13.6h4.5l1.2-4.4h6.3l.3 4.4h4.4L20.8 8.2h-1.4zm-4.7 6.4l1.8-6.1.1 6.1h-1.9z"
          />
        </g>
        <text
          x="35"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="currentColor"
          letterSpacing="-0.5px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          Notion
        </text>
      </g>
    </svg>
  );
}

export function SlackLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* Slack Hashtag Pills */}
        <g transform="translate(1, 3) scale(0.85)">
          <path d="M6 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" fill="currentColor" className="group-hover:fill-[#E01E5A] transition-colors" />
          <path d="M7.5 14.5a2.5 2.5 0 0 1 5 0v6.2a2.5 2.5 0 0 1-5 0v-6.2z" fill="currentColor" className="group-hover:fill-[#E01E5A] transition-colors" />
          <path d="M14.5 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor" className="group-hover:fill-[#36C5F0] transition-colors" />
          <path d="M14.5 7.5a2.5 2.5 0 0 1 0 5h-6.2a2.5 2.5 0 0 1 0-5h6.2z" fill="currentColor" className="group-hover:fill-[#36C5F0] transition-colors" />
          <path d="M23 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="currentColor" className="group-hover:fill-[#2EB67D] transition-colors" />
          <path d="M21.5 14.5a2.5 2.5 0 0 1-5 0v-6.2a2.5 2.5 0 0 1 5 0v6.2z" fill="currentColor" className="group-hover:fill-[#2EB67D] transition-colors" />
          <path d="M14.5 23a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="currentColor" className="group-hover:fill-[#ECB22E] transition-colors" />
          <path d="M14.5 21.5a2.5 2.5 0 0 1 0-5h6.2a2.5 2.5 0 0 1 0 5h-6.2z" fill="currentColor" className="group-hover:fill-[#ECB22E] transition-colors" />
        </g>
        <text
          x="35"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="currentColor"
          letterSpacing="-0.6px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          slack
        </text>
      </g>
    </svg>
  );
}

export function IntercomLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* Intercom Smile Bars */}
        <g fill="currentColor" className="group-hover:fill-[#1F8CEB] transition-colors" transform="translate(2, 3)">
          <rect x="0" y="7" width="4.5" height="13" rx="2.25" />
          <rect x="6.5" y="4" width="4.5" height="19" rx="2.25" />
          <rect x="13" y="1" width="4.5" height="25" rx="2.25" />
          <rect x="19.5" y="4" width="4.5" height="19" rx="2.25" />
          <rect x="26" y="7" width="4.5" height="13" rx="2.25" />
        </g>
        <text
          x="39"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="20"
          fill="currentColor"
          letterSpacing="-0.4px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          INTERCOM
        </text>
      </g>
    </svg>
  );
}

export function ClickUpLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="transition-colors duration-300">
        {/* ClickUp Chevron & Dot */}
        <g transform="translate(2, 5)">
          <path
            d="M2.5 13.5l7.5-6 7.5 6"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#7B68EE] transition-colors"
          />
          <circle
            cx="10"
            cy="18.5"
            r="2.5"
            fill="currentColor"
            className="group-hover:fill-[#FF00DF] transition-colors"
          />
        </g>
        <text
          x="32"
          y="23"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="21"
          fill="currentColor"
          letterSpacing="-0.5px"
          className="group-hover:fill-gray-900 dark:group-hover:fill-white transition-colors"
        >
          ClickUp
        </text>
      </g>
    </svg>
  );
}

export const B2B_BRAND_LOGOS = [
  { name: 'HubSpot', Component: HubSpotLogo },
  { name: 'Salesforce', Component: SalesforceLogo },
  { name: 'LinkedIn', Component: LinkedInLogo },
  { name: 'Stripe', Component: StripeLogo },
  { name: 'Notion', Component: NotionLogo },
  { name: 'Slack', Component: SlackLogo },
  { name: 'Intercom', Component: IntercomLogo },
  { name: 'ClickUp', Component: ClickUpLogo },
];

export function BrandLogosRow({
  className = "",
  gapClass = "gap-8 sm:gap-12 md:gap-14",
}: {
  className?: string;
  gapClass?: string;
}) {
  return (
    <div className={`flex flex-wrap justify-center items-center ${gapClass} ${className}`}>
      {B2B_BRAND_LOGOS.map(({ name, Component }) => (
        <div
          key={name}
          className="group text-gray-400 dark:text-gray-500 opacity-65 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center"
          title={name}
        >
          <Component className="h-6 sm:h-7 md:h-8 w-auto" />
        </div>
      ))}
    </div>
  );
}
