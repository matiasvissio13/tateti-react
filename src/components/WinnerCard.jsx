import { Square } from './Square'

export function WinnerCard({ winner, resetGame }) {
    if (winner === null) return null

    const resultText = winner === false ? 'Empate' : 'Ganador:'

    return (
        <div className='absolute px-28 py-16 bg-zinc-900 opacity-95 rounded-xl shadow-md'>
            <div className='flex flex-col justify-between items-center'>
                <h2 className='text-[35px] font-mono'>
                    {resultText}
                </h2>

                <div className='my-2 pointer-events-none'>
                    {winner && <Square>{winner}</Square>}
                </div>

                <div className='px-4 py-1 text-xl rounded-xl border-2 mt-4'>
                    <button onClick={resetGame}>RESET</button>
                </div>
            </div>
        </div>
    )
}
