import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendAppointmentNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, treatment, date, time } = body;

    // Basic server-side validation
    if (!name || !phone || !date) {
      return NextResponse.json(
        { error: 'Missing required fields (name, phone, date)' },
        { status: 400 }
      );
    }
    
    // Check if configuration exists to prevent mysterious 500s when .env is missing
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
       console.error("Supabase environment variables are missing.");
       return NextResponse.json(
        { error: 'Server configuration error. Contact admin.' },
        { status: 500 }
      );
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('appointment_requests')
      .insert([
        {
          full_name: name,
          phone: phone,
          treatment_needed: treatment || null,
          preferred_date: date,
          preferred_time: time || null,
          status: 'new',
          source: 'website'
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to securely save appointment request' },
        { status: 500 }
      );
    }

    // Send email notification (fire-and-forget — does not block user response)
    if (process.env.RESEND_API_KEY) {
      sendAppointmentNotification({
        fullName: name,
        phone: phone,
        treatmentNeeded: treatment || null,
        preferredDate: date,
        preferredTime: time || null,
        createdAt: new Date().toISOString(),
      }).catch((emailErr) => {
        console.error('Email notification failed (non-blocking):', emailErr);
      });
    }

    return NextResponse.json({ success: true, message: 'Request securely received' }, { status: 200 });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
