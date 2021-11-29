import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {

  const {username, secret} = useContext(Context);
  const [showChat, setshowChat] = useState(false)
  const router = useRouter();


  useEffect(() => {
      if(typeof document != null){
        setshowChat(true)
      }

  }, [])

  useEffect(() => {
    if(username.length === 0 || secret.length == 0){
      router.push('/')
    }
  }, [])

  if (!showChat){ 

    return <div></div>
  }

  return (<div className="background">
          <div className='shadow'>

            <ChatEngine height='calc(100vh - 200px)'
              projectID='3c48f4da-17df-465f-a148-2e330b87d769'
              userName= {username}
              userSecret={secret}
              renderNewMessageForm={() => <MessageFormSocial/>}
            />
          </div>
  </div>
  
  )
}
