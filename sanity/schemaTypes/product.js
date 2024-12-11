/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'product',
  title: 'Продукт',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Назва продукта',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'releaseDate',
      title: 'Дата',
      type: 'date',
      description: 'Дата опублікування продукта',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'categories',
      title: 'Категорії',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'productCategory' }] }],
      description: 'Категорія продукту',
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
    {
      name: 'preview',
      title: "Прев'ю",
      type: 'image',
      description: "Зображення, яке буде використовуватися як прев'ю продукту",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoLink',
      title: 'Відео',
      type: 'string',
      description: 'Посилання на відео',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paymentLink',
      title: 'Оплата',
      type: 'string',
      description: 'Посилання на форму з оплатою',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'description',
              title: 'Опис фото',
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Соцмережі',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Посилання',
              type: 'url',
              description: 'URL посилання на соціальну мережу',
              validation: (Rule) => Rule.required(),
              initialValue: 'https://www.youtube.com/',
            },
            {
              name: 'type',
              title: 'Назва соціальної мережі',
              type: 'string',
              initialValue: 'Youtube',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Telegram', value: 'Telegram' },
                  { title: 'Youtube', value: 'Youtube' },
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'Facebook', value: 'Facebook' },
                ],
              },
            },
          ],
        },
      ],
      description: 'Соцмережі для продукту',
      initialValue: [
        {
          href: 'https://www.youtube.com/@Viktory.kinesio',
          type: 'Youtube',
        },
      ],
    },
  ],
};
