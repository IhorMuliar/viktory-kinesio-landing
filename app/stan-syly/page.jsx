import { Inter } from 'next/font/google';
import Link from 'next/link';

import ArrowDownIcon from './_components/arrow-down-icon';
import InstagramIcon from './_components/instagram-icon';
import Slider from './_components/slider';
import TelegramIcon from './_components/telegram-icon';
import './reset.css';
import styles from './vibrations.module.css';

export const metadata = {
  title: {
    absolute: 'Viktory Kinesio - Стан сили',
  },
  description: 'Майстер-клас, що допоможе підняти рівень енергії та знайти внутрішню опору',
  alternates: {
    canonical: 'https://viktory-kinesio.com/stan-syly',
  },
};

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-inter',
});

const EmotionBalance = () => {
  return (
    <>
      <header className={`${styles.header} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.header_wrapper}>
            <Link href="#hero" className={styles.header_logo}>
              Viktory Kinesio
            </Link>
            <Link href="#course-plan" className={styles.header_link}>
              Що ти отримаєш
            </Link>
            <Link href="#order" className={styles.header_link}>
              Купити курс
            </Link>
          </div>
        </div>
      </header>
      <section className={`${styles.hero} ${inter.className}`} id="hero">
        <div className={`${styles.hero_container} ${styles.container}`}>
          <div className={styles.hero_intro}>
            {/*<p className={styles.hero_date}>02.12</p>*/}
            {/*<p className={styles.hero_date_description}>| початок курсу |</p>*/}
            <h1 className={styles.hero_title}>Стан сили</h1>
          </div>
          <p className={styles.hero_price}>
            Лише <b>999 грн</b> замість 2500 грн
          </p>
          <p className={styles.hero_price}>Доступ на 3 місяці</p>
          <div className={styles.hero_image}>
            <div className={styles.hero_image_text}>
              Майстер-клас, що допоможе підняти рівень енергії та знайти внутрішню опору
            </div>
          </div>
          <div className={styles.hero_action}>
            <p className={styles.hero_action_text}>Стартуємо вже завтра!</p>
            <p className={styles.hero_action_text}>
              <Link href="https://secure.wayforpay.com/payment/vibrations" target="_blank">
                👉 Оплати зараз
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.course_target} ${inter.className}`}>
        <div className={`${styles.course_target_container} ${styles.container}`}>
          <h2 className={styles.course_target_title}>
            <span>Окей! Для кого</span> цей{' '}
            <Link href="https://secure.wayforpay.com/payment/vibrations" target="_blank">
              👉 майстер-клас
            </Link>{' '}
            підійде?
          </h2>
          <div className={styles.course_target_image}>
            <p className={styles.course_target_image_subtext}>
              <span>Цей майстер-клас</span> для тих, хто:
            </p>
          </div>
          <ul className={styles.course_target_wrapper}>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Для тих, хто втомився бути жертвою обставин;
              </h3>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Для тих, хто відчуває застій або внутрішнє спустошення;
              </h3>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Для тих, хто шукає коротку і дієву практику, а не сотні сторінок
                теорії,
              </h3>
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.course_plan} ${inter.className}`} id="course-plan">
        <h2 className={`${styles.course_plan_container} ${styles.container}`}>
          <span>Що ти</span> отримаєш?
        </h2>
        <ul className={styles.course_plan_wrapper}>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:01</span>
            <p className={styles.course_plan_item_text}>
              PDF-гайд «Карта рівнів» — розгорнуті описи станів, сигнали тіла та емоцій.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:02</span>
            <p className={styles.course_plan_item_text}>
              Алгоритм переходів — що робити, щоб піднятись вище.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:03</span>
            <p className={styles.course_plan_item_text}>
              Коучингові запитання — допоможуть знайти особисті «застряглі місця».
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:04</span>
            <p className={styles.course_plan_item_text}>
              Міні-щоденник для відслідковування прогресу (PDF) — відмічай свій рівень, емоції та
              тілесні відчуття.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:05</span>
            <p className={styles.course_plan_item_text}>
              Таблиця-підказка «Підйомні практики» — швидкі інструменти, які працюють у
              повсякденному житті.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:06</span>
            <p className={styles.course_plan_item_text}>
              Додаткові матеріали 2.0 — нові метафори, приклади з життя, зв’язок вібрацій зі шкірою,
              тілом та здоров’ям.
            </p>
          </li>
          <p className={styles.course_plan_outro}>
            🎁 Бонус для перших 5 учасників — 30-хвилинний зідзвон зі мною для відпрацювання
            техніки.
          </p>
        </ul>
      </section>
      <secion className={`${styles.about_me} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.about_me_image}>
            <h2 className={styles.about_me_title}>Привіт! Я Вікторія</h2>
          </div>
          <div className={styles.about_me_wrapper}>
            <ul>
              <li className={styles.about_me_list_item}>
                <span>::</span>Професійний кінезіолог із багаторічним досвідом, маю більше 2000
                успішних кейсів з клієнтами;
              </li>
              <li className={styles.about_me_list_item}>
                <span>::</span>Маю червоний диплом фізичного терапевта;
              </li>
              <li className={styles.about_me_list_item}>
                <span>::</span>Закінчила безліч курсів повʼязаних з енергетичною кінезіологією,
                остеопітєю, психологією.
              </li>
            </ul>
            <p className={styles.about_me_description}>
              <span></span>Я знаю, як важливо мати ефективний метод, який працює. Ця техніка – твоя
              підтримка в будь-якій ситуації.
            </p>
          </div>
        </div>
      </secion>
      <secion className={`${inter.className}`}>
        <div className={`${styles.reviews_container} ${styles.container}`}>
          <h2 className={styles.reviews_title}>
            <span>Подивись, що говорять </span>про навчання
          </h2>
          <Slider />
        </div>
      </secion>
      <section className={`${styles.how_it_works} ${inter.className}`}>
        <div className={`${styles.container}`}>
          <h2 className={styles.how_it_works_title}>
            <span>Як це</span> <span>працює?</span>
          </h2>
          <p className={styles.how_it_works_description}>Техніка роботи з вібраціями допомагає:</p>
          <ul>
            <li>
              <span className={styles.index}>::</span>Виявити рівень своєї енергії за допомогою
              тесту, який ти отримаєш у подарунок.
            </li>
            <li>
              <span className={styles.index}>::</span>Зрозуміти, на якому рівні ти застрягла, і
              отримати підказку для змін.
            </li>
            <li>
              <span className={styles.index}>::</span>Підняти частоту своїх вібрацій, що позитивно
              вплине на події, стосунки та результати.
            </li>
          </ul>
          <p>Тобі не потрібні додаткові інструменти – лише бажання працювати над собою.</p>
        </div>
      </section>
      <section
        className={`${styles.how_it_works} ${styles.how_it_works_no_padding} ${inter.className}`}
      >
        <div className={`${styles.container}`}>
          <h2 className={styles.how_it_works_title}>
            <span className={styles.blue}>Як проходитиме</span>
            <span className={styles.blue}>майстер-клас?</span>
          </h2>
          <ul>
            <li>
              <span className={styles.index}>::</span> Онлайн-доступ (відео + PDF).
            </li>
            <li>
              <span className={styles.index}>::</span>Тривалість: 1,5 години
            </li>
            <li>
              <span className={styles.index}>::</span> Доступ: 3 місяці, щоб точно пройти й
              застосувати.
            </li>
          </ul>
          <p className={styles.how_it_works_outro}>
            Всі матеріали легко використовувати навіть новачкам.
          </p>
        </div>
      </section>
      <section className={`${styles.offer} ${inter.className}`}>
        <div className={`${styles.offer_container} ${styles.container}`}>
          <h2 className={`${styles.offer_title}`}>
            <span>Що ти</span> отримаєш після курсу?
          </h2>
          <div className={styles.offer_icon}>
            <ArrowDownIcon />
          </div>
          <div className={`${styles.offer_wrapper}`}>
            <div className={`${styles.offer_item}`}>
              :: Розуміння <br />
              чому життя і стосунки виглядають саме так;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Уміння <br />
              працювати з енергією та підвищувати рівень вібрацій;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Результати <br />у справах, що довго застоювалися;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Відчуття <br />
              гармонії, енергії та натхнення.
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.order} ${inter.className}`} id="order">
        <div className={`${styles.order_container} ${styles.container}`}>
          <Link
            href="https://secure.wayforpay.com/payment/vibrations"
            className={styles.order_button}
            target="_blank"
          >
            <h2 className={styles.title}>Зроби перший крок до змін</h2>
            <p className={styles.subtext}>
              Запишись на майстер-клас всього за <br />
              <b>999 грн</b> <br /> замість 2500 грн! <br />
              Кількість місць обмежена!
            </p>
            <p>Доступ на 3 місяці</p>
            <p className={styles.action}>:: Приєднатися до курсу ::</p>
          </Link>
        </div>
      </section>
      <section className={`${styles.faq} ${inter.className}`} id="faq">
        <div className={styles.running_lines_wrapper}>
          <div className={styles.running_line}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={`${styles.running_line} ${styles.normal}`}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={styles.running_line}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={`${styles.running_line} ${styles.normal}`}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={styles.running_line}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={`${styles.running_line} ${styles.normal}`}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
          <div className={styles.running_line}>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_first}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
            <div
              className={`${styles.running_line_animation_wrapper} ${styles.running_line_animation_wrapper_second}`}
            >
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
              <span className={styles.running_line_text}>Viktory Kinesio&nbsp; </span>
            </div>
          </div>
        </div>
        <div className={styles.questions}>
          <h2 className={styles.questions_title}>Відповіді на сумніви</h2>
          <ul className={styles.questions_list}>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q1" className={styles.questions_toggle} />
              <label htmlFor="q1" className={styles.questions_question_text}>
                <span>:: А якщо у мене немає сил проходити?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Техніка проста й займає 10–15 хвилин. Це як подихати — і вже легше.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q2" className={styles.questions_toggle} />
              <label htmlFor="q2" className={styles.questions_question_text}>
                <span>:: Я вже пробувала інші методи. Чим це відрізняється?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Тут немає «розмов про життя». Є алгоритм роботи з енергією. Це інструмент, який
                  працює з твоїм станом, а не з ідеями «у голові». «У мене складний період, може, не
                  час?
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q3" className={styles.questions_toggle} />
              <label htmlFor="q3" className={styles.questions_question_text}>
                <span>:: Що мені знадобиться для роботи?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Все, що потрібно, – це доступ до інтернету, роздруковані або завантажені матеріали
                  курсу (вони будуть надані), і твоє бажання працювати над собою. Додаткових
                  інструментів не потрібно.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q4" className={styles.questions_toggle} />
              <label htmlFor="q4" className={styles.questions_question_text}>
                <span>:: У мене складний період, може, не час?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Якраз час. Саме тоді, коли складно, найбільше потрібна внутрішня опора.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q5" className={styles.questions_toggle} />
              <label htmlFor="q5" className={styles.questions_question_text}>
                <span>:: А якщо я не зрозумію?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  У тебе буде відео + PDF. А перші 5 учасників отримають мою персональну підтримку
                  на зідзвоні.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.feedback} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.feedback_wrapper}>
            <p>Питаннячка пиши в</p>
            <Link href="https://t.me/ViktoryKinesio" target="_blank">
              <TelegramIcon />
            </Link>
            <p>або</p>
            <Link href="https://www.instagram.com/viktory.kinesio" target="_blank">
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </section>
      <Link className={styles.cta} href="https://secure.wayforpay.com/payment/vibrations">
        Отримати доступ до курсу зі знижкою!
      </Link>
      <footer className={`${styles.footer} ${inter.className}`}>
        <div className={styles.footer_container}>
          <div className={styles.footer_wrapper}>
            <Link href="#course-plan" className={styles.footer_link}>
              Що ти отримаєш
            </Link>
            <Link href="#faq" className={styles.footer_link}>
              FAQ
            </Link>
            <Link
              href="https://www.instagram.com/viktory.kinesio"
              className={styles.footer_link}
              target="_blank"
            >
              Instagram
            </Link>
            <Link href="https://t.me/ViktoryKinesio" className={styles.footer_link} target="_blank">
              Telegram
            </Link>
            <Link
              href="https://www.youtube.com/@Viktory.kinesio"
              className={styles.footer_link}
              target="_blank"
            >
              Youtube
            </Link>
          </div>
          <div className={styles.footer_info_links}>
            <Link href="#" className={styles.footer_info_link}>
              Умови повернення грошових коштів <br /> Правила і умови
            </Link>
            <Link href="#" className={styles.footer_info_link}>
              Публічна оферта
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default EmotionBalance;
