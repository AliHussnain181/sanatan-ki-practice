import { Movies } from '@/schema/movies'
import { Practice } from '@/schema/practice'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Practice,Movies]
}
