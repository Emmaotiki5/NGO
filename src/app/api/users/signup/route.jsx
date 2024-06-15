import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"


const prisma = new PrismaClient()


export async function POST(request) {
    try {
        const { username, email, password } = await request.json(); // Correctly parse the JSON body

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword, // Save the hashed password
            },
        });

        return new Response(JSON.stringify(newUser), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ error: 'Error creating user' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}