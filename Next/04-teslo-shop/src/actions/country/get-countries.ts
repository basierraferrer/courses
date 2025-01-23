'use server';

import prisma from '@/lib/prisma';

export const getCountries = async () => {
  try {
    const countries = await prisma.country.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return countries;
  } catch (error) {
    console.log('**__** ~ getCountries ~ error:', error);
    return [];
  }
};
