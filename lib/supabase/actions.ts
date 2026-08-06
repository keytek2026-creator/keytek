"use server"

import nodemailer from "nodemailer"
import { supabase } from "./client"

export interface LeadInput {
  nombre: string
  telefono: string
  comuna: string
  servicio: string
  mensaje: string
  origen?: string
}

async function sendLeadEmail(data: LeadInput) {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    console.warn("SMTP credentials not fully configured in environment variables. Email notification skipped.")
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === "465", // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const mailOptions = {
      from: `"Keytek Web" <${smtpUser}>`,
      to: "contacto@keytek.cl",
      subject: `Nuevo Contacto Web: ${data.nombre} - ${data.servicio}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #fcfcfc;">
          <h2 style="color: #0F2A4A; border-bottom: 2px solid #4FA8E0; padding-bottom: 8px;">Nuevo Lead desde Formulario Web</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px; border-bottom: 1px solid #eee;">Nombre:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Teléfono:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">
                <a href="https://wa.me/${data.telefono.replace(/\+/g, "")}" style="color: #25D366; text-decoration: none; font-weight: bold;">
                  ${data.telefono} (Enviar WhatsApp)
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Comuna:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.comuna}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Servicio:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.servicio}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Mensaje:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${data.mensaje}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Origen:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-style: italic;">${data.origen || "formulario_web"}</td>
            </tr>
          </table>
          <p style="font-size: 11px; color: #888; margin-top: 25px; text-align: center;">
            Este correo fue generado de forma automática por el sistema de contacto de Keytek Cerrajería.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("Email notification sent successfully to contacto@keytek.cl")
  } catch (error) {
    console.error("Error sending email notification:", error)
  }
}

export async function createLead(data: LeadInput) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase credentials are not configured, simulate a successful database insert.
  // This ensures the application form works cleanly out of the box in development environments.
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
    const { data: result, error } = await supabase
      .from("leads")
      .insert([
        {
          nombre: data.nombre,
          telefono: data.telefono,
          comuna: data.comuna,
          servicio: data.servicio,
          mensaje: data.mensaje,
          origen: data.origen || "web",
        },
      ])
      .select()

    if (error) {
      console.error("Error inserting lead into Supabase:", error)
      return { success: false, error: error.message }
    }

    await sendLeadEmail(data)
    return { success: true, data: result }
  } catch (error: any) {
    console.error("Unexpected error submitting lead Server Action:", error)
    return { success: false, error: error?.message || "Ocurrió un error inesperado al enviar el formulario." }
  }
}
