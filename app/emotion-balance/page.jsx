import { Inter } from 'next/font/google';
import Link from 'next/link';

import ArrowDownIcon from './_components/arrow-down-icon';
import InstagramIcon from './_components/instagram-icon';
import Slider from './_components/slider';
import TelegramIcon from './_components/telegram-icon';
import './reset.css';
import styles from './emotion-balance.module.css';

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
            <h1 className={styles.hero_title}>EMOTION BALANCE</h1>
          </div>
          <p className={styles.hero_description}>by Viktory Kinesio</p>
          <p className={styles.hero_price}>
            Всього <b>520 грн</b> замість 1290 грн
          </p>
          <div className={styles.hero_image}>
            <div className={styles.hero_image_text}>
              Майстер-клас, що змінить твоє ставлення до емоцій та подарує ключ до внутрішньої
              рівноваги
            </div>
          </div>
          <div className={styles.hero_action}>
            <p className={styles.hero_action_text}>Стартуємо вже</p>
            <p className={styles.hero_action_text}>
              завтра! [<Link href="#">Оплати зараз</Link>] та отримай у подарунок:
            </p>
            <p className={styles.hero_action_text}>Техніку миттєвого зняття напруги можеш</p>
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
                <span>::</span>Відчуває, як емоції накривають хвилею,
              </h3>
              <p>забираючи спокій та енергію;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Не може позбутися відчуттів із минулого,
              </h3>
              <p>що нагадують про себе знову й знову;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Шукає способи зняти напругу в тілі,
              </h3>
              <p>коли переживання стають нестерпними;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Хоче допомогти собі в критичний момент,
              </h3>
              <p>не вдаючись до складних практик;</p>
            </li>
            <li className={styles.course_target_item}>
              <h3>
                <span>::</span>Прагне познайомитися зі своєю підсвідомістю,
              </h3>
              <p>відкривши нові рівні саморозуміння.</p>
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
              Техніку роботи з магнітом, яка допоможе:
              <br /> <span></span> Очистити енергію від негативних переживань.
              <br />
              <span></span>Швидко зняти напругу та відновити гармонію. <br />
              <span></span>Допомогти своєму тілу, коли симптоми починають долати.
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:02</span>
            <p className={styles.course_plan_item_text}>
              Практичні навички для роботи тут і зараз, у будь-якій ситуації;
            </p>
          </li>
          <li className={styles.course_plan_item}>
            <span className={styles.course_plan_item_index}>:03</span>
            <p className={styles.course_plan_item_text}>Інструмент, який завжди буде під рукою.</p>
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
                <span>::</span>Фізичний терапевт, кінезіолог, остеопат, енергопрактик,
                психосоматолог;
              </li>
              <li className={styles.about_me_list_item}>
                <span>::</span>Розробила цей майстер-клас на основі перевірених технік та власної
                практики;
              </li>
              <li className={styles.about_me_list_item}>
                <span>::</span>Допомогла тисячі людям відчути свободу від емоційного тягаря.
              </li>
            </ul>
            <p className={styles.about_me_description}>
              <span></span>Я знаю, як важливо мати простий і ефективний інструмент для роботи з
              емоціями.
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
          <p className={styles.how_it_works_description}>
            Робота з магнітом – це поєднання фізичного контакту та емоційного звільнення.
          </p>
          <ul>
            <li>
              <span className={styles.index}>::</span>Магніт стимулює точки, пов’язані з
              енергетичними каналами.
            </li>
            <li>
              <span className={styles.index}>::</span>Процес очищує тіло від накопиченої емоційної
              напруги.
            </li>
            <li>
              <span className={styles.index}>::</span>Допомагає підсвідомості розслабитися й
              активувати природні механізми відновлення.
            </li>
          </ul>
          <p>Ця методика доступна для кожного – жодних складних технік чи спеціальних навичок.</p>
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
              <span className={styles.index}>::</span>Онлайн формат – ти можеш займатися вдома в
              комфортній обстановці
            </li>
            <li>
              <span className={styles.index}>::</span>Одразу після оплати отримаєш доступ до
              матеріалів та навчання.
            </li>
            <li>
              <span className={styles.index}>::</span>Усі матеріали доступні на твоєму телефоні,
              планшеті чи комп’ютері.
            </li>
          </ul>
          <video
            className={styles.video}
            src="/images/emotion-balance-video.mov"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
          ></video>
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
              :: Вміння <br />
              справлятися з емоційними хвилями та кризами;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Інструмент <br />
              для миттєвого заспокоєння та зняття напруги;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Глибше <br />
              знайомство з собою та своїм тілом;
            </div>
            <div className={`${styles.offer_item}`}>
              :: Відчуття <br />
              енергії, свободи й контролю над своїм станом.
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.order} ${inter.className}`} id="order">
        <div className={`${styles.order_container} ${styles.container}`}>
          <Link href="#" className={styles.order_button} target="_blank">
            <h2 className={styles.title}>Зроби перший крок до гармонії</h2>
            <p className={styles.subtext}>
              Запишись на майстер-клас всього за <b>520 грн</b> замість 1290 грн! <br />
              Зроби свій вибір зараз і отримай подарунок – техніку миттєвого зняття напруги!
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
                <span>
                  :: Чи можна використовувати магніт, якщо у мене немає досвіду роботи з подібними
                  техніками?
                </span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Так, методика настільки проста, що підійде навіть новачкам. На майстер-класі ви
                  отримаєте всі необхідні інструкції та навчитеся використовувати магніт, як ключ до
                  гармонізації своїх емоцій.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q2" className={styles.questions_toggle} />
              <label htmlFor="q2" className={styles.questions_question_text}>
                <span>
                  :: А якщо у мене немає спеціального магніту, чи можу я все одно пройти курс?
                </span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Для початку можна використовувати будь-який невеликий магніт, наприклад, від
                  холодильника. Однак ми рекомендуємо згодом придбати більш відповідний магніт для
                  роботи, який буде зручним і ефективним для ваших практик.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q3" className={styles.questions_toggle} />
              <label htmlFor="q3" className={styles.questions_question_text}>
                <span>
                  :: Чи підходить цей метод для роботи з сильними емоціями, як-от гнів або страх?
                </span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Так, техніка розроблена для роботи з будь-якими емоціями, незалежно від їх
                  інтенсивності. Головне — правильно виконувати алгоритм, який ви отримаєте на
                  майстер-класі, і бути чесним із собою під час процесу.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q4" className={styles.questions_toggle} />
              <label htmlFor="q4" className={styles.questions_question_text}>
                <span>:: Як швидко можна відчути результати після практики?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Більшість учасників помічають зміни вже під час або одразу після першої практики.
                  Ви можете відчути полегшення, спокій, ясність думок або навіть фізичне
                  розслаблення в тілі.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q5" className={styles.questions_toggle} />
              <label htmlFor="q5" className={styles.questions_question_text}>
                <span>:: Чи можу я використовувати магніт для допомоги іншим людям?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Цілком можливо, якщо ви володієте базовими знаннями м’язового тесту та навичками
                  самоаналізу. Під час майстер-класу ви навчитеся працювати з собою, а також зможете
                  застосовувати цю техніку для близьких.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q6" className={styles.questions_toggle} />
              <label htmlFor="q6" className={styles.questions_question_text}>
                <span>:: Чи треба дотримуватись якихось спеціальних умов для практики?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Ні, особливих умов не потрібно. Ви можете працювати з магнітом вдома, в офісі або
                  навіть у дорозі. Головне — знайти кілька хвилин, щоб зосередитися і виконати
                  технікy.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q7" className={styles.questions_toggle} />
              <label htmlFor="q7" className={styles.questions_question_text}>
                <span>:: Як часто можна практикувати цей метод?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Ви можете використовувати магніт щоразу, коли відчуваєте емоційний дискомфорт або
                  потребу гармонізувати свій стан. Техніка безпечна і не має обмежень за кількістю
                  застосувань.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q8" className={styles.questions_toggle} />
              <label htmlFor="q8" className={styles.questions_question_text}>
                <span>:: Що робити, якщо після практики я не відчув змін?</span>
                <span className={styles.questions_question_mark}></span>
              </label>
              <div className={styles.questions_answer_wrapper}>
                <p className={styles.questions__answer}>
                  Результати можуть залежати від вашого рівня концентрації та відкритості до
                  процесу. Спробуйте повторити практику, приділивши більше уваги виконанню алгоритму
                  та чесності з собою. У більшості випадків зміни помітні після кількох повторень.
                </p>
              </div>
            </li>
            <li className={styles.questions_question}>
              <input type="checkbox" id="q9" className={styles.questions_toggle} />
              <label htmlFor="q9" className={styles.questions_question_text}>
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
