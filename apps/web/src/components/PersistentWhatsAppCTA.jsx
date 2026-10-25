import React, { useEffect, useState } from 'react';
import { getAdvisorWhatsAppUrl } from '@/config/site';

const DEFAULT_MESSAGE = 'Hi Amaka, I’m interested in Hutu Exclusive and I’d like some guidance.';

function OfficialWhatsAppIcon({ className = 'h-7 w-7' }) {
	return (
		<svg
			viewBox="0 0 24 24"
			width="24"
			height="24"
			fill="currentColor"
			className={className}
			aria-hidden="true"
		>
			<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.51c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.62.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29" />
		</svg>
	);
}

export default function PersistentWhatsAppCTA() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Detect if any modal/dialog or fullscreen interaction is active
	useEffect(() => {
		const checkModalState = () => {
			const modal = document.querySelector(
				'[role="dialog"], [data-radix-portal] [role="dialog"], [data-state="open"][aria-modal="true"]'
			);
			setIsModalOpen(Boolean(modal));
		};

		checkModalState();

		const observer = new MutationObserver(() => {
			checkModalState();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ['data-state', 'aria-hidden'],
		});

		return () => observer.disconnect();
	}, []);

	const whatsappUrl = getAdvisorWhatsAppUrl(DEFAULT_MESSAGE);

	// If a modal or fullscreen dialog is active, hide completely to avoid obstruction
	if (isModalOpen) {
		return null;
	}

	return (
		<div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,1.25rem))] right-4 z-40 sm:bottom-7 sm:right-7">
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chat with Amaka on WhatsApp"
				className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:h-14 sm:w-14"
			>
				<OfficialWhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
				{/* Accessible Tooltip on hover for desktop */}
				<span
					role="tooltip"
					className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-sm backdrop-blur-xs transition-opacity duration-150 group-hover:opacity-100 sm:block"
				>
					Chat on WhatsApp
				</span>
			</a>
		</div>
	);
}


