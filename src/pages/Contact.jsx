import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, Star, CheckCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import AccreditationBar from "../components/AccreditationBar";
import { CONTACT_PAGE, COMPANY, HOME } from "../config/content.en";

export default function Contact() {
  const h = CONTACT_PAGE.hero;
  const f = CONTACT_PAGE.form;
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    // Honeypot check
    if (data.website) return;
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "var(--color-surface-elevated)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "12px 16px",
    fontSize: 15,
    fontFamily: "var(--font-body)",
    color: "var(--color-text-primary)",
    width: "100%",
    outline: "none",
    transition: "border-color 200ms, box-shadow 200ms",
  };

  return (
    <div>
      <PageHero eyebrow={h.eyebrow} line1={h.headlineLine1} line2={h.headlineLine2}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-2 mt-6"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} fill="var(--color-accent-warm)" strokeWidth={0} style={{ color: "var(--color-accent-warm)" }} />
            ))}
          </div>
          <span className="font-body text-sm" style={{ color: "var(--color-text-muted)" }}>
            {h.socialProof}
          </span>
        </motion.div>
      </PageHero>

      {/* Contact split */}
      <section className="section-padding">
        <div className="content-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left — details */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2
                  className="font-display text-h3 mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {f.heading}
                </h2>
                <p
                  className="font-body mb-8"
                  style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7 }}
                >
                  {f.body}
                </p>

                <div className="flex flex-col gap-6">
                  <a href={COMPANY.phoneTel} className="flex items-center gap-4 group">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-bg-secondary)" }}
                    >
                      <Phone size={20} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
                    </div>
                    <div>
                      <p className="font-body text-lg font-medium group-hover:text-[var(--color-accent-warm)] transition-colors" style={{ color: "var(--color-text-primary)" }}>
                        {COMPANY.phone}
                      </p>
                      <p className="font-body text-xs" style={{ color: "var(--color-text-muted)" }}>Tap to call</p>
                    </div>
                  </a>

                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-bg-secondary)" }}
                    >
                      <Mail size={20} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
                    </div>
                    <p className="font-body text-sm group-hover:text-[var(--color-accent-warm)] transition-colors" style={{ color: "var(--color-text-secondary)" }}>
                      {COMPANY.email}
                    </p>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-bg-secondary)" }}
                    >
                      <MapPin size={20} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
                    </div>
                    <div className="font-body text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      <p>{COMPANY.legalName}</p>
                      <p>{COMPANY.address.line1}</p>
                      <p>{COMPANY.address.line2}</p>
                      <p>{COMPANY.address.area}, {COMPANY.address.city} {COMPANY.address.postcode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-bg-secondary)" }}
                    >
                      <Clock size={20} strokeWidth={1.5} style={{ color: "var(--color-accent-warm)" }} />
                    </div>
                    <div>
                      <p className="font-body text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        {COMPANY.hours}
                      </p>
                      <p className="font-body text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                        {COMPANY.responseTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compact accreditation */}
                <div className="mt-10">
                  <AccreditationBar label="Fully accredited and verified" compact />
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-6 lg:col-start-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 md:p-10"
                style={{
                  backgroundColor: "var(--color-surface-elevated)",
                  borderRadius: "var(--radius-xl)",
                  border: "0.5px solid var(--color-border)",
                }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} strokeWidth={1} style={{ color: "var(--color-accent-warm)", margin: "0 auto 16px" }} />
                    <p className="font-body text-lg font-medium mb-2" style={{ color: "var(--color-text-primary)" }}>
                      Enquiry sent
                    </p>
                    <p className="font-body text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {f.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    {/* Honeypot */}
                    <input
                      type="text"
                      {...register("website")}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-xs font-medium mb-2 block" style={{ color: "var(--color-text-secondary)" }}>
                          First name *
                        </label>
                        <input
                          {...register("firstName", { required: true })}
                          style={{ ...inputStyle, borderColor: errors.firstName ? "var(--color-accent-warm)" : "var(--color-border)" }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--color-focus-ring)"; e.target.style.boxShadow = "0 0 0 3px rgba(181,147,90,0.15)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="font-body text-xs font-medium mb-2 block" style={{ color: "var(--color-text-secondary)" }}>
                          Last name *
                        </label>
                        <input
                          {...register("lastName", { required: true })}
                          style={{ ...inputStyle, borderColor: errors.lastName ? "var(--color-accent-warm)" : "var(--color-border)" }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--color-focus-ring)"; e.target.style.boxShadow = "0 0 0 3px rgba(181,147,90,0.15)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-xs font-medium mb-2 block" style={{ color: "var(--color-text-secondary)" }}>
                        Email address *
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        style={{ ...inputStyle, borderColor: errors.email ? "var(--color-accent-warm)" : "var(--color-border)" }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--color-focus-ring)"; e.target.style.boxShadow = "0 0 0 3px rgba(181,147,90,0.15)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="font-body text-xs font-medium mb-2 block" style={{ color: "var(--color-text-secondary)" }}>
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        {...register("phone", { required: true })}
                        style={{ ...inputStyle, borderColor: errors.phone ? "var(--color-accent-warm)" : "var(--color-border)" }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--color-focus-ring)"; e.target.style.boxShadow = "0 0 0 3px rgba(181,147,90,0.15)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        placeholder="0203 123 4567"
                      />
                    </div>

                    <div>
                      <label className="font-body text-xs font-medium mb-2 block" style={{ color: "var(--color-text-secondary)" }}>
                        Tell us about your project *
                      </label>
                      <textarea
                        {...register("project", { required: true })}
                        rows={5}
                        style={{ ...inputStyle, borderColor: errors.project ? "var(--color-accent-warm)" : "var(--color-border)", resize: "vertical" }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--color-focus-ring)"; e.target.style.boxShadow = "0 0 0 3px rgba(181,147,90,0.15)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
                        placeholder="Describe your project, including property type, location, and scope of work..."
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("terms", { required: true })}
                        className="mt-1 shrink-0"
                        style={{ accentColor: "var(--color-accent-warm)" }}
                      />
                      <span
                        className="font-body"
                        style={{ fontSize: 13, color: errors.terms ? "var(--color-accent-warm)" : "var(--color-text-muted)", lineHeight: 1.5 }}
                      >
                        {f.terms}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="font-body text-sm font-medium py-3 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-text-on-accent)",
                        width: "100%",
                      }}
                    >
                      {isSubmitting ? "Sending..." : f.submit}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations full */}
      <AccreditationBar label="Fully accredited and verified" />
    </div>
  );
}