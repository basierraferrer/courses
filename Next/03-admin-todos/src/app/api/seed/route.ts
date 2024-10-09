import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data:[
            {description: 'Piedra del alma', complete: true},
            {description: 'Piedra del tiempo'},
            {description: 'Piedra de la realidad'},
            {description: 'Piedra del espacio'},
        ]
    })

  return new NextResponse(JSON.stringify({
    message: 'Seed executed'
  }), { status: 200 } );
}