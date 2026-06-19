"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to email API
      }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#1878F0]"
      />
      <button
        type="submit"
        className="px-3 py-2 bg-[#1878F0] text-white rounded-lg text-sm font-medium hover:bg-[#1060cc] transition-colors flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
