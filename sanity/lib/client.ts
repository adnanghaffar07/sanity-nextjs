import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn, 
  token: 'skjoQIi0nRcTUQNCntHfg6qO3Pi0oLF9rmvBbmU0VUTONDz8hMxhFxnk6BtNtTl7v9qn1d80xKsMhmPbkWImpLb8VREtEhABfUuFAycaND0UpUy5rT2PinRnymvEHeqieX3tOTZDddjDyeFFFCogrDLBMNx6lzl62FM7GTmzZdENST75q1Tp', // Add the write token here
});
