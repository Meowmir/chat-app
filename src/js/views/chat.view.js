import React from 'react'

import ChatUsersList from "../components/chatUsersList";
import ViewTitle from "../components/shared/viewTitle";
import ChatMessagesList from "../components/chatMessagesList";
import { useParams } from "react-router-dom";

export default function ChatView() {
  const { id } = useParams()

   return (
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatUsersList/>
        </div>
        <div className="col-9 fh">
          <ViewTitle text={`Joined channel: ${id}`}/>
          <ChatMessagesList/>
        </div>
      </div>
  )
}
