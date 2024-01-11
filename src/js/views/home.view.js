import React from "react";
import Navbar from "../components/navbar";
import JoinedChats from "../components/joinedChats";
import AvailableChats from "../components/avaliableChats";
import ViewTitle from "../components/shared/viewTitle";

export default function HomeView() {
  return (
    <>
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <JoinedChats />
        </div>
        <div className="col-9 fh">
          <ViewTitle />
          <AvailableChats />
        </div>
      </div>
    </>
  );
}
