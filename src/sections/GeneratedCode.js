import { Box, Typography } from '@mui/material';
import React from 'react';
import { CopyBlock, monoBlue } from 'react-code-blocks';

function GeneratedCode() {
  const code = `const SignUp = ({ project_name, secret_key }) => {
  const [username, setUsername] = useState("");
  const [pattern, setPattern] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setPattern((pattern) => [...pattern, emojiObject]);
  };
  const signUp = async () => {
    axios
      .post("http://localhost:3000/users", {
        project_name,
        secret_key,
        username,
        pattern,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="flex-col w-1-3 gap-10">
      <label className="">Username</label>
      <input
        type="text"
        name="Usernmae"
        id="username"
        placeholder="Enter your username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        value={username}
      />
      <label className="">Unique Pattern</label>

      <input
        type="text"
        name="Password"
        value={
          pattern.length > 0 ? pattern.map((item) => item.emoji).join("") : ""
        }
        onKeyDown={(event) => {
          if (event.key === "Backspace") {
            setPattern(pattern.slice(0, -1));
          }
        }}
        id="password"
        placeholder="Create a Story"
      />
      <Picker
        onEmojiClick={onEmojiClick}
        disableSearchBar
        pickerStyle={{
          width: "100%",
          height: "40vh",
        }}
      />
      <SignIn />
      <button className="signup-button" onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
};
`;
  const language = 'javascript';
  const showLineNumbers = true;
  const startingLineNumber = 1;
  return (
    <Box mt={10} style={{ fontFamily: 'IBM Plex Mono', borderRadius: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Generated Code
      </Typography>
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={monoBlue}
              codeBlock
              
      />
    </Box>
  );
}

export default GeneratedCode;
