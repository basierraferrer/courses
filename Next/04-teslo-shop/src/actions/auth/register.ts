'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

interface RegisterUser {
  email: string;
  password: string;
  name: string;
}

export const registerUser = async ({email, password, name}: RegisterUser) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return {
      ok: true,
      user,
      message: 'Usuario creado correctamente',
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error('**__** ~ registerUser ~ error:');
    return {
      ok: false,
      message: 'No se pudo crear el usuario',
    };
  }
};
