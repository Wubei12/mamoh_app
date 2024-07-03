import images from './images';

export interface productCardInfoItem {
  productName: string;
  productColor: string;
  productSize: string;
  productPrice: number;
  productOPrice: number | null;
  productDiscount: number | null;
  image: string;
  store: storeName[];
}

export interface storeName {
  name: string;
  deliveryCost: number | null;
}

const productCardInfo: productCardInfoItem[] = [
  {
    productName: 'بلوزة أبيض مع أزرق تركي خامات',
    productColor: '#C04354',
    productSize: 'كبير',
    productPrice: 35,
    productOPrice: 40.25,
    productDiscount: 15,
    image: images.shirt1,
    store: [{name: 'محاميد', deliveryCost: 10}],
  },
  {
    productName: 'بلوزة أبيض مع أزرق تركي خامات راقية',
    productColor: '#10436F',
    productSize: 'كبير',
    productPrice: 35,
    productOPrice: 40.25,
    productDiscount: 15,
    image: images.shirt2,
    store: [{name: 'محاميد', deliveryCost: 10}],
  },
  {
    productName: 'ملابس تركية الاصلية مستوردة',
    productColor: '#313035',
    productSize: 'كبير',
    productPrice: 35,
    productOPrice: null,
    productDiscount: null,
    image: images.clothing,
    store: [{name: 'Zourob', deliveryCost: 10}],
  },
];

export default productCardInfo;
