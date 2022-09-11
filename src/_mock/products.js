import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PROJECT_NAME = ['4Art', 'Linkedin Clone', 'Prescriptionator'];

// ----------------------------------------------------------------------

const products = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: PROJECT_NAME[index],
  entries: faker.datatype.number({ min: 4, max: 250 }),
  status: sample(['new', 'expired', '', '']),
}));

export default products;
