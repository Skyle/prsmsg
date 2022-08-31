import React from "react";
import MessageCount from "../../components/overlay/MessageCount";
import GQLLink from "../../components/overlay/GQLLink";

function InfoOverlays() {
  return (
    <React.Fragment>
      <div className="absolute top-4 left-4 z-50">
        <MessageCount></MessageCount>
      </div>
      <div className="absolute top-4 right-4 z-50">
        <GQLLink></GQLLink>
      </div>
    </React.Fragment>
  );
}

export default InfoOverlays;
