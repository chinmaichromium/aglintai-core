import mixpanel from 'mixpanel-browser';
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN, { debug: true });

export default mixpanel;
