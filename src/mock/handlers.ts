import { http, HttpResponse } from 'msw';

const URL = process.env.BURGER_API_URL;

export const handlersSuccess = [
  http.get(`${URL}/ingredients`, () =>
    HttpResponse.json({
      success: true,
      data: [
        {
          _id: '643d69a5c3f7b9001cfa093c',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0941',
          name: 'Биокотлета из марсианской Магнолии',
          type: 'main',
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: 'https://code.s3.yandex.net/react/code/meat-01.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-01-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa093e',
          name: 'Филе Люминесцентного тетраодонтимформа',
          type: 'main',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/meat-03.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-03-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0942',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0943',
          name: 'Соус фирменный Space Sauce',
          type: 'sauce',
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-04-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa093f',
          name: 'Мясо бессмертных моллюсков Protostomia',
          type: 'main',
          proteins: 433,
          fat: 244,
          carbohydrates: 33,
          calories: 420,
          price: 1337,
          image: 'https://code.s3.yandex.net/react/code/meat-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-02-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0940',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa093d',
          name: 'Флюоресцентная булка R2-D3',
          type: 'bun',
          proteins: 44,
          fat: 26,
          carbohydrates: 85,
          calories: 643,
          price: 988,
          image: 'https://code.s3.yandex.net/react/code/bun-01.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0944',
          name: 'Соус традиционный галактический',
          type: 'sauce',
          proteins: 42,
          fat: 24,
          carbohydrates: 42,
          calories: 99,
          price: 15,
          image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-03-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0945',
          name: 'Соус с шипами Антарианского плоскоходца',
          type: 'sauce',
          proteins: 101,
          fat: 99,
          carbohydrates: 100,
          calories: 100,
          price: 88,
          image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-01-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0946',
          name: 'Хрустящие минеральные кольца',
          type: 'main',
          proteins: 808,
          fat: 689,
          carbohydrates: 609,
          calories: 986,
          price: 300,
          image: 'https://code.s3.yandex.net/react/code/mineral_rings.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/mineral_rings-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0947',
          name: 'Плоды Фалленианского дерева',
          type: 'main',
          proteins: 20,
          fat: 5,
          carbohydrates: 55,
          calories: 77,
          price: 874,
          image: 'https://code.s3.yandex.net/react/code/sp_1.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/sp_1-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0948',
          name: 'Кристаллы марсианских альфа-сахаридов',
          type: 'main',
          proteins: 234,
          fat: 432,
          carbohydrates: 111,
          calories: 189,
          price: 762,
          image: 'https://code.s3.yandex.net/react/code/core.png',
          image_mobile: 'https://code.s3.yandex.net/react/code/core-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/core-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa0949',
          name: 'Мини-салат Экзо-Плантаго',
          type: 'main',
          proteins: 1,
          fat: 2,
          carbohydrates: 3,
          calories: 6,
          price: 4400,
          image: 'https://code.s3.yandex.net/react/code/salad.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/salad-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/salad-large.png',
          __v: 0
        },
        {
          _id: '643d69a5c3f7b9001cfa094a',
          name: 'Сыр с астероидной плесенью',
          type: 'main',
          proteins: 84,
          fat: 48,
          carbohydrates: 420,
          calories: 3377,
          price: 4142,
          image: 'https://code.s3.yandex.net/react/code/cheese.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/cheese-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
          __v: 0
        }
      ]
    })
  ),
  http.get(`${URL}/orders/all`, () =>
    HttpResponse.json({
      success: true,
      orders: [
        {
          _id: '6869629b5a54df001b6dbfaa',
          ingredients: [
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный био-марсианский бургер',
          createdAt: '2025-07-05T17:36:27.376Z',
          updatedAt: '2025-07-05T17:36:28.245Z',
          number: 83651
        },
        {
          _id: '686960bd5a54df001b6dbf9e',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2025-07-05T17:28:29.953Z',
          updatedAt: '2025-07-05T17:28:30.738Z',
          number: 83650
        },
        {
          _id: '6869585a5a54df001b6dbf92',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0943'
          ],
          status: 'done',
          name: 'Флюоресцентный space фалленианский био-марсианский люминесцентный бургер',
          createdAt: '2025-07-05T16:52:42.980Z',
          updatedAt: '2025-07-05T16:52:43.840Z',
          number: 83649
        },
        {
          _id: '68693be45a54df001b6dbf75',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093e'
          ],
          status: 'done',
          name: 'Краторный люминесцентный бургер',
          createdAt: '2025-07-05T14:51:16.179Z',
          updatedAt: '2025-07-05T14:51:16.972Z',
          number: 83648
        },
        {
          _id: '68693bca5a54df001b6dbf74',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093e'
          ],
          status: 'done',
          name: 'Краторный люминесцентный бургер',
          createdAt: '2025-07-05T14:50:50.022Z',
          updatedAt: '2025-07-05T14:50:50.761Z',
          number: 83647
        },
        {
          _id: '68692cca5a54df001b6dbf6a',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный spicy люминесцентный био-марсианский бургер',
          createdAt: '2025-07-05T13:46:50.862Z',
          updatedAt: '2025-07-05T13:46:51.576Z',
          number: 83646
        },
        {
          _id: '686929f95a54df001b6dbf67',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2025-07-05T13:34:49.135Z',
          updatedAt: '2025-07-05T13:34:49.949Z',
          number: 83645
        },
        {
          _id: '68691c295a54df001b6dbf59',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный фалленианский бургер',
          createdAt: '2025-07-05T12:35:53.971Z',
          updatedAt: '2025-07-05T12:35:54.743Z',
          number: 83644
        },
        {
          _id: '6869003f5a54df001b6dbf35',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa093f'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бессмертный био-марсианский метеоритный бургер',
          createdAt: '2025-07-05T10:36:47.988Z',
          updatedAt: '2025-07-05T10:36:48.752Z',
          number: 83643
        },
        {
          _id: '6868fed25a54df001b6dbf2f',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
          status: 'done',
          name: 'Флюоресцентный бургер',
          createdAt: '2025-07-05T10:30:42.593Z',
          updatedAt: '2025-07-05T10:30:43.319Z',
          number: 83642
        },
        {
          _id: '6868fe9e5a54df001b6dbf2e',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
          status: 'done',
          name: 'Флюоресцентный бургер',
          createdAt: '2025-07-05T10:29:50.666Z',
          updatedAt: '2025-07-05T10:29:51.378Z',
          number: 83641
        },
        {
          _id: '6868f3255a54df001b6dbf1f',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
          status: 'done',
          name: 'Флюоресцентный бургер',
          createdAt: '2025-07-05T09:40:53.032Z',
          updatedAt: '2025-07-05T09:40:53.701Z',
          number: 83640
        },
        {
          _id: '6868f21d5a54df001b6dbf1b',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:36:29.731Z',
          updatedAt: '2025-07-05T09:36:30.475Z',
          number: 83639
        },
        {
          _id: '6868f1855a54df001b6dbf19',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093d'],
          status: 'done',
          name: 'Флюоресцентный бургер',
          createdAt: '2025-07-05T09:33:57.738Z',
          updatedAt: '2025-07-05T09:33:58.694Z',
          number: 83638
        },
        {
          _id: '6868edf85a54df001b6dbf10',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:18:48.963Z',
          updatedAt: '2025-07-05T09:18:49.823Z',
          number: 83637
        },
        {
          _id: '6868edf15a54df001b6dbf0e',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:18:41.447Z',
          updatedAt: '2025-07-05T09:18:42.330Z',
          number: 83636
        },
        {
          _id: '6868edb65a54df001b6dbf0c',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:17:42.109Z',
          updatedAt: '2025-07-05T09:17:42.860Z',
          number: 83635
        },
        {
          _id: '6868ed7c5a54df001b6dbf0a',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:16:44.555Z',
          updatedAt: '2025-07-05T09:16:45.344Z',
          number: 83634
        },
        {
          _id: '6868ec755a54df001b6dbf07',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:12:21.299Z',
          updatedAt: '2025-07-05T09:12:22.026Z',
          number: 83633
        },
        {
          _id: '6868ec655a54df001b6dbf05',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:12:05.764Z',
          updatedAt: '2025-07-05T09:12:06.478Z',
          number: 83632
        },
        {
          _id: '6868ec405a54df001b6dbf03',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:11:28.669Z',
          updatedAt: '2025-07-05T09:11:29.527Z',
          number: 83631
        },
        {
          _id: '6868ebfe5a54df001b6dbf01',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:10:22.170Z',
          updatedAt: '2025-07-05T09:10:22.939Z',
          number: 83630
        },
        {
          _id: '6868ebec5a54df001b6dbeff',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:10:04.434Z',
          updatedAt: '2025-07-05T09:10:05.195Z',
          number: 83629
        },
        {
          _id: '6868eb055a54df001b6dbefa',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:06:13.449Z',
          updatedAt: '2025-07-05T09:06:14.198Z',
          number: 83628
        },
        {
          _id: '6868ead15a54df001b6dbef7',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-05T09:05:21.929Z',
          updatedAt: '2025-07-05T09:05:22.769Z',
          number: 83627
        },
        {
          _id: '6868e56a5a54df001b6dbedc',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa094a',
            '643d69a5c3f7b9001cfa0946',
            '643d69a5c3f7b9001cfa0948'
          ],
          status: 'done',
          name: 'Астероидный флюоресцентный минеральный альфа-сахаридный бургер',
          createdAt: '2025-07-05T08:42:18.987Z',
          updatedAt: '2025-07-05T08:42:19.793Z',
          number: 83626
        },
        {
          _id: '6868d0e75a54df001b6dbeb3',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный био-марсианский бургер',
          createdAt: '2025-07-05T07:14:47.453Z',
          updatedAt: '2025-07-05T07:14:48.339Z',
          number: 83625
        },
        {
          _id: '6868cf945a54df001b6dbeae',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941'
          ],
          status: 'done',
          name: 'Краторный био-марсианский бургер',
          createdAt: '2025-07-05T07:09:08.521Z',
          updatedAt: '2025-07-05T07:09:09.276Z',
          number: 83624
        },
        {
          _id: '6868a6fa5a54df001b6dbe83',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2025-07-05T04:15:54.434Z',
          updatedAt: '2025-07-05T04:15:55.249Z',
          number: 83623
        },
        {
          _id: '6868705c5a54df001b6dbe66',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный био-марсианский бургер',
          createdAt: '2025-07-05T00:22:52.828Z',
          updatedAt: '2025-07-05T00:22:53.576Z',
          number: 83622
        },
        {
          _id: '686861445a54df001b6dbe43',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Экзо-плантаго space флюоресцентный бургер',
          createdAt: '2025-07-04T23:18:28.983Z',
          updatedAt: '2025-07-04T23:18:29.843Z',
          number: 83621
        },
        {
          _id: '686860535a54df001b6dbe3f',
          ingredients: ['643d69a5c3f7b9001cfa0942', '643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-04T23:14:27.031Z',
          updatedAt: '2025-07-04T23:14:27.760Z',
          number: 83620
        },
        {
          _id: '68685f4c5a54df001b6dbe3b',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Экзо-плантаго флюоресцентный люминесцентный бургер',
          createdAt: '2025-07-04T23:10:04.169Z',
          updatedAt: '2025-07-04T23:10:04.976Z',
          number: 83619
        },
        {
          _id: '68685ca05a54df001b6dbe38',
          ingredients: ['643d69a5c3f7b9001cfa0942', '643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный spicy бургер',
          createdAt: '2025-07-04T22:58:40.909Z',
          updatedAt: '2025-07-04T22:58:41.764Z',
          number: 83618
        },
        {
          _id: '68685b8b5a54df001b6dbe31',
          ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2025-07-04T22:54:03.528Z',
          updatedAt: '2025-07-04T22:54:04.351Z',
          number: 83617
        },
        {
          _id: '686858095a54df001b6dbe25',
          ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2025-07-04T22:39:05.194Z',
          updatedAt: '2025-07-04T22:39:05.942Z',
          number: 83616
        },
        {
          _id: '686857e15a54df001b6dbe24',
          ingredients: ['643d69a5c3f7b9001cfa0943', '643d69a5c3f7b9001cfa093c'],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2025-07-04T22:38:25.889Z',
          updatedAt: '2025-07-04T22:38:26.656Z',
          number: 83615
        },
        {
          _id: '686850e15a54df001b6dbe18',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Экзо-плантаго space флюоресцентный бургер',
          createdAt: '2025-07-04T22:08:33.671Z',
          updatedAt: '2025-07-04T22:08:34.469Z',
          number: 83614
        },
        {
          _id: '686849c95a54df001b6dbe09',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2025-07-04T21:38:17.414Z',
          updatedAt: '2025-07-04T21:38:18.236Z',
          number: 83613
        },
        {
          _id: '686845f15a54df001b6dbe04',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Экзо-плантаго флюоресцентный метеоритный бургер',
          createdAt: '2025-07-04T21:21:53.716Z',
          updatedAt: '2025-07-04T21:21:54.478Z',
          number: 83612
        },
        {
          _id: '686840395a54df001b6dbdfc',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa094a',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Астероидный space флюоресцентный бургер',
          createdAt: '2025-07-04T20:57:29.114Z',
          updatedAt: '2025-07-04T20:57:29.801Z',
          number: 83611
        },
        {
          _id: '68683f6a5a54df001b6dbdf7',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa094a',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Астероидный space флюоресцентный бургер',
          createdAt: '2025-07-04T20:54:02.451Z',
          updatedAt: '2025-07-04T20:54:03.242Z',
          number: 83610
        },
        {
          _id: '68683eba5a54df001b6dbdf5',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Экзо-плантаго флюоресцентный антарианский бургер',
          createdAt: '2025-07-04T20:51:06.138Z',
          updatedAt: '2025-07-04T20:51:07.029Z',
          number: 83609
        },
        {
          _id: '68683ca45a54df001b6dbded',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный метеоритный бургер',
          createdAt: '2025-07-04T20:42:12.306Z',
          updatedAt: '2025-07-04T20:42:13.056Z',
          number: 83608
        },
        {
          _id: '68681e725a54df001b6dbdd2',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный био-марсианский бургер',
          createdAt: '2025-07-04T18:33:22.124Z',
          updatedAt: '2025-07-04T18:33:23.827Z',
          number: 83607
        },
        {
          _id: '68681da05a54df001b6dbdc7',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093f',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa0946',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0948',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa094a',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Антарианский space астероидный фалленианский краторный люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер',
          createdAt: '2025-07-04T18:29:52.327Z',
          updatedAt: '2025-07-04T18:29:53.151Z',
          number: 83606
        },
        {
          _id: '686815275a54df001b6dbda8',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный spicy люминесцентный бургер',
          createdAt: '2025-07-04T17:53:43.212Z',
          updatedAt: '2025-07-04T17:53:44.561Z',
          number: 83605
        },
        {
          _id: '6868146e5a54df001b6dbda5',
          ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Краторный люминесцентный бургер',
          createdAt: '2025-07-04T17:50:38.881Z',
          updatedAt: '2025-07-04T17:50:39.595Z',
          number: 83604
        },
        {
          _id: '6868133a5a54df001b6dbda3',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0949',
            '643d69a5c3f7b9001cfa0948',
            '643d69a5c3f7b9001cfa094a',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa0946',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa093f',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный антарианский space астероидный фалленианский люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер',
          createdAt: '2025-07-04T17:45:30.632Z',
          updatedAt: '2025-07-04T17:45:31.382Z',
          number: 83603
        },
        {
          _id: '686812f95a54df001b6dbda1',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0947',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный фалленианский бургер',
          createdAt: '2025-07-04T17:44:25.739Z',
          updatedAt: '2025-07-04T17:44:26.549Z',
          number: 83602
        }
      ],
      total: 83277,
      totalToday: 51
    })
  ),
  http.get(`${URL}/orders`, () =>
    HttpResponse.json({
      success: true,
      orders: [
        {
          _id: '684ebbc9c2f30c001cb2ce8e',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa0946'
          ],
          status: 'done',
          name: 'Флюоресцентный минеральный био-марсианский метеоритный бургер',
          createdAt: '2025-06-15T12:25:45.794Z',
          updatedAt: '2025-06-15T12:25:46.534Z',
          number: 81517
        },
        {
          _id: '684fe7f5c2f30c001cb2d1c6',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa093f'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бессмертный био-марсианский метеоритный бургер',
          createdAt: '2025-06-16T09:46:29.968Z',
          updatedAt: '2025-06-16T09:46:30.728Z',
          number: 81644
        },
        {
          _id: '686804505a54df001b6dbd6e',
          ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa0941'],
          status: 'done',
          name: 'Краторный био-марсианский бургер',
          createdAt: '2025-07-04T16:41:52.177Z',
          updatedAt: '2025-07-04T16:41:52.937Z',
          number: 83590
        },
        {
          _id: '686812ef5a54df001b6dbda0',
          ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Краторный люминесцентный бургер',
          createdAt: '2025-07-04T17:44:15.645Z',
          updatedAt: '2025-07-04T17:44:16.524Z',
          number: 83601
        },
        {
          _id: '6868146e5a54df001b6dbda5',
          ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Краторный люминесцентный бургер',
          createdAt: '2025-07-04T17:50:38.881Z',
          updatedAt: '2025-07-04T17:50:39.595Z',
          number: 83604
        },
        {
          _id: '686849c95a54df001b6dbe09',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2025-07-04T21:38:17.414Z',
          updatedAt: '2025-07-04T21:38:18.236Z',
          number: 83613
        }
      ],
      total: 83281,
      totalToday: 50
    })
  ),
  http.get(`${URL}/orders/83613`, () =>
    HttpResponse.json({
      success: true,
      orders: [
        {
          _id: '686849c95a54df001b6dbe09',
          ingredients: ['643d69a5c3f7b9001cfa093d', '643d69a5c3f7b9001cfa093e'],
          owner: '684eb949c2f30c001cb2ce7d',
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2025-07-04T21:38:17.414Z',
          updatedAt: '2025-07-04T21:38:18.236Z',
          number: 83613,
          __v: 0
        }
      ]
    })
  ),
  http.post(`${URL}/orders`, () =>
    HttpResponse.json({
      success: true,
      name: 'Флюоресцентный люминесцентный бургер',
      order: {
        ingredients: [
          {
            _id: '643d69a5c3f7b9001cfa093d',
            name: 'Флюоресцентная булка R2-D3',
            type: 'bun',
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: 'https://code.s3.yandex.net/react/code/bun-01.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/bun-01-large.png',
            __v: 0
          },
          {
            _id: '643d69a5c3f7b9001cfa093e',
            name: 'Филе Люминесцентного тетраодонтимформа',
            type: 'main',
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: 'https://code.s3.yandex.net/react/code/meat-03.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/meat-03-large.png',
            __v: 0
          }
        ],
        _id: '686a969c5a54df001b6dc278',
        owner: {
          name: 'Евгения2',
          email: '123@gmail.comp',
          createdAt: '2025-06-15T12:15:05.105Z',
          updatedAt: '2025-06-15T12:25:24.847Z'
        },
        status: 'done',
        name: 'Флюоресцентный люминесцентный бургер',
        createdAt: '2025-07-06T15:30:36.262Z',
        updatedAt: '2025-07-06T15:30:37.131Z',
        number: 83711,
        price: 1976
      }
    })
  ),
  http.get(`${URL}/auth/user`, () =>
    HttpResponse.json({
      success: true,
      user: {
        email: '123@gmail.comp',
        name: 'Евгения2'
      }
    })
  ),
  http.post(`${URL}/auth/logout`, () =>
    HttpResponse.json({
      success: true,
      message: 'Successful logout'
    })
  )
];

export const handlersFailures = [
  http.get(`${URL}/ingredients`, () =>
    HttpResponse.json('ошибка', {
      status: 404
    })
  ),
  http.post(`${URL}/orders`, () =>
    HttpResponse.json('ошибка', {
      status: 404
    })
  ),
  http.get(`${URL}/auth/user`, () =>
    HttpResponse.json('ошибка', {
      status: 401
    })
  )
];
