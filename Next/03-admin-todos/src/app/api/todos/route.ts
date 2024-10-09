import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'
import yup from 'yup';

/**
 * 
 * take:2
 * 
 * @param request 
 * @returns 
 */

export async function GET(request: Request) { 

    const {searchParams } = new URL(request.url);
    const take = Number(searchParams.get('take')) ?? 10;
    const skip = Number(searchParams.get('skip')) ?? 0;

    if(isNaN(take)){
        return NextResponse.json({
            message: 'Take value is not a number',
          }, {status: 400})
    }
    if(isNaN(skip)){
        return NextResponse.json({
            message: 'Skip value is not a number',
          }, {status: 400})
    }
  
    const todos = await prisma.todo.findMany({
        take,
        skip,
    });

  return new NextResponse(JSON.stringify({
    data: todos
  }), { status: 200 } );
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) { 

    try {
        const {complete, description} = await postSchema.validate(await request.json());
    
        const todo = await prisma.todo.create({
            data: {
                complete, 
                description
            }
        });

        return NextResponse.json(todo);
    }catch(error){
        return NextResponse.json(error, {status: 400});
    }
}
