import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function POST(request) {
    const {username, password} = await request.json();
    try {
        const findUser = await prisma.user.findFirst({
            where: {
                username: username,
            },
        });

        if(!findUser){
            return new Response(JSON.stringify({
                error: "No user with this username exists"
            }),{
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            }
        )};

        const comparePassword = await bcrypt.compare(password, findUser.password)

        if(!comparePassword) {
            return new Response(JSON.stringify({
                error:"Invalid Password"
            }), {
                status: 401,
                header: {'Content-Type': 'application/json'},
            })
        }
        return new Response(JSON.stringify({message:"Successful Login"}),
        {
            status: 200,
            headers: {'Content-Type':"application/json"}
        })

    } catch (err) {
        console.log(err)

        return new Response(JSON.stringify({error: "Internal Server Error"}),{
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });

    };
};