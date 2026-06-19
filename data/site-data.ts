import {getD100FateMessages} from '@/data/d100-fate-messages';

export type Locale = 'ru' | 'en';

export type SiteData = ReturnType<typeof getSiteData>;

const sharedCampaigns = [
  {
    id: 'village-mist',
    image: '/images/campaigns/The Village in the Mist.png',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'edge-tavern',
    image: '/images/campaigns/The Tavern at the Edge of the World.png',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-tea-billy',
    image: '/images/campaigns/Lux word illustration.png',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-crimson-cliff',
    image: '/images/campaigns/Lux word illustration.png',
    tags: ['oneShot', 'mystery']
  },
  {
    id: 'lux-first-descent',
    image: '/images/campaigns/Lux word illustration.png',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-living-dead',
    image: '/images/campaigns/Lux Age of the Living Dead.png',
    tags: ['campaign', 'darkFantasy']
  },
  {
    id: 'lux-lost-kingdom',
    image: '/images/campaigns/Lux The Lost Kingdom.png',
    tags: ['campaign', 'mystery']
  },
  {
    id: 'lux-underdark',
    image: '/images/campaigns/Lux Expedition into the Underdark.png',
    tags: ['campaign', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-edge-world',
    image: '/images/campaigns/Lux Expedition to the Edge of the World.png',
    tags: ['campaign', 'mystery']
  }
];

export function getSiteData(locale: Locale) {
  const ru = locale === 'ru';
  const campaignTagLabels: Record<string, string> = ru
    ? {
        oneShot: 'Ваншоты',
        campaign: 'Кампании',
        darkFantasy: 'Тёмное фэнтези',
        mystery: 'Детектив'
      }
    : {
        oneShot: 'One-Shots',
        campaign: 'Campaigns',
        darkFantasy: 'Dark Fantasy',
        mystery: 'Mystery'
      };
  const campaignTags = Array.from(new Set(sharedCampaigns.flatMap((campaign) => campaign.tags)));
  const filters: Array<[string, string]> = [
    ['all', ru ? 'Все' : 'All'],
    ...campaignTags.map((tag) => [tag, campaignTagLabels[tag] ?? tag] as [string, string])
  ];

  return {
    locale,
    altLocale: ru ? 'en' : 'ru',
    altHref: ru ? '/en' : '/',
    nav: ru
      ? ['О мастере', 'Приключения', 'Форматы игр', 'Отзывы', 'Абонементы', 'Контакты']
      : ['About', 'Campaigns', 'Formats', 'Reviews', 'Passes', 'Contact'],
    navIds: ['about', 'campaigns', 'formats', 'reviews', 'pricing', 'contact'],
    cta: ru ? 'Записаться' : 'Book a Session',
    hero: {
      title: ru ? 'Ваши решения создают историю' : 'Your choices create the story',
      subtitle: ru
        ? 'Погрузитесь в историю, где каждое решение имеет значение. Авторские кампании, атмосферные приключения и незабываемые персонажи для новичков и опытных игроков.'
        : 'Step into a story where every choice matters. Custom campaigns, cinematic adventures and unforgettable characters for both beginners and experienced players.',
      primary: ru ? 'Начать приключение' : 'Begin Adventure',
      secondary: ru ? 'Смотреть кампании' : 'Explore Campaigns'
    },
    profile: {
      title: 'Alexandr Starkov',
      role: ru ? 'Dungeon Master и рассказчик' : 'Dungeon Master & Storyteller',
      intro: ru
        ? 'Провожу кампании и ваншоты, в которых решения игроков действительно меняют мир. Люблю сочетать атмосферный отыгрыш, моральные выборы, исследования и тактические сражения.'
        : 'I run campaigns and one-shots where player decisions genuinely shape the world. My games combine roleplay, exploration, meaningful choices and tactical combat.',
      specTitle: ru ? 'Специализация' : 'Specialization',
      specs: ru
        ? ['Кинематографичные истории', 'Тактические сражения', 'Отыгрыш персонажей', 'Кампании с последствиями выбора']
        : ['Cinematic storytelling', 'Tactical encounters', 'Character-driven adventures', 'Choice-driven campaigns'],
      stats: ru
        ? ['Онлайн и офлайн', 'RU / EN', 'Ваншоты и кампании', 'Тёмное фэнтези, мистика, драма']
        : ['Online and offline', 'RU / EN', 'One-shots and campaigns', 'Dark fantasy, mystery, drama']
    },
    servicesTitle: ru ? 'Форматы игр' : 'Game Formats',
    services: ru
      ? [
          ['Ваншот', 'Завершённое приключение на одну встречу для игроков с любым уровнем опыта.', '3-4 часа', '3-5 игроков'],
          ['Авторская кампания', 'Долгая история с личными арками, последствиями решений и живым миром.', '8+ сессий', '4-6 игроков'],
          ['Онлайн игра', 'Атмосферная сессия в Discord и виртуальном столе с картами и музыкой.', '3 часа', '3-6 игроков'],
          ['Корпоративное мероприятие', 'Командное приключение для события, тимбилдинга или творческого вечера.', '2-4 часа', '5-8 игроков'],
          ['Подарочный сертификат', 'Персональный квест в подарок другу, паре или компании.', 'На выбор', '2-6 игроков']
        ]
      : [
          ['One-Shot', 'A complete one-session adventure for players of any experience level.', '3-4 hours', '3-5 players'],
          ['Custom Campaign', 'A long-form story with personal arcs, choice consequences and a living world.', '8+ sessions', '4-6 players'],
          ['Online Adventure', 'An atmospheric Discord and virtual tabletop session with maps and music.', '3 hours', '3-6 players'],
          ['Corporate Event', 'A collaborative adventure for events, team building or creative evenings.', '2-4 hours', '5-8 players'],
          ['Gift Session', 'A personal quest as a gift for a friend, couple or group.', 'Custom', '2-6 players']
        ],
    serviceCta: ru ? 'Выбрать формат' : 'Choose Format',
    campaignsTitle: ru ? 'Портфолио приключений' : 'Campaign Portfolio',
    filters,
    campaigns: sharedCampaigns.map((campaign, index) => {
      const copy = ru
        ? [
            ['Деревня в туманах', 'Мистический хоррор', 'Ваншот', 'Атмосферный ваншот в жанре мистического хоррора, где группа приключенцев сопровождает священника в отдалённую деревню, затерянную среди бесконечных туманов. Местного гробовщика охватило странное безумие, жители боятся встретить его на улице. Героям предстоит раскрыть тайну, безумия гровобщика, прежде чем станет слишком поздно. Время играет против них, и каждый неверный шаг приближает момент, когда последствия уже невозможно будет остановить.'],
              ['Таверна на краю света', 'Вестерн-хоррор / Детектив', 'Ваншот', 'Вестерн-хоррор о расследовании убийства в заснеженной таверне, отрезанной от остального мира беспощадной метелью. Когда один из постояльцев оказывается мёртв, становится ясно, что у каждого присутствующего были причины желать ему смерти. Пока буря не позволяет покинуть таверну, героям предстоит разобраться в запутанной паутине лжи, старых обид и скрытых мотивов. Но время уходит, и если убийца не будет найден достаточно быстро, следующая жертва может появиться ещё до рассвета.'],
            ['Последний рейс «Чайного Билли»', 'Авторский мир / Детектив / Выживание / Приключение', 'Ваншот', 'Герои нанимаются охранять таинственный груз на борту «Чайного Билли» — самого быстроходного корабля Лукса. Простая доставка быстро превращается в борьбу за выживание, когда диверсия выводит из строя астральный руль, а корабль не успевает достичь пункта назначения до наступления ночи. Пока команда пытается устранить повреждения, среди матросов скрывается саботажник, а неизвестные силы начинают охоту за грузом. Игрокам предстоит раскрыть заговор, защитить корабль и не позволить таинственному грузу попасть в чужие руки.'],
            ['Карта Багрового Утёса', 'Исследование / Древние руины / Загадки / Детектив', 'Ваншот-пролог', 'Когда землетрясение открывает вход в древние руины, известный исследователь собирает экспедицию и нанимает героев в качестве охраны. Спускаясь всё глубже в забытый подземный комплекс, персонажи исследуют затерянные залы, разгадывают древние загадки и сталкиваются с опасностями ушедшей эпохи. В самом сердце руин их ждёт находка, способная изменить представление всего мира о прошлом Лукса — карта, на которой изображена земля, отсутствующая на современных картах.'],
            ['Первый спуск', 'Пролог / Подземье / Исследование / Детектив', 'Ваншот', 'Накануне крупнейшей экспедиции года герои прибывают в Моаргрим, чтобы пройти обязательный инструктаж для новичков. Вместе с другими участниками они отправляются в учебную пещеру, где опытный инструктор знакомит их с особенностями подземья, древними руинами и основами выживания в глубинах мира. Однако обычное обучение быстро принимает неожиданный оборот, когда группа сталкивается с вполне реальной угрозой. Инструктор уверяет, что всё происходящее является частью подготовки, но с каждым новым испытанием поверить в это становится всё сложнее.'],
              ['Лукс: Экспедиция в подземье', 'Кампания / Подземье / Выживание / Детектив', 'Кампания', 'В мире Лукс подземье давно перестало быть неизведанной территорией. Его карты составлены, древние руины изучены, а масштабные экспедиции давно превратились в популярное развлечение для путешественников, учёных и искателей приключений. Однако очередное путешествие оборачивается катастрофой, когда на участников обрушиваются орды чудовищ, появившихся там, где их не должно было быть. Оказавшись отрезанными от основной группы глубоко под землёй, героям предстоит найти выживших, раскрыть источник новой угрозы и остановить её, прежде чем тьма вырвется на поверхность.'],
              ['Лукс: Экспедиция на край света', 'Кампания / Эпическое приключение / Древние тайны / Арктическая экспедиция', 'Кампания', 'На далёком севере Лукса возвышается один из четырёх древних Обелисков — магических монолитов, удерживающих континент среди течений Астрального моря. Столетия назад Северный Обелиск был повреждён, и с тех пор земли вокруг него поглотили вечные снега и ледяные бури. Немногие поселения ещё цепляются за жизнь на южной окраине региона, но дальше на север лежат лишь руины, чудовища и бескрайняя белая пустыня. Герои присоединяются к научной экспедиции, целью которой является исследование Обелиска и поиск ответов на одну из величайших загадок истории. Что произошло в последние дни Драконьей Империи? Почему исчезли драконы, некогда правившие всем континентом? И какую цену придётся заплатить за правду, скрытую среди льдов и забытых руин древнего Троунгарда?'],
              ['Лукс: Затерянное королевство', 'Кампания / Эпическое приключение / Древние тайны / Авторский мир', 'Кампания высоких уровней', 'Эпическая кампания для персонажей высоких уровней, действие которой разворачивается в эпоху городов-государств Лукса. Пока могущественные государства поддерживают хрупкий мир, скрывая старые обиды и амбиции за дипломатией и торговлей, герои отправляются на поиски Багрового Острова — утраченной части континента, отколовшейся от Лукса и затерявшейся среди бескрайнего Астрального моря. Это путешествие приведёт их к древним тайнам, забытым эпохам и ответам на вопросы, которые веками оставались лишь легендами. Чем дальше продвигается экспедиция, тем яснее становится, что история самого Лукса была совсем не такой, какой её знают жители мира.'],
              ['Лукс: Эра живых мертвецов', 'Кампания / Авторский мир / Тёмное фэнтези / Моральный выбор', 'Кампания', 'Кампания в авторском мире Лукс — плоском континенте, парящем среди Астрального моря днём и дрейфующем через хаотические течения Лимбо ночью. После прихода к власти Векны, бога и повелителя нежити, мир изменился навсегда. Мёртвые больше не скрываются в могилах и руинах — они живут рядом с живыми, строят государства, заключают союзы и ведут войны. Героям предстоит разобраться в причинах этого нового порядка и решить, какую сторону принять в конфликте, способном определить будущее всего Лукса.']
          ]
        : [
            ['Village in the Mists', 'Mystery Horror', 'One-Shot', 'An atmospheric mystery horror one-shot where a group of adventurers accompanies a priest to a remote village lost within endless mists. The local gravedigger has fallen victim to a strange madness, and the villagers are terrified of encountering him on the streets. The heroes must uncover the mystery behind the gravedigger’s insanity before it is too late. Time is working against them, and every wrong step brings them closer to a point where the consequences can no longer be stopped.'],
            ['The Tavern at the Edge of the World', 'Western Horror / Mystery', 'One-shot', 'A western horror mystery set in a remote northern tavern cut off from the outside world by a relentless blizzard. When one of the guests is found dead, it quickly becomes clear that everyone present had a reason to want him gone. Trapped inside while the storm rages on, the heroes must untangle a web of lies, grudges and hidden motives. Time is running out, and if the killer is not uncovered soon, another victim may fall before dawn.'],
            ['The Last Voyage of the Tea Billy', 'Original World / Mystery / Survival / Adventure', 'One-shot', 'The heroes are hired to guard a mysterious cargo aboard the Tea Billy, the fastest ship in all of Lux. What begins as a routine delivery soon turns into a desperate struggle for survival when an act of sabotage cripples the astral helm, leaving the ship unable to reach its destination before nightfall. As the crew races to repair the damage, a saboteur hides among the sailors while unknown forces close in on the cargo. The heroes must uncover the conspiracy, defend the ship, and prevent the mysterious cargo from falling into the wrong hands.'],
            ['The Map of Crimson Cliff', 'Exploration / Ancient Ruins / Puzzles / Mystery', 'Prelude one-shot', 'When an earthquake reveals the entrance to ancient ruins, a renowned scholar assembles an expedition and hires the heroes as guards. Descending into a forgotten underground complex, the party explores lost halls, solves ancient puzzles, and faces the dangers of a long-vanished age. Deep within the ruins they uncover a discovery that could change everything the world knows about the history of Lux — a map depicting a land missing from all modern charts.'],
            ['The First Descent', 'Prologue / Underdark / Exploration / Mystery', 'One-shot', 'On the eve of the largest expedition of the year, the heroes arrive in Moargrim to complete the mandatory training required for all new explorers. Alongside other recruits, they descend into a training cavern where a veteran instructor introduces them to the dangers of the Underdark, ancient ruins, and the skills needed to survive below. What begins as a routine exercise soon takes an unexpected turn when the group faces a very real threat. Their instructor insists that everything is part of the training program, but with each new challenge, that explanation becomes harder and harder to believe.'],
              ['Lux: Expedition into the Underdark', 'Campaign / Underdark / Survival / Mystery', 'Campaign', 'In the world of Lux, the Underdark has long ceased to be an unexplored frontier. Its tunnels have been mapped, its ancient ruins studied, and large expeditions have become a popular attraction for travelers, scholars and adventurers alike. But what should have been a routine journey turns into a disaster when hordes of monsters emerge from places where none should exist. Cut off from the main expedition deep beneath the surface, the heroes must find survivors, uncover the source of the threat and stop it before the darkness breaks into the world above.'],
              ['Lux: Expedition to the Edge of the World', 'Campaign / Epic Adventure / Ancient Secrets / Arctic Exploration', 'Campaign', 'Far in the frozen north of Lux stands one of the Four Obelisks — ancient magical monoliths that keep the continent afloat within the currents of the Astral Sea. Centuries ago, the Northern Obelisk was damaged, and the lands surrounding it were consumed by endless snowstorms and eternal winter. A handful of mining settlements still survive on the southern edge of the region, but beyond them lie only ruins, monsters and an endless frozen wilderness. The heroes join a scientific expedition seeking answers to one of the greatest mysteries in Lux\'s history. What truly happened during the final days of the Dragon Empire? Why did the dragons, once rulers of the continent, vanish almost overnight? And what price must be paid for the truth buried beneath the ice and the forgotten ruins of ancient Throungard?'],
              ['Lux: The Lost Kingdom', 'Campaign / Epic Adventure / Ancient Secrets / Original World', 'High-level campaign', 'An epic high-level campaign set during the age of the city-states of Lux. While powerful nations maintain a fragile peace built upon old rivalries, political ambitions and uneasy alliances, the heroes embark on a quest to find the Crimson Island — a lost fragment of the continent that broke away from Lux and vanished into the endless Astral Sea. Their journey will uncover ancient secrets, forgotten ages and truths buried beneath centuries of myth. As the expedition moves forward, the heroes begin to realize that the history of Lux may be very different from what the world has always believed.'],
              ['Lux: Age of the Living Dead', 'Campaign / Original World / Dark Fantasy / Moral Choice', 'Campaign', 'A campaign set in the original world of Lux — a flat continent drifting through the Astral Sea by day and the chaotic tides of Limbo by night. After Vecna, the god and lord of the undead, rose to power, the world changed forever. The dead no longer dwell only in tombs and forgotten ruins; they live alongside the living, build kingdoms, forge alliances and wage wars. The heroes must uncover the truth behind this new age and decide where they stand in a conflict that may shape the future of all Lux.']
          ];

      return {
        ...campaign,
        title: copy[index][0],
        genre: copy[index][1],
        duration: copy[index][2],
        description: copy[index][3]
      };
    }),
    officialAdventures: {
      title: ru ? 'Готовые приключения D&D' : 'Official D&D Adventures',
      subtitle: ru
        ? 'Помимо авторских историй, я вожу готовые приключения Dungeons & Dragons — могу провести кампанию по книге или адаптировать её под состав и стиль вашей группы.'
        : 'Alongside original stories, I run published Dungeons & Dragons adventures and can adapt each campaign to your group and preferred play style.',
      items: ru
        ? [
            ['Поворот Колеса Фортуны', 'Планарное приключение по Сигилу и Мультивселенной, где героям предстоит вернуть утраченную судьбу.'],
            ['Проклятие Страда', 'Готический хоррор в туманной Баровии с замком Равенлофт и легендарным вампиром Страдом фон Заровичем.'],
            ['Врата Балдура: Нисхождение в Авернус', 'Мрачное путешествие из Врат Балдура в первый круг Девяти Преисподних среди демонов, дьяволов и адских машин.']
          ]
        : [
            ['Turn of Fortune’s Wheel', 'A planar adventure through Sigil and the Multiverse where the heroes must reclaim their lost destiny.'],
            ['Curse of Strahd', 'Gothic horror in mist-shrouded Barovia, featuring Castle Ravenloft and the legendary vampire Strahd von Zarovich.'],
            ['Baldur’s Gate: Descent into Avernus', 'A dark journey from Baldur’s Gate into the first layer of the Nine Hells, filled with devils, demons and infernal machines.']
          ]
    },
    worldLux: {
      title: ru ? 'Мир Лукс' : 'World of Lux',
      paragraphs: ru
        ? [
            'Лукс — плоский континент, дрейфующий среди течений Астрального моря. С наступлением ночи окружающее пространство погружается в хаотические штормы Лимбо, а границы между мирами становятся настолько тонкими, что путешествие в другие планы может начаться буквально за ближайшим поворотом дороги.',
            'На протяжении тысячелетий Луксом правили драконы, небеснокровные асимары и разумные машины. Империи возвышались и рушились, боги вмешивались в судьбу смертных, а войны меняли саму структуру мира. Сегодня континент переживает новую Эпоху Городов-Государств, где древние тайны прошлого по-прежнему скрыты среди руин погибших цивилизаций.',
            'Каждая кампания в Луксе раскрывает отдельную эпоху этой истории: падение драконьих империй, экспедиции к древним обелискам и путешествия к затерянным уголкам мира.'
          ]
        : [
            'Lux is a flat continent drifting through the currents of the Astral Sea. At night the surrounding space is consumed by the chaotic storms of Limbo, and the boundaries between worlds become so thin that a journey into another plane may begin around the next corner.',
            'For thousands of years Lux was ruled by dragons, celestial aasimar dynasties and intelligent machines. Empires rose and fell, gods intervened in mortal affairs, and wars reshaped the world itself. Today the continent lives through a new Age of City-States where the secrets of ancient civilizations remain hidden beneath forgotten ruins.',
            'Each campaign set in Lux explores a different era of its history: the fall of dragon empires, expeditions to ancient obelisks and journeys into the unknown.'
          ],
      image: '/images/campaigns/Lux word illustration.png'
    },
    timelineTitle: ru ? 'Как проходит сессия' : 'Session Experience',
    timeline: ru
      ? ['Подготовка персонажей', 'Начало приключения', 'Исследование мира', 'Сражения и испытания', 'Кульминация', 'Последствия выбора']
      : ['Character Creation', 'Adventure Begins', 'Exploration', 'Encounters', 'Climax', 'Consequences'],
    dice: {
      title: ru ? 'Кубик судьбы' : 'Dice of Fate',
      button: ru ? 'Бросить кубик судьбы' : 'Roll the Dice of Fate',
      messages: getD100FateMessages(locale)
    },
    galleryTitle: ru ? 'Галерея миров' : 'World Gallery',
    gallery: ru
      ? ['Боевые карты', 'Таверны', 'Подземелья', 'Леса', 'Боссы', 'Моменты персонажей']
      : ['Battle Maps', 'Taverns', 'Dungeons', 'Forests', 'Boss Encounters', 'Character Moments'],
    reviewsTitle: ru ? 'Отзывы игроков' : 'Player Reviews',
    reviews: ru
      ? [
          [
            'Игорь',
            'Обычно настороженно отношусь к кампаниям с большим количеством лора, потому что часто приходится запоминать кучу названий и событий. Здесь такого ощущения не было. Всё важное раскрывалось по ходу игры, а мир постепенно становился понятнее. Больше всего понравилось, что решения действительно что-то меняли, а не сводились к выбору между двумя заранее подготовленными вариантами.'
          ],
          [
            'Анна',
            'Мне всегда интереснее взаимодействие между персонажами, чем бои, и с этим всё было отлично. Было много моментов для общения, принятия решений и отыгрыша. При этом сюжет не стоял на месте и постоянно подбрасывал новые проблемы. После игры ещё долго обсуждали с группой некоторые события и свои выборы.'
          ],
          [
            'Никита',
            'Не скажу, что я большой фанат длинных сюжетов, но здесь было интересно следить за развитием истории. Особенно понравилось, что многие вещи становились понятны только спустя несколько сессий, когда отдельные детали складывались в общую картину.'
          ]
        ]
      : [
          ['Maria', 'It was my first game and I never felt lost. The atmosphere felt like a great series.'],
          ['Ilya', 'The NPCs felt alive, combat was tense, and our choices caught up with us sessions later.'],
          ['Anna', 'The best corporate adventure: everyone joined in, laughed and argued like a real party.']
        ],
    pricingTitle: ru ? 'Абонементы' : 'Session Passes',
    pricingSubtitle: ru
      ? 'Чем больше приключений впереди, тем выгоднее каждая сессия. Абонемент оформляется на одного игрока.'
      : 'The more adventures ahead, the better the price per session. Each pass is for one player.',
    pricing: ru
      ? [
          ['Странник', 'Оплата одной сессии. Хватит для ваншота, знакомства с форматом игры и мастером.', '1 500 ₽ · 1 сессия'],
          ['Искатель', '4 сессии со скидкой 7%. Хороший старт для сюжетной арки или мини-кампании.', '5 600 ₽ · 1 400 ₽ / сессия'],
          ['Герой', '8 сессий со скидкой 17%. Для полноценной кампании и регулярных встреч.', '10 000 ₽ · 1 250 ₽ / сессия'],
          ['Легенда', '12 сессий со скидкой 33%. Максимальная выгода для долгого большого приключения.', '12 000 ₽ · 1 000 ₽ / сессия']
        ]
      : [
          ['Wanderer', 'Payment for one session. Enough for a one-shot and a chance to discover the game format and meet the Dungeon Master.', '1,500 ₽ · 1 session'],
          ['Seeker', '4 sessions with a 7% discount. A strong start for a story arc or mini-campaign.', '5,600 ₽ · 1,400 ₽ / session'],
          ['Hero', '8 sessions with a 17% discount. Built for a full campaign and regular play.', '10,000 ₽ · 1,250 ₽ / session'],
          ['Legend', '12 sessions with a 33% discount. The best value for a long-form adventure.', '12,000 ₽ · 1,000 ₽ / session']
        ],
    faqTitle: 'FAQ',
    faq: ru
      ? [
          ['Нужен ли опыт игры?', 'Нет. Я объясню правила через действие и помогу создать героя.'],
          ['Можно ли играть онлайн?', 'Да. Провожу игры в Discord и на Foundry VTT.'],
          ['Сколько длится сессия?', 'Для 3-5 игроков — 3 часа, для 6 игроков — 4 часа. После игры предусмотрено ещё 30 минут на обсуждение и обратную связь.'],
          ['Сколько игроков может участвовать?', 'Оптимально 3-6 игроков, для событий можно больше.']
        ]
      : [
          ['Do I need previous experience?', 'No. I teach the rules through play and help with character creation.'],
          ['Can we play online?', 'Yes. I run sessions in Discord and Foundry VTT.'],
          ['How long is a session?', 'Sessions last 3 hours for 3-5 players and 4 hours for 6 players, plus 30 minutes for discussion and feedback.'],
          ['How many players can join?', 'The sweet spot is 3-6 players, with larger event formats available.']
        ],
    booking: {
      title: ru ? 'Хотите присоединиться к игре?' : 'Want to join a game?',
      subtitle: ru
        ? 'Оставьте имя, ник в Telegram и пару слов о себе — я напишу вам и расскажу о ближайших играх.'
        : 'Leave your name, Telegram username and a few words about yourself. I will message you about upcoming games.',
      fields: ru
        ? {name: 'Имя', telegram: 'Ник в Telegram', about: 'Коротко о себе'}
        : {name: 'Name', telegram: 'Telegram username', about: 'A few words about yourself'},
      submit: ru ? 'Отправить вестника' : 'Send Messenger',
      sending: ru ? 'Вестник в пути...' : 'Sending...',
      success: ru ? 'Заявка отправлена. Скоро я напишу вам в Telegram.' : 'Your request has been sent. I will message you on Telegram soon.',
      error: ru ? 'Не удалось отправить заявку. Попробуйте ещё раз чуть позже.' : 'Could not send your request. Please try again later.'
    },
    footer: ru ? 'Ваши решения создают историю' : 'Your choices create the story'
  };
}
