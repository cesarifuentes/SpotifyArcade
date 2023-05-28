const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "0e10132158354330a41de8afaf122210";

const scopes = [
  "playlist-read-private",
  "user-follow-read",
  "user-top-read",
  "user-read-recently-played",
  "user-library-read",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;
