"use client";

import React from "react";

export default function AuditForm() {
  return (
    <form className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <label htmlFor="website">Landing page url</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jerome Tana"
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email">Email for contact</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <button type="submit" className="cta w-full">
          Claim my free audit
        </button>
        <p className="text-xs">
          We will post your audit on{" "}
          <a href="https://www.instagram.com/webcraftsman.co/" target="_blank" className="underline">
            Instagram
          </a>
        </p>
      </div>
    </form>
  );
}
