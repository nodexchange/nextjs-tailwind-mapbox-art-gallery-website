import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import UpcomingEvent from './UpcomingEvent';
import ButtonPay from './ButtonPay';
import DataTable from './DataTable';

const eventText = "Sensual Wednesdays - Bachata Classes, Guildhall, High Wycombe.";

const caption = "Your Previous transactions";

const tableHeader = {
  header1: 'Transaction ID',
  header3: 'Type',
  header4: 'Transaction Date',
  header2: 'Paid',
}

const AccordionComponent = ({user, links, title3, thirdItemContent}) => {
  return (
      <Accordion preExpanded="0">
        <AccordionItem uuid="0">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3
                className="text-white w-full text-center text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                style={{ lineHeight: '1.5rem' }}>
                Pay online
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="mt-4 gap-4 flex row justify-center">
              <UpcomingEvent type={''} text={eventText}>
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
              </UpcomingEvent>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        {user.transactions && 
          (<AccordionItem uuid="1">
            <AccordionItemHeading>
              <AccordionItemButton>
              <h3
                  className="text-white w-full text-center text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                  style={{ lineHeight: '1.5rem' }}>
                  Previous transactions
                </h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <DataTable caption={caption} header={tableHeader} rows={user.transactions} />
              {/* {user.transactions.map((item) => {
                return (<>
                  <p>Transaction: {JSON.stringify(item)}</p>
                </>)
              })}; */}
            </AccordionItemPanel>
          </AccordionItem>)
        }
      </Accordion>
  );
}
export default AccordionComponent;