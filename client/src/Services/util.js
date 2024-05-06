export const BASE_URL = "http://localhost:5000";

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body,
  });
  const data = await response.json();
  if (!response.ok) {
    let message;
    if (message?.data) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};

export const getRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    let message = "An error occured";
    if (message?.data) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }
  return data;
};
