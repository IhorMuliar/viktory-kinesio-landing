/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'productCategory',
  title: 'Категорія продукта',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Назва категорії',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Ідентифікатор',
      type: 'slug',
      description: "Генерується для url сторінки, натисніть 'Generate'",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
