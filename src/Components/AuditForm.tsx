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
    <form action={formAction} className="flex flex-col gap-8 w-full">
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="website">Landing page url</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="goal">What's the main action goal?</label>
        <input
          type="text"
          id="goal"
          name="goal"
          placeholder="Get more leads"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jerome Tana"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="instagram">Instagram handle</label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          placeholder="jerometanaa"
          required
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <label htmlFor="email">Contact email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          required
        />
      </fieldset>
      {state?.error && (
        <div className="w-full p-4 bg-red-500/20 border border-red-500/70 rounded-xl flex items-center justify-center gap-2">
          <LucideX />
          <a
            href="https://www.instagram.com/Webcraftsman.co/"
            target="_blank"
            className="underline"
          >
            {state.error}
          </a>
        </div>
      )}

      {state?.success ? (
        <a href="https://www.instagram.com/Webcraftsman.co/" target="_blank">
          <div className="w-full p-4 bg-green-500/20 border border-green-500/70 rounded-xl gap-2 hover:scale-95 duration-200">
            <p className="!text-white text-lg">
              <span className="flex items-center gap-2 font-semibold">
                <LucideCheck />
                We've received your request!
              </span>
              <span className="underline text-base">
                Follow us on Instagram to see your roast.
              </span>
            </p>
          </div>
        </a>
      ) : (
        <div className="flex flex-col items-center space-y-3">
          <button
            type="submit"
            disabled={pending}
            className={twMerge(
              "cta w-full",
              pending ? "opacity-50 !cursor-not-allowed" : ""
            )}
          >
            {pending ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner /> Sending...
              </span>
            ) : (
              <span>Send my roast request</span>
            )}
          </button>
          <p className="text-xs">
            We will post your audit on{" "}
            <a
              href="https://www.instagram.com/Webcraftsman.co/"
              target="_blank"
              className="underline"
            >
              Instagram
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
