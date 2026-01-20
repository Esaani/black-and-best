import { type SchemaTypeDefinition } from 'sanity'
import {postType} from './postType'
import {productType} from './productType'
import {galleryType} from './galleryType'
import {rateCardType} from './rateCardType'
import {bookingType} from './bookingType'
import {faqType} from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    productType,
    galleryType,
    rateCardType,
    bookingType,
    faqType,
  ],
}
