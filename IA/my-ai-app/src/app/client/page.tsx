'use client';

import { useState } from 'react';
import { getWords } from '@/app/actions/generateText';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <button
        className='cursor-pointer p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded dark:bg-zinc-900'
        onClick={async () => {
          setIsLoading(true);
          const { text } = await getWords('easy');
          setGeneration(text);
          setIsLoading(false);
        }}
      >
        Answer
      </button>
      <div className={`flex-1 space-y-4 ${isLoading ? 'self-center' : ''}`}>
        {isLoading &&
          <div className="animate-spin h-5 w-5 border-2 border-gray-900 dark:border-white rounded-full border-t-transparent"></div>
        }
        {!isLoading && generation && <div className='p-4 bg-gray-100 dark:bg-gray-800 rounded-lg'>{generation}</div>}

      </div>
    </div>
  );
}