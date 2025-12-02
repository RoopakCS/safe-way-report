'use client';
import React from 'react';
import NumberFlow, { NumberFlowGroup } from '@number-flow/react';

function useTimeRemaining(target: Date) {
    const calc = () => {
        const now = new Date().getTime();
        const diff = Math.max(target.getTime() - now, 0);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { diff, days, hours, minutes, seconds };
    };

    const [time, setTime] = React.useState(calc);

    React.useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, [target.getTime()]);

    return time;
}

export function Countdown({
    targetDate,
}: {
    targetDate?: Date;
}) {
    const defaultTarget = React.useMemo(() => {
        const d = new Date();
        d.setDate(d.getDate() + 30);
        return d;
    }, []);

    const target = targetDate || defaultTarget;
    const { days, hours, minutes, seconds } = useTimeRemaining(target);

    return (
        <div className="w-full">
            {/* Countdown Numbers */}
            <NumberFlowGroup>
                <div
                    style={
                        {
                            fontVariantNumeric: 'tabular-nums',
                            '--number-flow-char-height': '0.85em',
                        } as React.CSSProperties
                    }
                    className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-md"
                >
                    {[
                        { value: days, label: 'Days' },
                        { value: hours, label: 'Hours' },
                        { value: minutes, label: 'Min' },
                        { value: seconds, label: 'Sec' },
                    ].map(({ value, label }, index) => (
                        <div
                            key={label}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* Number */}
                            <div className="mb-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                                <NumberFlow
                                    trend={-1}
                                    value={value}
                                    digits={
                                        index > 0
                                            ? { 1: { max: 5 } }
                                            : undefined
                                    }
                                    format={{ minimumIntegerDigits: 2 }}
                                />
                            </div>

                            {/* Label */}
                            <div className="text-[10px] sm:text-xs font-medium tracking-wider text-primary uppercase">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </NumberFlowGroup>
        </div>
    );
}

export default Countdown;
