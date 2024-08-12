// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UploadCV } = initSchema(schema);

export {
  UploadCV
};