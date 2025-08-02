"use client";

import { submitAuditForm } from "@/app/action";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./Icons/Spinner";
import { LucideCheck } from "./Icons/LucideCheck";
import { LucideX } from "./Icons/LucideX";

export default function AuditForm() {
  const [state, formAction, pending] = React.useActionState(
    submitAuditForm,
    null
  );

  return (
    <form action={formAction} className="space-y-6">
      {/* Website URL Field */}
      <div className="space-y-3">
        <label htmlFor="website" className="block text-sm font-semibold text-gray-700">
          Website URL
        </label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Main Goal Field */}
      <div className="space-y-3">
        <label htmlFor="goal" className="block text-sm font-semibold text-gray-700">
          What's your main conversion goal?
        </label>
        <input
          type="text"
          id="goal"
          name="goal"
          placeholder="Get more leads, increase sales, grow email list..."
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jerome Tana"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        
        <div className="space-y-3">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Instagram Handle */}
      <div className="space-y-3">
        <label htmlFor="instagram" className="block text-sm font-semibold text-gray-700">
          Instagram Handle <span className="text-gray-500">(where we'll share your analysis)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-500">@</span>
          <input
            type="text"
            id="instagram"
            name="instagram"
            placeholder="yourhandle"
            required
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Error Message */}
      {state?.error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <LucideX className="text-red-500 flex-shrink-0" />
          <div>
            <p className="text-red-700">
              {state.error}{" "}
              <a
                href="https://www.instagram.com/Webcraftsman.co/"
                target="_blank"
                className="underline font-medium"
              >
                Follow us on Instagram
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {state?.success ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <LucideCheck className="text-green-600" />
            <h3 className="text-lg font-semibold text-green-800">Analysis Request Received!</h3>
          </div>
          <p className="text-green-700 mb-4">
            We'll analyze your website and share the results on our Instagram within 24-48 hours.
          </p>
          <a
            href="https://www.instagram.com/Webcraftsman.co/"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Follow us on Instagram
          </a>
        </div>
      ) : (
        <>
          <button
            type="submit"
            disabled={pending}
            className={twMerge(
              "w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2",
              pending ? "opacity-50 cursor-not-allowed" : "hover:scale-[0.98]"
            )}
          >
            {pending ? (
              <>
                <Spinner className="w-5 h-5" />
                Analyzing Your Website...
              </>
            ) : (
              "START MY ANALYSIS"
            )}
          </button>
          
          <p className="text-sm text-gray-500 text-center">
            Your analysis will be posted on{" "}
            <a
              href="https://www.instagram.com/Webcraftsman.co/"
              target="_blank"
              className="text-blue-600 underline font-medium"
            >
              our Instagram
            </a>{" "}
            within 24-48 hours
          </p>
        </>
      )}
    </form>
  );
}
