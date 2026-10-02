"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FiCheck,
  FiAlertCircle,
  FiUser,
  FiPhone,
  FiMail,
  FiCalendar,
  FiClock,
  FiUsers,
  FiMessageSquare,
  FiPhoneCall,
} from 'react-icons/fi';
import { createReservation } from '@/lib/firebase';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  date: z.string().refine((val) => {
    const selectedDate = new Date(val);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return selectedDate >= today && selectedDate <= maxDate;
  }, 'Please select a date within the next 30 days'),
  time: z.string().min(1, 'Please select a preferred dining time slot'),
  partySize: z.number().min(1, 'Party size must be at least 1').max(20, 'For groups larger than 20, please call us directly'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

// Lunch and Dinner categorized time slots
const lunchSlots = [
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
];

const dinnerSlots = [
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
  '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM',
];

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      partySize: 2,
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await createReservation({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        date: data.date,
        time: data.time,
        partySize: data.partySize,
        specialRequests: data.specialRequests || undefined,
      });

      setSubmittedData(data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error('Reservation error:', err);
      setError('Unable to submit your online request right now. Please call us directly at +91 7861004444 for instant table confirmation.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Today and max date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  if (isSuccess && submittedData) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 text-center shadow-xl border border-zinc-100 animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 text-green-600 mb-5">
          <FiCheck size={32} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
          Table Reservation Requested!
        </h3>
        <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <strong className="text-zinc-900">{submittedData.name}</strong>. Our guest manager will call you at <strong className="text-zinc-900">+91 {submittedData.phone}</strong> shortly to confirm your table.
        </p>

        {/* Booking Summary Card */}
        <div className="bg-zinc-50 rounded-2xl p-5 mb-6 text-left max-w-md mx-auto border border-zinc-200/70 text-xs sm:text-sm space-y-2">
          <div className="flex justify-between py-1 border-b border-zinc-200/50">
            <span className="text-zinc-500">Date & Time</span>
            <span className="font-semibold text-zinc-800">{submittedData.date} at {submittedData.time}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-zinc-200/50">
            <span className="text-zinc-500">Party Size</span>
            <span className="font-semibold text-zinc-800">{submittedData.partySize} {submittedData.partySize === 1 ? 'Guest' : 'Guests'}</span>
          </div>
          {submittedData.specialRequests && (
            <div className="flex justify-between py-1">
              <span className="text-zinc-500">Special Notes</span>
              <span className="font-semibold text-zinc-800 text-right truncate max-w-[200px]">{submittedData.specialRequests}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSuccess(false);
              setSubmittedData(null);
            }}
            className="btn-secondary w-full sm:w-auto text-sm"
          >
            Book Another Table
          </button>
          <a
            href="tel:+917861004444"
            className="btn-primary w-full sm:w-auto text-sm"
          >
            <FiPhoneCall size={16} />
            <span>Call Restaurant</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-zinc-100"
    >
      <div className="mb-6 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
          Reserve a Dining Table
        </h3>
        <p className="text-zinc-500 text-xs sm:text-sm mt-1">
          Instant table request • No advance payment required • Free cancellation
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50/90 border border-red-200 rounded-xl flex items-start gap-3">
          <FiAlertCircle className="text-red-600 mt-0.5 shrink-0" size={18} />
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <FiUser size={16} />
            </div>
            <input
              id="name"
              type="text"
              {...register('name')}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-zinc-900 bg-white placeholder-zinc-400 transition-all ${
                errors.name ? 'border-red-500 ring-1 ring-red-500 bg-red-50/10' : 'border-zinc-200 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              } focus:outline-none`}
              placeholder="e.g. Ramesh Kumar"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative flex rounded-xl shadow-sm">
            <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-zinc-200 bg-zinc-50 text-zinc-600 text-xs font-semibold">
              🇮🇳 +91
            </span>
            <input
              id="phone"
              type="tel"
              maxLength={10}
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-r-xl border text-sm text-zinc-900 bg-white placeholder-zinc-400 transition-all ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500 bg-red-50/10' : 'border-zinc-200 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              } focus:outline-none`}
              placeholder="98765 43210"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Date Selector */}
        <div>
          <label htmlFor="date" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Dining Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <FiCalendar size={16} />
            </div>
            <input
              id="date"
              type="date"
              {...register('date')}
              min={today}
              max={maxDateStr}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-zinc-900 bg-white transition-all ${
                errors.date ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-200 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              } focus:outline-none`}
            />
          </div>
          {errors.date && (
            <p className="mt-1 text-xs text-red-600">{errors.date.message}</p>
          )}
        </div>

        {/* Time Selector */}
        <div>
          <label htmlFor="time" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <FiClock size={16} />
            </div>
            <select
              id="time"
              {...register('time')}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-zinc-900 bg-white transition-all appearance-none cursor-pointer ${
                errors.time ? 'border-red-500 ring-1 ring-red-500' : 'border-zinc-200 focus:border-red-500 focus:ring-2 focus:ring-red-100'
              } focus:outline-none`}
            >
              <option value="">Select a dining slot</option>
              <optgroup label="Lunch Slots (12:00 PM – 4:00 PM)">
                {lunchSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Dinner Slots (07:00 PM – 10:30 PM)">
                {dinnerSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
          {errors.time && (
            <p className="mt-1 text-xs text-red-600">{errors.time.message}</p>
          )}
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="partySize" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <FiUsers size={16} />
            </div>
            <select
              id="partySize"
              {...register('partySize', { valueAsNumber: true })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-100 focus:outline-none appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? 'Guest (Solo)' : size === 2 ? 'Guests (Couple)' : size <= 4 ? 'Guests (Small Family)' : 'Guests (Group)'}
                </option>
              ))}
            </select>
          </div>
          {errors.partySize && (
            <p className="mt-1 text-xs text-red-600">{errors.partySize.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-zinc-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <FiMail size={16} />
            </div>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 bg-white placeholder-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 focus:outline-none"
              placeholder="yourname@gmail.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mt-5 text-left">
        <label htmlFor="specialRequests" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
          Special Requests or Dietary Preferences <span className="text-zinc-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 pointer-events-none text-zinc-400">
            <FiMessageSquare size={16} />
          </div>
          <textarea
            id="specialRequests"
            {...register('specialRequests')}
            rows={2}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 text-sm text-zinc-900 bg-white placeholder-zinc-400 focus:border-red-500 focus:ring-2 focus:ring-red-100 focus:outline-none resize-none"
            placeholder="Birthday celebration, high chair needed, window table, spice level preference..."
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full mt-6 btn-primary py-3.5 text-base shadow-glow-red ${
          isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Confirming Table Request...</span>
          </>
        ) : (
          <>
            <FiCheck size={18} />
            <span>Confirm Table Reservation</span>
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-center text-zinc-500">
        Need immediate booking or assistance? Call our front desk directly at{' '}
        <a href="tel:+917861004444" className="text-red-600 font-bold hover:underline">
          +91 78610 04444
        </a>
      </p>
    </form>
  );
}