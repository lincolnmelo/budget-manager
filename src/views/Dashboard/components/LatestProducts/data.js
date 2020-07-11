import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().format('DD-MM-YYYY, h:mm:ss A')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().format('DD-MM-YYYY, h:mm:ss A')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().format('DD-MM-YYYY, h:mm:ss A')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/images/products/product_4.png',
    updatedAt: moment().format('DD-MM-YYYY, h:mm:ss A')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/images/products/product_5.png',
    updatedAt: moment().format('DD-MM-YYYY, h:mm:ss A')
  }
];
