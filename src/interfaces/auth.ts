interface User {
  accessToken: string | null;
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

export { type User };
