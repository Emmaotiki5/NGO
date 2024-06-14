import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()


export async function POST(req, res) {
    const {name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10)


    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password:  hashedPassword
        }
    })

    return res.status(200).json(user)
}