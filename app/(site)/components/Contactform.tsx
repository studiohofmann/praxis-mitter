"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";

export default function Contactform() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_PRAXIS_MITTER || ""
  );

  if (state.succeeded) {
    return (
      <h3 className="italic">
        Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich
        bei Ihnen melden.
      </h3>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formfield relative">
        <select
          id="anrede"
          name="anrede"
          required
          defaultValue="anrede"
          className="w-full px-4 py-2 bg-como-200 text-como-800 appearance-none pr-10"
        >
          <option value="anrede" disabled>
            Anrede / Bitte wählen
          </option>
          <option value="frau">Frau</option>
          <option value="herr">Herr</option>
          <option value="divers">Divers</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <DownOutlined className="icon" />
        </div>
        <ValidationError prefix="Anrede" field="anrede" errors={state.errors} />
      </div>
      <div className="formfield">
        <input
          id="vorname"
          type="text"
          name="vorname"
          placeholder="Vorname"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="formfield">
        <input id="name" type="text" name="name" placeholder="Name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="formfield">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="formfield">
        <textarea
          id="message"
          name="message"
          placeholder="Nachricht"
          rows={4}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="flex gap-4 justify-center items-center"
      >
        senden
        <ArrowRightOutlined className="text-2xl" />
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
