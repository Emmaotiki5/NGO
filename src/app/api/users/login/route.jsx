import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function GET() {
    const donations = await prisma.donation.findMany()
    return NextResponse.json(donations)
}