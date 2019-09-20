import React from 'react';

import EventTabStyle from './EventsTabStyle';
import EventsTabItem from '../EventsTabItem';

const displayName = 'EventTab';

export default function EventTab({events}){
    console.log(events);
    return(
        <EventTabStyle>
            {events.map(item => 
                 <EventsTabItem key = {item.id} name = {item.name} country = {item.countryCode}>{item.name}</EventsTabItem>
            )}
        </EventTabStyle>
    )
}

EventTab.displayName = displayName;
