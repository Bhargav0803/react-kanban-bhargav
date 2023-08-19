import React from 'react'
import { useEffect, useState } from 'react';
const API = "https://api.quicksell.co/v1/internal/frontend-assignment "

const UTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchTickets = async (url) => {
    try {
      const res = await fetch(url);
      const rawdata = await res.json();
      const data = rawdata.tickets;
      const userdata=rawdata.users;
      if (data.length > 0) {
        setTickets(data);
        setUsers(userdata);
        // console.log(data)
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchTickets(API);
  }, [])
  const uniqueUserIds = [...new Set(tickets.map(ticket => ticket.userId))];

  // Organize tickets into columns based on user_id
  const ticketsByUser = {};
  uniqueUserIds.forEach(userId => {
    ticketsByUser[userId] = tickets.filter(ticket => ticket.userId === userId);
  });

  return (
    <div className='ticketwindow'>
      <>
      <div className="kanban">
      {uniqueUserIds.map(userId => (
            <div className="kanban_column">
              <div className="kanban_col_title">{userId}
                <div className="kanban_items">
                  
                    {ticketsByUser[userId].map(ticket => (
                      // const { id, title, tag, priority, userId } = curTicket;
                      // return (
                        <div class='ticket' key={ticket.id}>
                          <p class='idclass'>{ticket.id}</p>
                          <ul>
                            <li>{ticket.title}</li>
                          </ul>
                          <div class='inline1'>
                            <p>Priority:{ticket.priority}</p>
                            <p>{ticket.tag}</p>
                          </div>
                        </div>         
      ))}
                  
                </div>
              </div>
            </div>
          ))}
          </div>
      </>
    </div>
  )
}

export default UTicket