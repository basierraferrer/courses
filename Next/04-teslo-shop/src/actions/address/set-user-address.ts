'use server';
import {Address} from '@/interfaces';
import prisma from '@/lib/prisma';

export const setUserAddress = async (address: Address, userId: string) => {
  try {
    const userAddress = await createOrReplaceAddress(address, userId);
    return {
      ok: true,
      message: '',
      data: userAddress,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    //console.error('**__** ~ setUserAddress ~ error:', error);
    return {
      ok: false,
      message: 'Error while setting user address',
    };
  }
};

const createOrReplaceAddress = async (
  {country, ...restAddress}: Address,
  userId: string,
) => {
  try {
    const storeAddress = await prisma.userAddress.findFirst({
      where: {
        userId,
      },
    });
    console.log('**__** ~ storeAddress:', storeAddress);

    const addressToSave = {
      ...restAddress,
      countryId: country,
      userId,
    };
    console.log('**__** ~ addressToSave:', addressToSave);

    if (!storeAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave,
      });
      console.log('**__** ~ newAddress:', newAddress);
      return newAddress;
    }

    const updAddress = await prisma.userAddress.update({
      where: {
        userId: userId,
      },
      data: addressToSave,
    });

    return updAddress;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
