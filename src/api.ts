export const getValue1 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1');
    const data = await response.json();
    return data.value;
};

export const incrementValue1 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'increment' }),
    });
    const data = await response.json();
    return data.value;
};

export const decrementValue1 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'decrement' }),
    });
    const data = await response.json();
    return data.value;
};

export const getValue2 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1');
    const data = await response.json();
    return data.value;
};

export const incrementValue2 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'increment' }),
    });
    const data = await response.json();
    return data.value;
};

export const decrementValue2 = async () => {
    const response = await fetch('http://YOUR_PC_IP:5000/value1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'decrement' }),
    });
    const data = await response.json();
    return data.value;
};
