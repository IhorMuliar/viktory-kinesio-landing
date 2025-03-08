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
    absolute: 'Viktory Kinesio - Vibrations',
  },
  description:
    'Як підняти рівень енергії та знайти баланс - Майстер-клас, який змінить твоє ставлення до себе та життя!',
  alternates: {
    canonical: 'https://viktory-kinesio.com/vibrations',
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
            <h1 className={styles.hero_title}>Як підняти рівень енергії та знайти баланс</h1>
          </div>
          <p className={styles.hero_price}>
            Лише <b>347 грн</b> замість 1290 грн
          </p>
          <div className={styles.hero_image}>
            <div className={styles.hero_image_text}>
              Майстер-клас, який змінить твоє ставлення до себе та життя!
            </div>
          </div>
          <div className={styles.hero_action}>
            <p className={styles.hero_action_text}>Стартуємо вже завтра!</p>
            <p className={styles.hero_action_text}>
              👉 [
              <Link href="https://secure.wayforpay.com/payment/vibrations" target="_blank">
                Оплати зараз
              </Link>
              ] та отримай у подарунок:
            </p>
            <p className={styles.hero_action_text}>Відео техніку «Баланс емоцій»</p>
          </div>
        </div>
      </section>
      <section className={`${styles.course_target} ${inter.className}`}>
        <div className={`${styles.course_target_container} ${styles.container}`}>
          <h2 className={styles.course_target_title}>
            <span>Окей! Для кого</span> цей <Link href="#">[майстер-клас]</Link> підійде?
          </h2>
          <div className={styles.course_target_image}>
            <p className={styles.course_target_image_subtext}>
              <span>Цей майстер-клас</span> для тих, хто:
            </p>
          </div>
          <ul className={styles.course_target_wrapper}>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Почувається без сил, енергії або на дні;
              </h3>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Відчуває, що життя проходить повз, а мрії здійснюються не у тебе;
              </h3>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Бореться з нерозумінням у стосунках,
              </h3>
              <p>чи взагалі їх відсутністю;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Шукає розвиток у застояних справах,
              </h3>
              <p>або хоче реалізувати важливу ідею;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Живе у складних умовах
              </h3>
              <p>i прагне знайти внутрішню опору.</p>
            </li>
            <p className={styles.course_target_description}>
              Цей майстер-клас – твій шанс змінити ситуацію та відчути гармонію!
            </p>
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
              Простий, але надзвичайно дієвий інструмент для роботи з енергією та вібраціями;
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:02</span>
            <p className={styles.course_plan_item_text}>
              Техніку для:
              <br /> <span></span> Звільнення від застою емоцій.
              <br />
              <span></span>Підняття рівня енергії. <br />
              <span></span>Виведення себе на частоту, де твої мрії здійснюються, а життя
              налагоджується.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:03</span>
            <p className={styles.course_plan_item_text}>
              Алгоритм роботи з собою та своїми станами, доступний у будь-який час;
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:04</span>
            <p className={styles.course_plan_item_text}>
              Інформацію про зв'язок між подіями у житті та рівнем твоїх вібрацій.
            </p>
          </li>
          <p className={styles.course_plan_outro}>Це твоя опора. Твій ключ до балансу.</p>
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
              <span className={styles.index}>::</span>Онлайн формат – займайся вдома в комфортній
              атмосфері.
            </li>
            <li>
              <span className={styles.index}>::</span>Відео запис матеріалу буде доступний тобі в
              будь-який час.
            </li>
            <li>
              <span className={styles.index}>::</span>Додаткові файли:
              <span className={styles.index}></span>
              <br /> Карта свідомості
              <br />
              Алгоритм роботи з енергією
              <br />
              Коригуючі запитання для змін
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
              <b>347 грн</b> <br /> замість 1290 грн! <br />
              Придбай зараз і отримай у подарунок відео техніку «Баланс емоцій»!
              <b>Кількість місць обмежена!</b>
            </p>
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
          <h2 className={styles.questions_title}>FAQ</h2>
          <ul className={styles.questions_list}>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q1" className={styles.questions_toggle} />
              <label htmlFor="q1" className={styles.questions_question_text}>
                <span>:: Чи потрібно мати попередній досвід для участі в майстер-класі?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Ні, цей майстер-клас створений для новачків і тих, хто ще не мав досвіду роботи з
                  подібними техніками. Я детально пояснюю всі кроки, тож тобі буде легко опанувати
                  метод.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q2" className={styles.questions_toggle} />
              <label htmlFor="q2" className={styles.questions_question_text}>
                <span>:: Що робити, якщо я не вірю в такі методики?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Це нормально бути скептичним. Спробуй техніку хоча б один раз і оцінюй результати
                  за своїми відчуттями та змінами в житті. Тут важлива не віра, а практичне
                  застосування.
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
                <span>:: Чи зможу я працювати з іншими людьми, використовуючи цю техніку?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Так, якщо ти освоїш м’язовий тест і принципи самотестування, ця техніка стане
                  потужним інструментом для допомоги іншим, якщо ти вже працюєш як практик.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q5" className={styles.questions_toggle} />
              <label htmlFor="q5" className={styles.questions_question_text}>
                <span>:: Як часто можна використовувати цю техніку?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Техніку можна застосовувати стільки разів, скільки буде потрібно, щоб досягти
                  бажаного результату в ситуації або проблемі. У деяких випадках це може бути кілька
                  разів на день.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q6" className={styles.questions_toggle} />
              <label htmlFor="q6" className={styles.questions_question_text}>
                <span>:: Як дізнатися, що техніка спрацювала?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Результати ти побачиш як у покращенні внутрішнього стану (оцінка за шкалою від 1
                  до 10), так і у позитивних змінах у реальному житті.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q7" className={styles.questions_toggle} />
              <label htmlFor="q7" className={styles.questions_question_text}>
                <span>:: Що робити, якщо я застряг на одному рівні енергії?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Це нормально. Працюй із коригуючими питаннями та чесно відповідай собі. Зміни
                  прийдуть, якщо ти будеш наполегливо дотримуватися алгоритму.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q8" className={styles.questions_toggle} />
              <label htmlFor="q8" className={styles.questions_question_text}>
                <span>:: Чи буде корисна ця техніка, якщо я терапевт?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Ти можеш використовувати цю техніку як додатковий інструмент в своїй роботі і
                  використовувати як і для себе та і для роботи з людьми.
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
      <Link className={styles.cta} href="#order">
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
