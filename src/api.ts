import { LOCALHOST_SERVER, LOCALHOST_API_SERVER_PORT } from "./config";

export const getValue1 = async (): Promise<number> => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value1`
  );
  const data = await response.json();
  return data.value;
};

export const incrementValue1 = async () => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value1`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "increment" }),
    }
  );
  const data = await response.json();
  return data.value;
};

export const decrementValue1 = async () => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value1`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "decrement" }),
    }
  );
  const data = await response.json();
  return data.value;
};

export const getValue2 = async () => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value2`
  );
  const data = await response.json();
  return data.value;
};

export const incrementValue2 = async () => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value2`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "increment" }),
    }
  );
  const data = await response.json();
  return data.value;
};

export const decrementValue2 = async () => {
  const response = await fetch(
    `http://${LOCALHOST_SERVER}:${LOCALHOST_API_SERVER_PORT}/value2`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "decrement" }),
    }
  );
  const data = await response.json();
  return data.value;
};
