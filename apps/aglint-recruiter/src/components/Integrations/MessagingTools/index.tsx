import { capitalize } from 'lodash';

import { IntegrationCard } from '../components/IntegrationCard';
import { type MessagingToolsType } from '../types';
// import SlackLogo from '@public/images/svg/slack-logo.svg';

function MessagingTools() {
  const messagingTools = [
    {
      name: 'slack' as MessagingToolsType,
      url: 'slack.com',
      // logo: <SlackLogo />,
      logo: <></>,
    },
    // {
    //   name: 'teams' as MessagingToolsType,
    //   url: 'teams.live.com',
    //   logo: <TeamsLogo />,
    // },
  ];

  return (
    <div className='grid gap-4'>
      {messagingTools.map((item, i) => (
        <IntegrationCard
          key={i}
          slotLogo={item.logo}
          textName={capitalize(item.name)}
          textLink={item.url}
          onClick={() => {
            window.open(
              'https://' + item.url.replace('slack.com', 'slack.com/signin'),
            );
          }}
        />
      ))}
    </div>
  );
}

export default MessagingTools;
