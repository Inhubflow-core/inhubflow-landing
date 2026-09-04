import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, channel, notes } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Por favor proporciona al menos tu nombre y un método de contacto (Email o WhatsApp)." },
        { status: 400 }
      );
    }

    console.log("[Official Partner Application]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      channel,
      notes,
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud de Partner Oficial registrada con éxito.",
      data: {
        name,
        email,
        phone,
      },
    });
  } catch (err: unknown) {
    console.error("[Partner Application Error]:", err);
    return NextResponse.json(
      { error: "Error interno al procesar la solicitud." },
      { status: 500 }
    );
  }
}
