import React from 'react';
import Microtask from './Microtask';
import { Microtask as MicrotaskType } from './models';

// PropTypes for MicrotaskList
interface MicrotaskListProps {
    microtasks: MicrotaskType[];
    selectMicrotask: (id: number) => void;
}

// MicrotaskList component displays a list of microtasks. 
// It takes microtasks array and selectMicrotask function as props
const MicrotaskList: React.FC<MicrotaskListProps> = ({ microtasks, selectMicrotask }) => {
    return (
        <div id="microtask-list">
            {microtasks.map(microtask => (
                <Microtask key={microtask.id} microtask={microtask} selectMicrotask={selectMicrotask} />
            ))}
        </div>
    );
}

export default MicrotaskList;