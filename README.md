# Music Match

This web app lets you compete with your friends to see who knows each others music taste the best!

## Requirements

- NodeJS v18.16.0

## How To Use

1. Running the Server

   - `cd server`
   - `npm run dev`

2. Running the Client

   - `cd client`
   - `npm install`
   - `npm start`

3. [Launch the Client Local Browser](http://localhost:3000/)

## To Do

- [ ] Create a
-

https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

https://stackoverflow.com/questions/34130539/uncaught-error-invariant-violation-element-type-is-invalid-expected-a-string

https://codepen.io/alvarotrigo/pen/WNggKqz

https://codepen.io/hylobates-lar/pen/qBbQeON

https://stackoverflow.com/questions/37798967/tooltip-on-click-of-a-button

https://www.w3schools.com/howto/howto_css_dropup.asp

https://www.cdnfonts.com/gotham.font
need to get licensing

https://reactrouter.com/en/main/start/tutorial
how it all started

https://www.youtube.com/watch?v=l8CS9AMBSIQ

<!-- TODO: add voicechat that lowers others audio while music is playing -->
<!--
const CLIENT_ID = "0e10132158354330a41de8afaf122210";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const [token, setToken] = useState("");

useEffect(() => {
const hash = window.location.hash;
let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

}, []);

const logout = () => {
setToken("");
window.localStorage.removeItem("token");
}; -->
