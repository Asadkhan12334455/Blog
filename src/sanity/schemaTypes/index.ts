import { type SchemaTypeDefinition } from 'sanity'
import postType from './postType'
import postImage from './postImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, postImage],
}
