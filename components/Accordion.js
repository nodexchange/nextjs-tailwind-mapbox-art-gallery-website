import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import UpcomingEvent from './UpcomingEvent';
import ButtonPay from './ButtonPay';

const eventText = "Tester Bachata Class (2h) 04/05, Guildhall.";


const AccordionComponent = ({user, links, title3, thirdItemContent}) => {
  return (
      <Accordion preExpanded="0">
        <AccordionItem uuid="0">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3
                className="text-white w-full text-center text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                style={{ lineHeight: '1.5rem' }}>
                Upcoming Events!
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="mt-4 gap-4 flex row justify-center">
              <UpcomingEvent type={''} text={eventText}>
                {user.paid ? (
                  <button className="inline-flex items-center px-4 py-2 text-indigo-100 bg-shine rounded-md">
                    PAID
                  </button>
                ) : (
                  <>
                    <ButtonPay
                      text={'Normal (£10)'}
                      url={`${links.fullLink}?prefilled_email=${user.email}`}
                    />
                    <ButtonPay
                      text={'Student (£7)'}
                      url={`${links.link}?prefilled_email=${user.email}`}
                    />
                  </>
                )}
              </UpcomingEvent>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="1">
          <AccordionItemHeading>
            <AccordionItemButton>
            <h3
                className="text-white w-full text-center text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                style={{ lineHeight: '1.5rem' }}>
                Previous Events
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p></p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
  );
}
export default AccordionComponent;