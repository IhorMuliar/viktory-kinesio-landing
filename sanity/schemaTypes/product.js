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
      name: 'category',
      title: 'Категорія',
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
    // {
    //   name: 'socialLinks',
    //   title: 'Соцмережі',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'href',
    //           title: 'Посилання',
    //           type: 'url',
    //           description: 'URL посилання на соціальну мережу',
    //           validation: (Rule) => Rule.required(),
    //           initialValue: 'https://www.facebook.com/',
    //         },
    //         {
    //           name: 'icon',
    //           title: 'Іконка',
    //           type: 'string',
    //           description: 'Ідентифікатор іконки',
    //           initialValue: 'faFacebookF',
    //           validation: (Rule) => Rule.required(),
    //         },
    //       ],
    //     },
    //   ],
    //   description: 'Соцмережі для продукту',
    //   initialValue: [
    //     { href: 'https://www.facebook.com/GZJudoSchool/', icon: 'faFacebookF' },
    //     {
    //       href: 'https://www.instagram.com/zantaraia_school',
    //       icon: 'faInstagram',
    //     },
    //     {
    //       href: 'https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1',
    //       icon: 'faTiktok',
    //     },
    //   ],
    // },
  ],
};
