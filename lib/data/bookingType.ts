// bookingType.ts

export type ServiceType = "Photography" | "Videography" | "Both";
export type BookingStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";
export type Category =
  | "Wedding"
  | "Studio Shoots"
  | "Beauty"
  | "Conference"
  | "Maternity"
  | "Lifestyle"
  | "Pre-Birthdays"
  | "Agenda"
  | "Product"
  | "Home"
  | "Location Shoot";

export interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  serviceType: ServiceType;
  shootType: Category;
  eventDate: Date;
  location: string;
  message: string;
  status: BookingStatus;
  notes?: string; // internal notes
  createdAt: Date;
}

export let bookings: Booking[] = [];

// Create a new booking
export function createBooking(newBooking: Omit<Booking, "id" | "createdAt">) {
  const booking: Booking = {
    ...newBooking,
    id: (bookings.length + 1).toString(),
    createdAt: new Date(),
  };
  bookings.push(booking);
  return booking;
}

// Update an existing booking
export function updateBooking(
  id: string,
  updates: Partial<Omit<Booking, "id" | "createdAt">>
) {
  const bookingIndex = bookings.findIndex((b) => b.id === id);
  if (bookingIndex === -1) throw new Error("Booking not found");

  bookings[bookingIndex] = { ...bookings[bookingIndex], ...updates };
  return bookings[bookingIndex];
}

// Get bookings ordered by createdAt or eventDate
export function getBookings(orderBy: "createdAt" | "eventDate" = "createdAt") {
  return [...bookings].sort((a, b) => a[orderBy].getTime() - b[orderBy].getTime());
}

// Change booking status
export function changeBookingStatus(id: string, status: BookingStatus) {
  return updateBooking(id, { status });
}

/**
 * Filter bookings by category
 */
export function filterByCategory(category: Category) {
  return bookings.filter((b) => b.shootType === category);
}

/**
 * Filter bookings by service type
 */
export function filterByServiceType(serviceType: ServiceType) {
  return bookings.filter((b) => b.serviceType === serviceType);
}

/**
 * Filter bookings by status
 */
export function filterByStatus(status: BookingStatus) {
  return bookings.filter((b) => b.status === status);
}

/**
 * Flexible filter: category, serviceType, status
 */
export function filterBookings(filters: {
  category?: Category;
  serviceType?: ServiceType;
  status?: BookingStatus;
}) {
  return bookings.filter((b) => {
    return (
      (filters.category ? b.shootType === filters.category : true) &&
      (filters.serviceType ? b.serviceType === filters.serviceType : true) &&
      (filters.status ? b.status === filters.status : true)
    );
  });
}

