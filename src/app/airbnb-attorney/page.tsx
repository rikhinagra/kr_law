// TEMPORARILY DISABLED - Airbnb Attorney service hidden per client request
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Service Unavailable | KR Law, APC",
  description: "This service is temporarily unavailable. Please contact us for other legal services.",
};

export default function AirbnbAttorneyPage() {
  // Redirect to home page since service is disabled
  redirect('/');
}
