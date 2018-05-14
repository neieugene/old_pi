import React from 'react';
import events from "events.jpg";

export default function EventsContent() {
  return (
    <div>
      <img
        src={events}
        alt="События и новости"
        title="События и новости"
        className="ContentPage-head-image"
      />
      <br />
    </div>
  );
}
