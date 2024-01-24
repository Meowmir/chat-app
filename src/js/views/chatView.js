import React from 'react'
import { useParams } from "react-router-dom";
import { withBaseLayout } from "../../layout/base";
import ChatUsersList from "../components/chatUsersList";
import ChatMessagesList from "../components/chatMessagesList";
import ViewTitle from "../components/shared/viewTitle";


function ChatView() {
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

export default withBaseLayout(ChatView, {canGoBack: true})
