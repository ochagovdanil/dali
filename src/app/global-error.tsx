'use client';

import { useEffect } from 'react';

interface GlobalErrorArgumentsType {
	error: Error;
	reset: () => void;
}

export default function GlobalError({
	error,
	reset,
}: GlobalErrorArgumentsType) {
	useEffect(() => {
		console.log(`ERROR CAUSE: ${error.cause}`);
		console.log(`ERROR NAME: ${error.name}`);
		console.log(`ERROR MESSAGE: ${error.message}`);
		console.log(`ERROR STACK: ${error.stack}`);
	}, [error]);

	return (
		<html lang='en'>
			<body>
				<h1 className='text-2xl text-red-400'>
					Приложение сломалось глобально!
				</h1>
				<button onClick={reset} className='underline mt-4'>
					Попробовать еще раз
				</button>
			</body>
		</html>
	);
}
