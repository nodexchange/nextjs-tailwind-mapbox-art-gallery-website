import { Article } from './Article';
import events from '../config/events.json';

export const Events = ({ limit = 30 }) => {
  const allEvents = events.events;
  const currentEvents = allEvents.filter((event) => {
    return new Date(event.date) >= new Date();
  });
  const pastEvents = allEvents.filter((event) => {
    return new Date(event.date) < new Date();
  });

  return (
    <section className="bg-no-repeat bg-cover bg-courseImage text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      {currentEvents.length === 0 ? null : (
        <>
          <h2
            className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
            style={{ lineHeight: '1.5rem' }}>
            Events
          </h2>
          <hr />
          <div className="mt-6">
            {currentEvents.slice(0, limit).map((event, id) => (
              <Article key={`event-${id}`} {...event} />
            ))}
          </div>
        </>
      )}
      {pastEvents.length === 0 ? null : (
        <>
          <h2
            className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
            style={{ lineHeight: '1.5rem' }}>
            Past Events
          </h2>
          <hr />
          <div className="mt-6">
            {pastEvents.slice(0, limit).map((event, id) => (
              <Article key={`event-${id}`} {...event} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
