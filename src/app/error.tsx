'use client';

import { useEffect } from 'react';

interface ErrorArgumentsType {
	error: Error;
	reset: () => void;
}

export default function Error({ error, reset }: ErrorArgumentsType) {
	useEffect(() => {
		console.log(`ERROR CAUSE: ${error.cause}`);
		console.log(`ERROR NAME: ${error.name}`);
		console.log(`ERROR MESSAGE: ${error.message}`);
		console.log(`ERROR STACK: ${error.stack}`);
	}, [error]);

	return (
		<div className='my-[20rem] text-center'>
			<h1 className='text-2xl text-red-400'>Приложение сломалось!</h1>
			<button onClick={reset} className='underline mt-4'>
				Повторить еще раз
			</button>
		</div>
	);
}
