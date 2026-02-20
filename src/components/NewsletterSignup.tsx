import { useState, type FormEvent } from "react";

interface NewsletterSignupProps {
  placeholderText: string;
  buttonText: string;
  successText: string;
  errorText: string;
}

export default function NewsletterSignup({
  placeholderText,
  buttonText,
  successText,
  errorText,
}: NewsletterSignupProps): React.ReactElement {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-teal-400 font-medium">{successText}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder={placeholderText}
        required
        className="flex-1 h-[52px] px-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-teal-500"
        aria-label={placeholderText}
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-[52px] px-6 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-150 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "..." : buttonText}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 sm:absolute sm:mt-14">
          {errorText}
        </p>
      )}
    </form>
  );
}
