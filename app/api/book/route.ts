import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Here you can:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM/webhook
    
    // Example: Log the booking (replace with actual email/database logic)
    console.log('New booking request:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement email sending
    // Example with Resend (install: npm install resend)
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'bookings@blackandbest.com',
    //   to: 'your-email@example.com',
    //   subject: `New Booking Request from ${name}`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // })

    return NextResponse.json(
      { 
        success: true,
        message: 'Booking request received. We will contact you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    )
  }
}

