// src/pages/Contact.jsx
import styled, { keyframes } from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

// ---- Toast (use transient prop: $success) ----
const fadeSlide = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10%, 90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: ${({ $success, theme }) => ($success ? theme.colors.primary : "#e74c3c")};
  color: white;
  padding: 0.85rem 1.25rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  animation: ${fadeSlide} 3s ease forwards;
  z-index: 9999;
`;

const Page = styled.section`
  padding: 7rem 5%;
  max-width: 760px;
  margin: 0 auto;
`;

const Field = styled.div`
  margin-bottom: 1.25rem;
  label { display: block; margin-bottom: 0.5rem; font-weight: 600; }
  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    outline: none;
  }
  textarea { min-height: 160px; resize: vertical; }
`;

const Row = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  padding: 0.85rem 1.25rem; border-radius: 8px; font-weight: 700;
  border: none; color: #fff; background: ${({ theme }) => theme.colors.primary};
  cursor: pointer; transition: transform .08s ease;
  &:active { transform: translateY(1px); }
  &:disabled { opacity: .6; cursor: not-allowed; }
`;

const Note = styled.p` opacity: .7; font-size: .95rem; `;

export default function Contact() {
  const formId = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID";
  const [state, handleSubmit] = useForm(formId);
  const [toast, setToast] = useState(null);

  // show toast on success/error
  useEffect(() => {
    if (state.succeeded) setToast({ message: "✅ Your message has been sent!", success: true });
    if (state.errors && state.errors.length > 0)
      setToast({ message: "❌ Please check your details and try again.", success: false });
  }, [state.succeeded, state.errors]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <Page>
      <h1>Contact</h1>
      <p>If you’ve got a role, project, or collaboration in mind — let’s talk.</p>

      {/* Remove noValidate so HTML5 required checks run */}
      <form onSubmit={handleSubmit}>
        <Row>
          <Field>
            <label htmlFor="name">Name*</label>
            <input id="name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </Field>
          <Field>
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Field>
        </Row>

        {/* Honeypot */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input tabIndex="-1" autoComplete="off" name="_gotcha" />
        </div>

        <Field>
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </Field>

        <Button type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending…" : "Send Message"}
        </Button>
      </form>

      <Note style={{ marginTop: "1.5rem" }}>
        Prefer email? <a href="mailto:titozwane28@gmail.com">titozwane28@gmail.com</a> ·
        Connect on <a href="https://www.linkedin.com/in/titozwane" target="_blank" rel="noreferrer">LinkedIn</a>
      </Note>

      {toast && <Toast $success={toast.success}>{toast.message}</Toast>}
    </Page>
  );
}
