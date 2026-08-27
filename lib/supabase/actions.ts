"use server"

import nodemailer from "nodemailer"
import { supabase } from "./client"

export interface LeadInput {
  nombre: string
  telefono: string
  email?: string
  comuna: string
  servicio: string
  mensaje: string
  origen?: string
}

async function sendLeadEmail(data: LeadInput) {
  const smtpHost = process.env.SMTP_HOST || "smtppro.zoho.com"
  const smtpPort = process.env.SMTP_PORT || "465"
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  let notificationEmail = process.env.NOTIFICATION_EMAIL || "carlos.ramirez@vaultec.cl"
  if (notificationEmail.includes("keytek")) {
    notificationEmail = "carlos.ramirez@vaultec.cl"
  }

  if (!smtpUser || !smtpPassword) {
    console.warn("SMTP credentials (SMTP_USER / SMTP_PASSWORD) not configured. Email notification skipped.")
    return
  }

  try {
    const isSecure = smtpPort === "465"
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const cleanPhone = data.telefono.replace(/[^0-9]/g, "")
    const whatsappLink = `https://wa.me/${cleanPhone.startsWith("56") ? cleanPhone : "56" + cleanPhone}?text=${encodeURIComponent(`Hola ${data.nombre}, te contactamos de Vaultec por tu solicitud de cotización.`)}`

    const mailOptions = {
      from: `"Vaultec Web" <${smtpUser}>`,
      to: notificationEmail,
      replyTo: data.email && data.email.trim() ? data.email.trim() : smtpUser,
      subject: `🚨 Nueva Cotización Web: ${data.nombre} (${data.servicio})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #1e293b;">
          
          <div style="background: linear-gradient(135deg, #0F2A4A 0%, #1B5FA8 100%); padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: bold; letter-spacing: -0.5px;">Nuevo Contacto desde la Web</h1>
            <p style="color: #9CE0FF; font-size: 13px; margin: 5px 0 0 0;">Vaultec Cerrajería de Alta Seguridad & Cámaras</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold; width: 130px;">Cliente:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0F2A4A; font-weight: bold; font-size: 15px;">${data.nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">
                <a href="tel:${data.telefono}" style="color: #1B5FA8; font-weight: bold; text-decoration: none;">${data.telefono}</a>
              </td>
            </tr>
            ${data.email && data.email.trim() ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold;">Correo Cliente:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9;">
                <a href="mailto:${data.email.trim()}" style="color: #1B5FA8; font-weight: bold; text-decoration: none;">${data.email.trim()}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold;">Región / Comuna:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155; font-weight: 500;">${data.comuna}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold;">Servicio:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0F2A4A; font-weight: bold;">
                <span style="background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 6px; font-size: 13px;">${data.servicio}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: bold; vertical-align: top;">Detalles:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155; line-height: 1.5; white-space: pre-wrap;">${data.mensaje}</td>
            </tr>
          </table>

          <!-- Direct WhatsApp Button -->
          <div style="text-align: center; margin: 25px 0 15px 0;">
            <a href="${whatsappLink}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 14px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.3);">
              💬 Responder por WhatsApp al Cliente
            </a>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 15px; text-align: center;">
            <p style="font-size: 11px; color: #94a3b8; margin: 0;">
              Enviado automáticamente desde el formulario web de <strong>vaultec.cl</strong>
            </p>
          </div>

        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log(`[Email] Notification sent to ${notificationEmail}`)
  } catch (error) {
    console.error("[Email Error] Failed to send notification email:", error)
  }
}

export interface CreateLeadResult {
  success: boolean
  message?: string
  error?: string
  data?: any
}

export async function createLead(data: LeadInput): Promise<CreateLeadResult> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase credentials are not configured, simulate a successful database insert.
  if (!supabaseUrl || !supabaseAnonKey) {
    console.log("Mock database insertion for lead:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await sendLeadEmail(data)
    return {
      success: true,
      message: "Lead processed (Mock Mode: Supabase environment variables not defined).",
      data: [
        {
          id: "mock-uuid-1234-5678",
          ...data,
          created_at: new Date().toISOString(),
        },
      ],
    }
  }

  try {
    const insertPayload: Record<string, any> = {
      nombre: data.nombre,
      telefono: data.telefono,
      comuna: data.comuna,
      servicio: data.servicio,
      mensaje: data.mensaje,
      origen: data.origen || "web",
    }
    if (data.email && data.email.trim()) {
      insertPayload.email = data.email.trim()
    }

    let { data: result, error } = await supabase
      .from("leads")
      .insert([insertPayload])
      .select()

    // If insertion failed due to missing email column, retry without email column
    if (error && error.message?.includes("email")) {
      delete insertPayload.email
      const retry = await supabase.from("leads").insert([insertPayload]).select()
      result = retry.data
      error = retry.error
    }

    if (error) {
      console.error("Error inserting lead into Supabase:", error)
      // Even if DB has an issue, still dispatch the email notification so the lead is never lost
      await sendLeadEmail(data)
      return { success: true, data: result }
    }

    await sendLeadEmail(data)
    return { success: true, data: result }
  } catch (error: any) {
    console.error("Unexpected error submitting lead Server Action:", error)
    await sendLeadEmail(data)
    return { success: true }
  }
}
