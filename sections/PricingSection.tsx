"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { PRICING_PLANS } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
const cardAccents = [null, "var(--color-teal)", "var(--color-indigo)", "var(--color-amber)", "var(--color-rose)"];

export const PricingSection = ({ compact = false }) => {
  return (
    <section
      id="pricing"
      className={`${compact ? "pt-[30px] pb-[64px]" : "py-[96px]"} bg-white`}
            aria-labelledby="pricing-heading"
    >
     {!compact && (
  <PageHeader
    label="Pricing"
    title="Simple, Student-Friendly Pricing"
    sub="Start free with 5 generations. Upgrade for unlimited access. Cancel anytime."
    variant="compact"
    showBack={false}
  />
)}

     
      <div className="wrap">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.07}
              className="flex"
            >
              <article
                className={`flex flex-col flex-1 rounded-2xl p-[24px_18px] relative overflow-hidden border transition-all duration-300 ease-out animate-price-in hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] focus-within:-translate-y-[6px] ${
                  plan.featured
                    ? "border-navy bg-navy animate-price-float"
                    : "border-border-default bg-white"
                }`}
                aria-label={`${plan.name} plan`}
              >
                {cardAccents[i] && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: cardAccents[i] || "" }}
                  />
                )}
                <div style={{ paddingTop: cardAccents[i] ? 8 : 0 }}>
                  {plan.badge && (
                    <div
                      className={`inline-block px-[9px] py-[3px] text-[10px] font-semibold uppercase rounded-full mb-2.5 border ${
                        plan.featured
                          ? "bg-white/10 text-white border-white/20"
                          : "bg-teal-lt text-teal-dk border-transparent"
                      }`}
                    >
                      {plan.badge}
                    </div>
                  )}
                  <h2
                    id={`plan-${plan.name}`}
                    className={`text-[19px] font-normal mb-1.5 ${
                      plan.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  {plan.orig && (
                    <div
                      className={`text-[12px] line-through mb-0.5 ${
                        plan.featured ? "text-white/30" : "text-[#c0c0c8]"
                      }`}
                    >
                      {plan.orig}
                    </div>
                  )}
                  <div
                    className={`text-[clamp(22px,2.2vw,28px)] tracking-[-0.5px] mb-0.5 ${
                      plan.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {plan.price}
                    {plan.sub && (
                      <sub className="text-[12px] font-sans font-light align-middle">
                        {plan.sub}
                      </sub>
                    )}
                  </div>
                  <div
                    className={`text-[11px] mb-4 ${
                      plan.featured ? "text-white/60" : "text-muted"
                    }`}
                  >
                    {plan.cad}
                  </div>
                </div>

                <ul className="flex-1 mb-4 flex flex-col m-0 p-0 list-none">
                  {plan.feats.map((f) => (
                    <li
                      key={f}
                      className={`text-[12px] py-1.5 flex items-start gap-[7px] leading-[1.5] border-b ${
                        plan.featured
                          ? "text-white/80 border-white/10"
                          : "text-body border-border-lt"
                      }`}
                    >
                      <span
                        className={`text-[11px] shrink-0 mt-[1px] ${
                          plan.featured ? "text-[#6ee4e0]" : "text-teal"
                        }`}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                  {plan.miss?.map((f) => (
                    <li
                      key={f}
                      className="text-[12px] text-[#c8c8d0] py-1.5 flex items-start gap-[7px] leading-[1.5] border-b border-border-lt"
                    >
                      <span className="text-[11px] shrink-0 mt-[1px]">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div>
                  <button
                  className={`w-full sm:w-full max-w-[220px] sm:max-w-none mx-auto sm:mx-0 block py-2.5 px-3 text-[13px] rounded-[9px] transition-all duration-200 cursor-pointer border-[1.5px] mb-2 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
  plan.featured
    ? "font-semibold bg-white text-navy border-white hover:border-[#e0f7f7] focus-visible:ring-teal"
    : "font-medium bg-white text-navy border-border-default hover:border-navy focus-visible:ring-navy/70"
}`}
                    aria-describedby={plan.fine ? `plan-${plan.name}-fine` : undefined}
                  >
                    {plan.cta}
                  </button>
                  {plan.fine && (
                    <span
                      id={`plan-${plan.name}-fine`}
                      className={`text-[10px] block text-center ${
                        plan.featured ? "text-white/35" : "text-[#b4b4c0]"
                      }`}
                    >
                      {plan.fine}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
