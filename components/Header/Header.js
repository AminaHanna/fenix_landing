"use client";

export default function Header({ setContactForm }) {
  return (
    <header className="fixed top-0 left-0 right-0 p-4">
      <button
        onClick={() => setContactForm((v) => !v)}
        className="text-[#D79B2A]"
      >
        Toggle Contact Form
      </button>
    </header>
  );
}
