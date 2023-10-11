import React, { useState } from 'react';
import { Microtask } from './models';

interface MicrotaskFormProps {
    createMicrotask: (microtask: Microtask) => void;
}

const MicrotaskForm: React.FC<MicrotaskFormProps> = ({ createMicrotask }) => {
    const [name, setName] = useState('');
    const [timeBudget, setTimeBudget] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a new Microtask object
        const newMicrotask: Microtask = {
            id: Math.random(), // This should be replaced with a proper unique id generation
            name,
            taskId: 0, // This should be replaced with the currently selected task id
            timeSpent: 0,
            timeBudget,
            status: 'Active'
        };

        createMicrotask(newMicrotask);

        // Clear the form
        setName('');
        setTimeBudget(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="microtask-name">Microtask Name</label>
            <input
                type="text"
                id="microtask-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="microtask-time-budget">Time Budget</label>
            <input
                type="number"
                id="microtask-time-budget"
                value={timeBudget}
                onChange={(e) => setTimeBudget(Number(e.target.value))}
            />

            <button type="submit">Add Microtask</button>
        </form>
    );
};

export default MicrotaskForm;
