import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { withBaseLayout } from "../../layout/base";
import ChatUsersList from "../components/chatUsersList";
import ChatMessagesList from "../components/chatMessagesList";
import ViewTitle from "../components/shared/viewTitle";

import { subscribeToChat } from "../actions/chats";


function ChatView() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id))
    return () => {
      unsubFromChat()
    }
  }, []);

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

export default withBaseLayout(ChatView, {canGoBack: true})
