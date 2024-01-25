import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withBaseLayout } from "../../layout/base";
import ChatUsersList from "../components/chatUsersList";
import ChatMessagesList from "../components/chatMessagesList";
import ViewTitle from "../components/shared/viewTitle";

import { subscribeToChat, subscribeToProfile } from "../actions/chats";


function ChatView() {
  const { id } = useParams()
  const peopleWatcher = useRef({})
  const dispatch = useDispatch()
  const activeChat = useSelector(({ chats }) => chats.activeChats[id])
  const joinedUsers = activeChat?.joinedUsers

  useEffect(() => {
    const unsubFromChat = dispatch(subscribeToChat(id));
    return () => {
      unsubFromChat()
      unsubFromJoinedUsers()
    }
  }, [])

  useEffect(() => {
    joinedUsers && subscribeToJoinedUsers(joinedUsers)
    }, [joinedUsers]);

  const subscribeToJoinedUsers = (jUsers) => {
    jUsers.forEach(user => {
      if (!peopleWatcher.current[user.uid]) {
        peopleWatcher.current[user.uid] = dispatch(subscribeToProfile(user.uid))
      }
    })
  }

  const unsubFromJoinedUsers = () => {
    Object.keys(peopleWatcher.current)
      .forEach(id => peopleWatcher.current[id]())
  }

   return (
       <div className="row no-gutters fh">
         <div className="col-3 fh">
           <ChatUsersList users={activeChat?.joinedUsers}/>
         </div>
         <div className="col-9 fh">
           <ViewTitle text={`Channel: ${activeChat?.name}`}/>
           <ChatMessagesList/>
         </div>
       </div>
  )
}

export default withBaseLayout(ChatView, {canGoBack: true})
