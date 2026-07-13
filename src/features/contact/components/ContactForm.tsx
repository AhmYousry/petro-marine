import { useState, type FormEvent, type ChangeEvent } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Send, Check, ChevronDown, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/utils'
import { SUBJECT_OPTIONS, RESPONSE_PROMISES } from '../data/contact'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface FormState {
  name:    string
  email:   string
  phone:   string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: FormState = { name: '', email: '', phone: '', subject: '', message: '' }

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION
// ─────────────────────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormState): Errors {
  const e: Errors = {}
  if (!values.name.trim())            e.name = 'Please enter your name'
  if (!values.email.trim())           e.email = 'Please enter your email'
  else if (!EMAIL_RE.test(values.email)) e.email = 'Please enter a valid email'
  if (!values.subject)                e.subject = 'Please select a subject'
  if (!values.message.trim())         e.message = 'Please tell us how we can help'
  else if (values.message.trim().length < 10) e.message = 'A little more detail helps us respond faster'
  return e
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

// ─────────────────────────────────────────────────────────────────────────────
// FIELD PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

const baseField = cn(
  'w-full rounded-lg bg-white',
  'border border-steel-200',
  'text-[0.9375rem] text-navy-900 font-body placeholder:text-steel-400',
  'transition-all duration-200',
  'focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/15',
)

const errorField = 'border-error/60 focus:border-error focus:ring-error/15'

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1.5 text-[0.8125rem] font-display font-semibold text-navy-800">
      {children}
      {required && <span className="text-flame-500 ml-0.5">*</span>}
    </label>
  )
}

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 text-[0.75rem] text-error-600 font-body"
        >
          <AlertCircle size={12} strokeWidth={2} className="flex-shrink-0" />
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function ContactForm() {
  const [values, setValues]   = useState<FormState>(EMPTY)
  const [errors, setErrors]   = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [status, setStatus]   = useState<Status>('idle')
  const [submitError, setSubmitError] = useState('')

  const update = (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...values, [field]: e.target.value }
      setValues(next)
      if (touched[field]) setErrors(validate(next))
    }

  const blur = (field: keyof FormState) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validation = validate(values)
    setErrors(validation)
    setTouched({ name: true, email: true, phone: true, subject: true, message: true })
    if (Object.keys(validation).length > 0) {
      // Focus first invalid field
      const first = (['name', 'email', 'phone', 'subject', 'message'] as const).find((k) => validation[k])
      if (first) document.getElementById(`contact-${first}`)?.focus()
      return
    }
    setStatus('submitting')
    setSubmitError('')
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    values.name,
          email:   values.email,
          phone:   values.phone,
          subject: values.subject,
          message: values.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Submission failed')
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call our 24/7 line.')
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setSubmitError('')
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={cn(
        'relative bg-white rounded-2xl',
        'border border-steel-100',
        'shadow-[0_24px_70px_-28px_rgba(27,43,75,0.30)]',
        'p-7 md:p-9',
      )}
    >
      {/* Accent top bar */}
      <div className="absolute top-0 left-9 right-9 h-[3px] rounded-full bg-gradient-to-r from-flame-500 via-flame-400 to-gold-400" aria-hidden="true" />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          /* ── SUCCESS STATE ───────────────────────────────────────── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="text-center py-10"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 14 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center"
            >
              <Check size={30} strokeWidth={2.5} className="text-emerald-600" />
            </motion.div>
            <h3 className="font-display font-extrabold text-navy-900 text-[1.5rem] mb-3">
              Message Received
            </h3>
            <p className="text-steel-500 font-body text-[0.9375rem] leading-relaxed max-w-[400px] mx-auto mb-7">
              Thank you, {values.name.split(' ')[0] || 'there'}. A Petromarine specialist will reach
              out within 24 hours. For urgent vessel support, call our 24/7 operations line.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[0.8125rem] font-display font-bold uppercase tracking-[0.12em] text-navy-900 hover:text-ocean-700 border-b-2 border-flame-500 hover:border-ocean-500 pb-0.5 transition-colors duration-250"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          /* ── FORM STATE ──────────────────────────────────────────── */
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Heading */}
            <div className="mb-6">
              <h2 className="font-display font-extrabold text-navy-900 text-[1.5rem] md:text-[1.75rem] tracking-[-0.01em] mb-2">
                Send Us a Message
              </h2>
              <p className="text-steel-500 font-body text-[0.9375rem]">
                Fill in the form and we&rsquo;ll get back to you within one business day.
              </p>
            </div>

            {/* Submit error banner */}
            <AnimatePresence>
              {status === 'error' && submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-[0.875rem] text-red-700 font-body"
                >
                  <AlertCircle size={16} strokeWidth={2} className="flex-shrink-0" />
                  <span>{submitError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Name + Phone row */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="contact-name" required>Full Name</Label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Capt. Ahmed Hassan"
                  value={values.name}
                  onChange={update('name')}
                  onBlur={blur('name')}
                  aria-invalid={!!errors.name}
                  className={cn(baseField, 'h-12 px-4', errors.name && errorField)}
                />
                <FieldError msg={errors.name} />
              </div>
              <div>
                <Label htmlFor="contact-phone">Phone</Label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+20 100 000 0000"
                  value={values.phone}
                  onChange={update('phone')}
                  onBlur={blur('phone')}
                  className={cn(baseField, 'h-12 px-4')}
                />
                <FieldError msg={errors.phone} />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="contact-email" required>Email Address</Label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="operations@yourcompany.com"
                value={values.email}
                onChange={update('email')}
                onBlur={blur('email')}
                aria-invalid={!!errors.email}
                className={cn(baseField, 'h-12 px-4', errors.email && errorField)}
              />
              <FieldError msg={errors.email} />
            </div>

            {/* Subject (select) */}
            <div>
              <Label htmlFor="contact-subject" required>Subject</Label>
              <div className="relative">
                <select
                  id="contact-subject"
                  value={values.subject}
                  onChange={update('subject')}
                  onBlur={blur('subject')}
                  aria-invalid={!!errors.subject}
                  className={cn(
                    baseField, 'h-12 px-4 pr-10 appearance-none cursor-pointer',
                    !values.subject && 'text-steel-400',
                    errors.subject && errorField,
                  )}
                >
                  <option value="" disabled>Select a topic…</option>
                  {SUBJECT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="text-navy-900">{opt}</option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-400 pointer-events-none"
                />
              </div>
              <FieldError msg={errors.subject} />
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="contact-message" required>Message</Label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell us about your vessel, port of call, and what you need…"
                value={values.message}
                onChange={update('message')}
                onBlur={blur('message')}
                aria-invalid={!!errors.message}
                className={cn(baseField, 'px-4 py-3 resize-y min-h-[120px]', errors.message && errorField)}
              />
              <FieldError msg={errors.message} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'group w-full h-[52px] rounded-lg',
                'inline-flex items-center justify-center gap-2.5',
                'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                'text-white font-display font-semibold text-[0.8125rem] uppercase tracking-[0.12em]',
                'shadow-[0_4px_24px_rgba(232,82,10,0.35)] hover:shadow-[0_6px_32px_rgba(232,82,10,0.48)]',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-400 focus-visible:ring-offset-2',
                'disabled:opacity-80 disabled:cursor-not-allowed',
              )}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} strokeWidth={2.5} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            {/* Trust promises */}
            <div className="pt-3 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-5 sm:gap-y-2">
              {RESPONSE_PROMISES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[0.75rem] text-steel-500 font-body">
                  <Icon size={13} strokeWidth={1.85} className="text-ocean-500 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
