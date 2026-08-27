"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Send } from "lucide-react"

import { COMUNAS, SERVICES } from "@/lib/data"
import { createLead } from "@/lib/supabase/actions"
import { toast } from "@/components/ui/toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  nombre: z.string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .refine(
      (val) => {
        const trimmed = val.trim();
        const parts = trimmed.split(/\s+/);
        return parts.length >= 2 && parts.every(part => part.length >= 2);
      },
      {
        message: "Por favor, ingresa tu nombre y apellido (al menos dos palabras).",
      }
    )
    .refine(
      (val) => {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        return regex.test(val);
      },
      {
        message: "El nombre solo debe contener letras.",
      }
    ),
  telefono: z.string()
    .min(8, { message: "El teléfono debe tener al menos 8 dígitos." })
    .refine(
      (val) => {
        const regex = /^\+?[0-9\s\-]+$/;
        return regex.test(val);
      },
      {
        message: "El teléfono solo debe contener números (puede iniciar con + y contener espacios o guiones).",
      }
    ),
  email: z.string()
    .refine(
      (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      { message: "Por favor, ingresa un formato de correo válido (ej: contacto@empresa.cl)." }
    )
    .optional()
    .or(z.literal("")),
  comuna: z.string().min(1, "Selecciona una comuna de la lista."),
  servicio: z.string().min(1, "Selecciona el servicio requerido."),
  mensaje: z.string().min(5, {
    message: "El mensaje debe tener al menos 5 caracteres.",
  }),
})

type FormValues = z.infer<typeof formSchema>

interface ContactFormProps {
  defaultService?: string
  title?: string
  subtitle?: string
  compact?: boolean
}

export function ContactForm({
  defaultService = "",
  title = "Solicitar Presupuesto",
  subtitle = "Completa el formulario y te responderemos a la brevedad con una cotización a tu medida.",
  compact = false
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      comuna: "",
      servicio: defaultService,
      mensaje: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const result = await createLead({
        ...values,
        origen: "formulario_web",
      })

      if (result.success) {
        toast.add({
          title: "¡Formulario enviado!",
          description: "Hemos recibido tus datos. Un especialista se pondrá en contacto contigo a la brevedad.",
          type: "success",
        })
        form.reset({
          nombre: "",
          telefono: "",
          email: "",
          comuna: "",
          servicio: defaultService || "",
          mensaje: "",
        })
      } else {
        toast.add({
          title: "Error al enviar",
          description: result.error || "Ocurrió un error al procesar tu solicitud. Inténtalo de nuevo.",
          type: "error",
        })
      }
    } catch (error) {
      console.error("Form submit error:", error)
      toast.add({
        title: "Error inesperado",
        description: "No pudimos conectar con el servidor. Revisa tu conexión.",
        type: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`w-full ${compact ? "p-5 sm:p-6" : "max-w-2xl mx-auto p-6 sm:p-10"} bg-white rounded-3xl border border-gray-150 shadow-xl shadow-keytek-navy/5`}>
      <div className={`text-center ${compact ? "mb-6" : "mb-8"}`}>
        <h3 className={`font-heading font-bold text-keytek-text ${compact ? "text-xl mb-1.5" : "text-2xl mb-2"}`}>
          {title}
        </h3>
        <p className="text-keytek-text-muted text-xs sm:text-sm leading-relaxed">
          {subtitle}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={compact ? "space-y-4" : "space-y-6"}>
          <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
            {/* Nombre */}
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Nombre Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Juan Pérez" {...field} className="rounded-xl border-gray-250 focus-visible:ring-keytek-blue/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Teléfono */}
            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Teléfono de Contacto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. +56 9 1234 5678" {...field} className="rounded-xl border-gray-250 focus-visible:ring-keytek-blue/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
            {/* Correo Electrónico */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Correo Electrónico <span className="text-gray-400 font-normal text-xs">(Opcional)</span></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Ej. contacto@empresa.cl" {...field} className="rounded-xl border-gray-250 focus-visible:ring-keytek-blue/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Comuna */}
            <FormField
              control={form.control}
              name="comuna"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Región / Comuna</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl border-gray-250 focus:ring-keytek-blue/50 text-left">
                        <SelectValue placeholder="Selecciona tu región o comuna" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[300px] bg-white border border-gray-150 rounded-xl shadow-lg">
                      {COMUNAS.map((comuna) => (
                        <SelectItem key={comuna} value={comuna} className="hover:bg-keytek-bg-soft">
                          {comuna}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Servicio */}
          <FormField
            control={form.control}
            name="servicio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Servicio Requerido</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl border-gray-250 focus:ring-keytek-blue/50 text-left">
                      <SelectValue placeholder="Selecciona el servicio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white border border-gray-150 rounded-xl shadow-lg">
                    {SERVICES.map((service) => (
                      <SelectItem key={service.slug} value={service.slug} className="hover:bg-keytek-bg-soft">
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mensaje */}
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-keytek-text font-semibold text-xs sm:text-sm">Detalles del Requerimiento</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe brevemente tu requerimiento (ej: ubicación, tipo de servicio, cantidad de equipos o cámaras...)"
                    rows={compact ? 3 : 4}
                    {...field}
                    className="rounded-xl border-gray-250 focus-visible:ring-keytek-blue/50 text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#1B5FA8] hover:bg-[#0F2A4A] text-white rounded-xl font-bold transition-all shadow-md shadow-keytek-blue/20 hover:shadow-lg flex items-center justify-center gap-2 ${compact ? "py-4 text-sm" : "py-6 text-base"}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Procesando...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Enviar Solicitud</span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
