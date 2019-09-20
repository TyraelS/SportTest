import React from 'react';

import EventsTabItemStyle from './EventsTabItemStyle';

const displayName = 'EventsTabItem';

export default function EventsTabItem({name, country}){
    return (
        <EventsTabItemStyle>
            <div>{name}</div>
            <div>{country}</div>
        </EventsTabItemStyle>
    )
}

EventsTabItem.displayName = displayName;