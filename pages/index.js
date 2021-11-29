import React, {useContext} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Context } from "../context";

export default function Auth() {

  const router = useRouter();
  const { username, secret, setUsername, setSecret } =  useContext(Context); //ctrl j

//b5424147-6ffb-4b6b-ac77-39bc51fe17ee

function onSubmit(e) {
  e.preventDefault();

  if (username.length === 0 || secret.length === 0) return 0;
  axios
  .put('https://api.chatengine.io/users/',
    {username, secret},
    {headers: {'Private-key': 'b5424147-6ffb-4b6b-ac77-39bc51fe17ee'}}
  )
  .then((r) => router.push("/chats"))
  
}
  return <div className="background">
      <div className="auth-container">

        <form className='auth-form' onSubmit={e => onSubmit(e)}>
          <div className='auth-title'>NextJS Chat</div>


        <div className="input-container">
                <input placeholder="Email/Username"
                  className="text-input"
                  onChange={(e )=> setUsername(e.target.value)}
                />
          </div>    
           <div className="input-container">
                <input placeholder="Password"
                  className="text-input"
                  onChange={(e )=> setSecret(e.target.value)}
                />
          </div>

          <button
            type="submit"
            className='submit-button'
          >
           Login / Sign Up</button>


        </form>
      </div>
  </div>;
}
