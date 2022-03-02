import  { Client } from "@pusher/push-notifications-web"

const beamsClient = new Client({
    instanceId: process.env.REACT_APP_BEAMS_INSTANCE_ID,
  });

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error);