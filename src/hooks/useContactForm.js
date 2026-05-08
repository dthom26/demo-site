import { useState } from 'react';
import api from '@/lib/api';

const INITIAL = { firstName: '', lastName: '', email: '', message: '' };

export default function useContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // TODO: enable when backend is wired up
      // await api.post('/api/contact', form);
      await new Promise((r) => setTimeout(r, 600)); // simulate network
      setSubmitted(true);
      setForm(INITIAL);
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return { form, handleChange, handleSubmit, submitting, submitted, error };
}
