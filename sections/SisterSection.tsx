"use client";

import { Reveal } from "@/components/Reveal";

export const SisterSection = () => (
<section className="bg-gradient-to-b from-white to-teal-50/40 py-14 sm:py-16 md:py-20 lg:py-[90px] relative border-t border-gray-200/60">

   <div className="wrap">

   {/* Full-Width Teal Band */}
<div className="relative mb-10 sm:mb-12 md:mb-16 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">

{/* Background */}
<div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-500" />

{/* Optional Glow */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
</div>

{/* Content (kept aligned with rest of page) */}
<div className="relative max-w-[1100px] mx-auto text-center py-10 sm:py-11 md:py-12 px-4 sm:px-6">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-white mb-3">
    Part of a Wider EdTech Family
  </h2>
  <p className="text-white/90 text-base sm:text-lg max-w-[700px] mx-auto">
    Studiely is one of three platforms built by Skyen Solutions to support learning at every stage.
  </p>
</div>

</div>


      {/* Cards */}
      <div className="mt-10 sm:mt-12 md:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8 max-w-[1100px] mx-auto">

        {/* MAKE MY LESSON */}
        <Reveal delay={0.1}>
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/60 via-cyan-400/40 to-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,176,155,0.25)]">
            
            <div className="h-full rounded-2xl bg-white p-6 md:p-7">

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-gray-900">
  Make My Lesson — For Teachers
</h3>

<p className="text-teal-600 font-semibold text-sm md:text-base mb-4">
  AI-powered lesson planning
</p>
              <p className="text-base font-medium text-gray-800 mb-3">
                Generates complete, curriculum-aligned teaching materials from a single topic — lesson plans, presentations, activities and assessments.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                <a
                  href="https://makemylesson.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Make My Lesson
                </a>{" "}
                is our sister platform built for teachers. Where Studiely supports the student preparing for the exam, Make My Lesson supports the teacher preparing the lesson.
              </p>

            </div>
          </div>
        </Reveal>

        {/* LINGUATUDE */}
        <Reveal delay={0.2}>
          <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-teal-400/60 via-cyan-400/40 to-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,176,155,0.25)]">
            
            <div className="h-full rounded-2xl bg-white p-6 md:p-7">

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 text-gray-900">
  Linguatude — For English Test Preparation
</h3>

<p className="text-teal-600 font-semibold text-sm md:text-base mb-4">
  IELTS, TOEFL, PTE and Cambridge
</p>

              <p className="text-base font-medium text-gray-800 mb-3">
                Built for learners whose next university place, immigration step or career opportunity depends on achieving a target English score.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                <a
                  href="https://linguatude.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Linguatude
                </a>{" "}
                is built for learners whose next university place, immigration step or career opportunity depends on achieving a target English score. Where Studiely supports curriculum study, Linguatude supports the test that opens the next door.
              </p>

            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
);