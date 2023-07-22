import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const getLoggedInUser = async () => {
  const url = "http://localhost:5000/api/users/";

  const config: AxiosRequestConfig = {
    method: "GET",
    url: url,
  };

  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export const signUp = async (credentials: SignUpCredentials) => {
  const url = "http://localhost:5000/api/users/signup";
  const config: AxiosRequestConfig = {
    method: "POST",
    url: url,
    headers: {
      "Content-type": "application/json",
    },
    data: credentials,
  };
  const response: AxiosResponse = await axios(config);
  return response.data;
};
export interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  const url = "http://localhost:5000/api/users/login";
  const config: AxiosRequestConfig = {
    method: "POST",
    url: url,
    headers: {
      "Content-type": "application/json",
    },
    data: credentials,
  };
  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  const url = "http://localhost:5000/api/users/logout";
  const config: AxiosRequestConfig = {
    method: "POST",
    url: url,
  };
  await axios(config);
};

export const fetchNotes = async () => {
  const url = "http://localhost:5000/api/notes/";

  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export interface NoteInput {
  title: string;
  text?: string;
}

export const createNote = async (note: NoteInput) => {
  const url = "http://localhost:5000/api/notes";

  const config: AxiosRequestConfig = {
    method: "POST",
    url: url,
    headers: {
      "Content-type": "application/json",
    },
    data: note,
  };

  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNote = async (noteId: string, note: NoteInput) => {
  const url = `http://localhost:5000/api/notes/${noteId}`;

  const config: AxiosRequestConfig = {
    method: "PATCH",
    url: url,
    headers: {
      "Content-type": "application/json",
    },
    data: note,
  };

  try {
    const response: AxiosResponse = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (noteId: string) => {
  const url = `http://localhost:5000/api/notes/${noteId}`;

  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: url,
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response: AxiosResponse = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
};
