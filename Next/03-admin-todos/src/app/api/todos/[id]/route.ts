import { NextResponse } from 'next/server'
import * as yup from 'yup';
import prisma from '@/lib/prisma';

interface ISegmentsProps {
    params: {
        id: string
    }
}

export async function GET(request: Request, segments: ISegmentsProps) { 
    const {id} = segments.params;    
    const todo = await prisma.todo.findFirst({
        where:{
            id,
        }
    })

    console.log("**__** ~ GET ~ todo:", todo);

    if(!todo){
        return NextResponse.json({message: `this id: ${id} not exists`},{status: 404})
    }
    
  return new NextResponse(JSON.stringify({
    data: todo
  }), { status: 200 } );
}

const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
});

export async function PUT(request: Request, segments: ISegmentsProps) { 
    const {id} = segments.params;    
    
    const todo = await prisma.todo.findFirst({
        where:{
            id,
        }
    });

    if(!todo){
        return NextResponse.json({message: `this id: ${id} not exists`},{status: 404})
    }

    try{
        const {complete, description} = await putSchema.validate(await request.json());

        const updatedTodo = await prisma.todo.update({
            where: {
                id,
            },
            data: {
                complete, 
                description
            }
        })
        
        return new NextResponse(JSON.stringify({
            data: updatedTodo
        }), { status: 200 } );

    }catch(error){
        return NextResponse.json(error, {status:400});
    }
}

