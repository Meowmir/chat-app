import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import JoinedChatsList from "../components/joinedChatsList";
import AvailableChats from "../components/availableChatsList";
import ViewTitle from "../components/shared/viewTitle";

import { fetchChats } from "../actions/chats";
import { withBaseLayout } from "../../layout/base";
import Notification from "../utils/notifications";

function HomeView() {
  const dispatch = useDispatch()
  const joinedChats = useSelector(({ chats }) => chats.joined)
  const availableChats = useSelector(({ chats }) => chats.available)

  useEffect(() => {
    Notification.setup()
    dispatch(fetchChats())
  }, [dispatch]);

  return (
        <div className="row no-gutters fh">
          <div className="col-3 fh">
            <JoinedChatsList chats={joinedChats} />
          </div>
          <div className="col-9 fh">
            <ViewTitle text={"Choose your channel"}>
                <Link
                  className="btn btn-outline-primary"
                  to="/chat-create"
                >
                  New
                </Link>
            </ViewTitle>
            <AvailableChats chats={availableChats} />
          </div>
        </div>
  );
}

export default withBaseLayout(HomeView)
