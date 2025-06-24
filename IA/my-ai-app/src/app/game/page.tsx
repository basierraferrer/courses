'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { DIFFICULTY } from '@utils/constants';
import { Header, Grid, Keyboard, Spinner, Status } from './components';
import { useGameStore } from '@store/gameStore';
import { Difficulty, LetterState } from '@typos/game';

export default function Game() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || DIFFICULTY.EASY;

  const {
    gameState,
    targetWord,
    error,
    isLoading,
    initializeGame,
    handleKeyPress,
  } = useGameStore();

  useEffect(() => {
    if (!isLoading) {
      initializeGame(difficulty as Difficulty);
    }
  }, [difficulty, initializeGame, isLoading]);

  const getLetterClass = (state: LetterState['state']) => {
    switch (state) {
      case 'correct':
        return 'bg-green-500 border-green-500';
      case 'present':
        return 'bg-yellow-500 border-yellow-500';
      case 'absent':
        return 'bg-gray-600 border-gray-600';
      default:
        return 'bg-gray-800 border-gray-600';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center p-4">
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="max-w-md w-full space-y-8">
          <Header difficulty={difficulty as Difficulty} error={error} />
          <Grid gameState={gameState} getLetterClass={getLetterClass} />
          <Status
            gameOver={gameState.gameOver}
            gameWon={gameState.gameWon}
            targetWord={targetWord}
          />
          <Keyboard handleKeyPress={handleKeyPress} />
        </div>
      )}
    </main>
  );
} 