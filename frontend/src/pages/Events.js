import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { id: 'p1', title: 'Event 1' },
  { id: 'p2', title: 'Event 2' },
  { id: 'p3', title: 'Event 3' },
];

function EventsPage() {
  return (
    <>
      <h1>The Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default EventsPage;
