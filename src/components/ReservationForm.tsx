"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';
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
  time: z.string().refine((val) => {
    const [hours] = val.split(':').map(Number);
    return hours >= 12 && hours <= 23;
  }, 'Please select a time between 12 PM and 11 PM'),
  partySize: z.number().min(1, 'Party size must be at least 1').max(20, 'For groups larger than 20, please call us'),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error('Reservation error:', err);
      setError('Failed to submit reservation. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
          <FiCheck size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[var(--deep-brown)] mb-2">
          Reservation Request Received!
        </h3>
        <p className="text-[var(--text-secondary)] mb-6">
          We'll call you within 2 hours to confirm your table reservation.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="btn-secondary"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  // Generate time slots
  const timeSlots = [];
  for (let hour = 12; hour <= 23; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 23) {
      timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }

  // Get today's date for min date
  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 md:p-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <FiAlertCircle className="text-red-600 mt-0.5" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
            placeholder="10-digit mobile number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Email (optional)
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Party Size */}
        <div>
          <label htmlFor="partySize" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Number of Guests *
          </label>
          <select
            id="partySize"
            {...register('partySize', { valueAsNumber: true })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.partySize ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
          >
            {[...Array(20)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          {errors.partySize && (
            <p className="mt-1 text-sm text-red-600">{errors.partySize.message}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Date *
          </label>
          <input
            id="date"
            type="date"
            {...register('date')}
            min={today}
            max={maxDateStr}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
            Time *
          </label>
          <select
            id="time"
            {...register('time')}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]`}
          >
            <option value="">Select a time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {new Date(`2000-01-01T${slot}`).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                })}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Special Requests */}
      <div className="mt-6">
        <label htmlFor="specialRequests" className="block text-sm font-medium text-[var(--dark-gray)] mb-2">
          Special Requests (optional)
        </label>
        <textarea
          id="specialRequests"
          {...register('specialRequests')}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          placeholder="Birthday celebration, dietary restrictions, seating preferences..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full mt-6 btn-primary flex items-center justify-center gap-2 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          'Confirm Reservation'
        )}
      </button>

      <p className="mt-4 text-sm text-center text-[var(--text-secondary)]">
        We'll confirm your reservation within 2 hours. For immediate assistance, call us at{' '}
        <a href="tel:+917861004444" className="text-[var(--brand-red)] font-semibold">
          +91 7861004444
        </a>
      </p>
    </form>
  );
}