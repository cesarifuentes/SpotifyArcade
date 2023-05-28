// import { useEffect, useState } from "react";
// import SpotifyWebApi from "spotify-web-api-node";

// const spotifyApi = new SpotifyWebApi({
//   clientId: "0e10132158354330a41de8afaf122210",
// });

// export default function getUser(accessToken) {
//   let [User, setUser] = useState();
//   //= useState("");
//   useEffect(() => {
//     if (!accessToken) return;

//     // Setting Up the spotifyApi with AccessToken so that we can use its functions anywhere in the component without setting AccessToken value again & again.
//     spotifyApi.setAccessToken(accessToken);

//     // Get user details with help of getMe() function
//     spotifyApi.getMe().then((resp) => {
//       //   console.log("resp", resp);
//       setUser(resp); // Now it works
//     });
//   }, [accessToken]);

//   return User;
// }
