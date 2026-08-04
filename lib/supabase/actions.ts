"use server"

import { supabase } from "./client"

export interface LeadInput {
  nombre: string
  telefono: string
  comuna: string
  servicio: string
  mensaje: string
  origen?: string
}

export async function createLead(data: LeadInput) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // If Supabase credentials are not configured, simulate a successful database insert.
  // This ensures the application form works cleanly out of the box in development environments.
  if (!supabaseUrl || !supabaseAnonKey) {
    console.log("Mock database insertion for lead:", data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
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

    return { success: true, data: result }
  } catch (error: any) {
    console.error("Unexpected error submitting lead Server Action:", error)
    return { success: false, error: error?.message || "Ocurrió un error inesperado al enviar el formulario." }
  }
}
