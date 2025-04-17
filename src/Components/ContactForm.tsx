"use client";
import React from "react";

const projectTypes = [
  { label: "Website", value: "website" },
  { label: "Landing Page", value: "landing-page" },
  { label: "Roasting", value: "roast" },
];

export default function ContactForm() {
  const [projectType, setProjectType] = React.useState(projectTypes[0].value);

  return (
    <form className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-4">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what's the project about, what you want to achieve, and any other details you think are important."
          rows={4}
          cols={50}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="website">Current Website (Optional)</label>
        <input
          type="text"
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="project">Project Type</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projectTypes.map((type) => (
            <button
              key={type.value}
              id={type.value}
              aria-pressed={projectType === type.value}
              aria-label={`Select ${type.label}`}
              aria-describedby="project"
              className={`border border-border rounded-lg p-4 font-semibold text-lg duration-200 cursor-pointer ${
                projectType === type.value
                  ? "bg-white text-primary"
                  : "hover:bg-white/10"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setProjectType(type.value);
              }}
            >
              {type.label}
            </button>
          ))}
        </div>
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
          Send project request
        </button>
        <p className="text-xs">We will get back to you within 24 hours</p>
      </div>
    </form>
  );
}
