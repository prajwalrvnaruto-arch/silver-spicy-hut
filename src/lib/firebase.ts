import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Reservation types
export interface Reservation {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Menu types
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  subcategory: string;
  isVegetarian?: boolean;
  isPopular?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  platform: 'google' | 'swiggy' | 'zomato';
}

// Firestore collections
export const reservationsRef = collection(db, 'reservations');
export const menuRef = collection(db, 'menu');
export const reviewsRef = collection(db, 'reviews');

// Helper functions
export async function createReservation(data: Omit<Reservation, 'id' | 'status' | 'createdAt' | 'updatedAt'>) {
  const now = Timestamp.now();
  const reservationData = {
    ...data,
    status: 'pending' as const,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(reservationsRef, reservationData);
  return docRef.id;
}

export async function getReservations() {
  const q = query(reservationsRef, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Reservation[];
}

export async function getMenuByCategory(category: string) {
  const q = query(menuRef, where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MenuItem[];
}

export async function getAllMenuItems() {
  const snapshot = await getDocs(menuRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as MenuItem[];
}

export async function getReviews() {
  const q = query(reviewsRef, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Review[];
}

export async function updateReservationStatus(id: string, status: Reservation['status']) {
  const docRef = doc(db, 'reservations', id);
  await updateDoc(docRef, {
    status,
    updatedAt: Timestamp.now()
  });
}

export { db, app };
export default app;