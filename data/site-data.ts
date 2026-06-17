export type Locale = 'ru' | 'en';

export type SiteData = ReturnType<typeof getSiteData>;

const sharedCampaigns = [
  {
    id: 'village-mist',
    image: 'linear-gradient(135deg, rgba(200,155,60,.28), rgba(36,26,18,.9)), radial-gradient(circle at 35% 30%, rgba(255,201,91,.32), transparent 24%)',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'edge-tavern',
    image: 'linear-gradient(135deg, rgba(124,58,237,.28), rgba(10,9,16,.92)), radial-gradient(circle at 68% 28%, rgba(232,214,176,.22), transparent 24%)',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-living-dead',
    image: 'linear-gradient(135deg, rgba(139,46,46,.38), rgba(10,9,16,.92)), radial-gradient(circle at 44% 36%, rgba(200,155,60,.28), transparent 26%)',
    tags: ['campaign', 'darkFantasy']
  },
  {
    id: 'lux-lost-kingdom',
    image: 'linear-gradient(135deg, rgba(200,155,60,.22), rgba(21,17,29,.94)), repeating-linear-gradient(45deg, rgba(232,214,176,.08) 0 1px, transparent 1px 10px)',
    tags: ['campaign', 'mystery']
  },
  {
    id: 'lux-underdark',
    image: 'linear-gradient(135deg, rgba(232,214,176,.18), rgba(10,9,16,.94)), radial-gradient(circle at 50% 30%, rgba(124,58,237,.32), transparent 25%)',
    tags: ['campaign', 'mystery', 'darkFantasy']
  },
  {
    id: 'lux-edge-world',
    image: 'linear-gradient(135deg, rgba(139,46,46,.3), rgba(36,26,18,.9)), radial-gradient(circle at 72% 24%, rgba(200,155,60,.26), transparent 24%)',
    tags: ['campaign', 'mystery']
  }
];

export function getSiteData(locale: Locale) {
  const ru = locale === 'ru';

  return {
    locale,
    altLocale: ru ? 'en' : 'ru',
    altHref: ru ? '/en' : '/',
    nav: ru
      ? ['О мастере', 'Приключения', 'Форматы игр', 'Отзывы', 'Стоимость', 'Контакты']
      : ['About', 'Campaigns', 'Formats', 'Reviews', 'Pricing', 'Contact'],
    navIds: ['about', 'campaigns', 'formats', 'reviews', 'pricing', 'contact'],
    cta: ru ? 'Записаться' : 'Book a Session',
    hero: {
      title: ru ? 'Ваши решения создают легенду' : 'Your choices create the legend',
      subtitle: ru
        ? 'Погрузитесь в историю, где каждое решение имеет значение. Авторские кампании, атмосферные приключения и незабываемые персонажи для новичков и опытных игроков.'
        : 'Step into a story where every choice matters. Custom campaigns, cinematic adventures and unforgettable characters for both beginners and experienced players.',
      primary: ru ? 'Начать приключение' : 'Begin Adventure',
      secondary: ru ? 'Смотреть кампании' : 'Explore Campaigns'
    },
    profile: {
      title: 'Alexander Starkov',
      role: ru ? 'Dungeon Master и рассказчик' : 'Dungeon Master & Storyteller',
      intro: ru
        ? 'Провожу кампании и ваншоты, в которых решения игроков действительно меняют мир. Люблю сочетать атмосферный отыгрыш, моральные выборы, исследования и тактические сражения.'
        : 'I run campaigns and one-shots where player decisions genuinely shape the world. My games combine roleplay, exploration, meaningful choices and tactical combat.',
      specTitle: ru ? 'Специализация' : 'Specialization',
      specs: ru
        ? ['Кинематографичные истории', 'Тактические сражения', 'Глубокий отыгрыш персонажей', 'Кампании с последствиями выбора']
        : ['Cinematic storytelling', 'Tactical encounters', 'Character-driven adventures', 'Choice-driven campaigns'],
      stats: ru
        ? ['Онлайн и офлайн', 'RU / EN', 'Ваншоты и кампании', 'Тёмное фэнтези, мистика, драма']
        : ['Online and offline', 'RU / EN', 'One-shots and campaigns', 'Dark fantasy, mystery, drama']
    },
    servicesTitle: ru ? 'Форматы игр' : 'Game Formats',
    services: ru
      ? [
          ['Ваншот для новичков', 'Мягкое введение в D&D с готовыми героями, ясными правилами и ярким финалом.', '3-4 часа', '3-5 игроков'],
          ['Авторская кампания', 'Долгая история с личными арками, последствиями решений и живым миром.', '8+ сессий', '4-6 игроков'],
          ['Онлайн игра', 'Атмосферная сессия в Discord и виртуальном столе с картами и музыкой.', '3 часа', '3-6 игроков'],
          ['Корпоративное мероприятие', 'Командное приключение для события, тимбилдинга или творческого вечера.', '2-4 часа', '5-8 игроков'],
          ['Частная группа', 'Игра под ваш жанр, темп и опыт участников.', 'Гибко', '2-6 игроков'],
          ['Подарочный сертификат', 'Персональный квест в подарок другу, паре или компании.', 'На выбор', '2-6 игроков']
        ]
      : [
          ['Beginner One-Shot', 'A friendly D&D introduction with ready heroes, clear rules and a memorable finale.', '3-4 hours', '3-5 players'],
          ['Custom Campaign', 'A long-form story with personal arcs, choice consequences and a living world.', '8+ sessions', '4-6 players'],
          ['Online Adventure', 'An atmospheric Discord and virtual tabletop session with maps and music.', '3 hours', '3-6 players'],
          ['Corporate Event', 'A collaborative adventure for events, team building or creative evenings.', '2-4 hours', '5-8 players'],
          ['Private Group', 'A game shaped around your genre, pace and player experience.', 'Flexible', '2-6 players'],
          ['Gift Session', 'A personal quest as a gift for a friend, couple or group.', 'Custom', '2-6 players']
        ],
    serviceCta: ru ? 'Выбрать формат' : 'Choose Format',
    campaignsTitle: ru ? 'Портфолио приключений' : 'Campaign Portfolio',
    filters: ru
      ? [
          ['all', 'Все'],
          ['oneShot', 'Ваншоты'],
          ['campaign', 'Кампании'],
          ['beginner', 'Новички'],
          ['darkFantasy', 'Тёмное фэнтези'],
          ['mystery', 'Детектив']
        ]
      : [
          ['all', 'All'],
          ['oneShot', 'One-Shots'],
          ['campaign', 'Campaigns'],
          ['beginner', 'Beginner'],
          ['darkFantasy', 'Dark Fantasy'],
          ['mystery', 'Mystery']
        ],
    campaigns: sharedCampaigns.map((campaign, index) => {
      const copy = ru
        ? [
            ['Деревня в туманах', 'Мистический хоррор', 'Ваншот', 'Атмосферный ваншот в жанре мистического хоррора, где группа приключенцев сопровождает священника в отдалённую деревню, затерянную среди бесконечных туманов. Местного гробовщика охватило странное безумие, жители избегают разговоров о прошлом, а старая церковь хранит больше вопросов, чем ответов. Героям предстоит раскрыть тайну, скрытую в сердце деревни, прежде чем нечто древнее и давно забытое окончательно пробудится. Время играет против них, и каждый неверный шаг приближает момент, когда последствия уже невозможно будет остановить.'],
            ['Таверна на краю света', 'Вестерн-хоррор / Детектив', 'Ваншот', 'Вестерн-хоррор о расследовании убийства в заснеженной таверне, отрезанной от остального мира беспощадной метелью. Когда один из постояльцев оказывается мёртв, становится ясно, что у каждого присутствующего были причины желать ему смерти. Пока буря не позволяет покинуть таверну, героям предстоит разобраться в запутанной паутине лжи, старых обид и скрытых мотивов. Но время уходит, и если убийца не будет найден достаточно быстро, следующая жертва может появиться ещё до рассвета.'],
            ['Лукс: Эра живых мертвецов', 'Кампания / Авторский мир / Тёмное фэнтези / Моральный выбор', 'Кампания', 'Кампания в авторском мире Лукс — плоском континенте, парящем среди Астрального моря днём и дрейфующем через хаотические течения Лимбо ночью. После прихода к власти Векны, бога и повелителя нежити, мир изменился навсегда. Мёртвые больше не скрываются в могилах и руинах — они живут рядом с живыми, строят государства, заключают союзы и ведут войны. Героям предстоит разобраться в причинах этого нового порядка и решить, какую сторону принять в конфликте, способном определить будущее всего Лукса.'],
            ['Лукс: Затерянное королевство', 'Кампания / Эпическое приключение / Древние тайны / Авторский мир', 'Кампания высоких уровней', 'Эпическая кампания для персонажей высоких уровней, действие которой разворачивается в эпоху городов-государств Лукса. Пока могущественные государства поддерживают хрупкий мир, скрывая старые обиды и амбиции за дипломатией и торговлей, герои отправляются на поиски Багрового Острова — утраченной части континента, отколовшейся от Лукса и затерявшейся среди бескрайнего Астрального моря. Это путешествие приведёт их к древним тайнам, забытым эпохам и ответам на вопросы, которые веками оставались лишь легендами. Чем дальше продвигается экспедиция, тем яснее становится, что история самого Лукса была совсем не такой, какой её знают жители мира.'],
            ['Лукс: Экспедиция в подземье', 'Кампания / Подземье / Выживание / Детектив', 'Кампания', 'В мире Лукс подземье давно перестало быть неизведанной территорией. Его карты составлены, древние руины изучены, а масштабные экспедиции давно превратились в популярное развлечение для путешественников, учёных и искателей приключений. Однако очередное путешествие оборачивается катастрофой, когда на участников обрушиваются орды чудовищ, появившихся там, где их не должно было быть. Оказавшись отрезанными от основной группы глубоко под землёй, героям предстоит найти выживших, раскрыть источник новой угрозы и остановить её, прежде чем тьма вырвется на поверхность и изменит весь Лукс.'],
            ['Лукс: Экспедиция на край света', 'Кампания / Эпическое приключение / Древние тайны / Арктическая экспедиция', 'Кампания', 'На далёком севере Лукса возвышается один из четырёх древних Обелисков — магических монолитов, удерживающих континент среди течений Астрального моря. Столетия назад Северный Обелиск был повреждён, и с тех пор земли вокруг него поглотили вечные снега и ледяные бури. Немногие поселения ещё цепляются за жизнь на южной окраине региона, но дальше на север лежат лишь руины, чудовища и бескрайняя белая пустыня. Герои присоединяются к научной экспедиции, целью которой является исследование Обелиска и поиск ответов на одну из величайших загадок истории. Что произошло в последние дни Драконьей Империи? Почему исчезли драконы, некогда правившие всем континентом? И какую цену придётся заплатить за правду, скрытую среди льдов и забытых руин древнего Троунгарда?']
          ]
        : [
            ['The Village in the Mist', 'Mystery Horror', 'One-shot', 'An atmospheric mystery-horror one-shot where a group of adventurers accompanies a priest to a remote village lost within endless mist. The local gravedigger has fallen into strange madness, the villagers avoid speaking of the past, and the old church holds more questions than answers. The heroes must uncover the secret buried at the heart of the settlement before something ancient and long forgotten fully awakens. Time is not on their side, and every wrong turn brings them closer to a point where the consequences can no longer be contained.'],
            ['The Tavern at the Edge of the World', 'Western Horror / Mystery', 'One-shot', 'A western horror mystery set in a remote northern tavern cut off from the outside world by a relentless blizzard. When one of the guests is found dead, it quickly becomes clear that everyone present had a reason to want him gone. Trapped inside while the storm rages on, the heroes must untangle a web of lies, grudges and hidden motives. Time is running out, and if the killer is not uncovered soon, another victim may fall before dawn.'],
            ['Lux: Age of the Living Dead', 'Campaign / Original World / Dark Fantasy / Moral Choice', 'Campaign', 'A campaign set in the original world of Lux — a flat continent drifting through the Astral Sea by day and the chaotic tides of Limbo by night. After Vecna, the god and lord of the undead, rose to power, the world changed forever. The dead no longer dwell only in tombs and forgotten ruins; they live alongside the living, build kingdoms, forge alliances and wage wars. The heroes must uncover the truth behind this new age and decide where they stand in a conflict that may shape the future of all Lux.'],
            ['Lux: The Lost Kingdom', 'Campaign / Epic Adventure / Ancient Secrets / Original World', 'High-level campaign', 'An epic high-level campaign set during the age of the city-states of Lux. While powerful nations maintain a fragile peace built upon old rivalries, political ambitions and uneasy alliances, the heroes embark on a quest to find the Crimson Island — a lost fragment of the continent that broke away from Lux and vanished into the endless Astral Sea. Their journey will uncover ancient secrets, forgotten ages and truths buried beneath centuries of myth. As the expedition moves forward, the heroes begin to realize that the history of Lux may be very different from what the world has always believed.'],
            ['Lux: Expedition into the Underdark', 'Campaign / Underdark / Survival / Mystery', 'Campaign', 'In the world of Lux, the Underdark has long ceased to be an unexplored frontier. Its tunnels have been mapped, its ancient ruins studied, and large expeditions have become a popular attraction for travelers, scholars and adventurers alike. But what should have been a routine journey turns into a disaster when hordes of monsters emerge from places where none should exist. Cut off from the main expedition deep beneath the surface, the heroes must find survivors, uncover the source of the threat and stop it before the darkness breaks into the world above and changes Lux forever.'],
            ['Lux: Expedition to the Edge of the World', 'Campaign / Epic Adventure / Ancient Secrets / Arctic Exploration', 'Campaign', 'Far in the frozen north of Lux stands one of the Four Obelisks — ancient magical monoliths that keep the continent afloat within the currents of the Astral Sea. Centuries ago, the Northern Obelisk was damaged, and the lands surrounding it were consumed by endless snowstorms and eternal winter. A handful of mining settlements still survive on the southern edge of the region, but beyond them lie only ruins, monsters and an endless frozen wilderness. The heroes join a scientific expedition seeking answers to one of the greatest mysteries in Lux\'s history. What truly happened during the final days of the Dragon Empire? Why did the dragons, once rulers of the continent, vanish almost overnight? And what price must be paid for the truth buried beneath the ice and the forgotten ruins of ancient Throungard?']
          ];

      return {
        ...campaign,
        title: copy[index][0],
        genre: copy[index][1],
        duration: copy[index][2],
        description: copy[index][3]
      };
    }),
    timelineTitle: ru ? 'Как проходит сессия' : 'Session Experience',
    timeline: ru
      ? ['Подготовка персонажей', 'Начало приключения', 'Исследование мира', 'Сражения и испытания', 'Кульминация', 'Последствия выбора']
      : ['Character Creation', 'Adventure Begins', 'Exploration', 'Encounters', 'Climax', 'Consequences'],
    dice: {
      title: ru ? 'Кубик судьбы' : 'Dice of Fate',
      button: ru ? 'Бросить кубик судьбы' : 'Roll the Dice of Fate',
      natural20: ru ? 'Натуральная двадцатка. Боги благосклонны.' : 'Natural 20. The gods are smiling upon you.',
      natural1: ru ? 'Натуральная единица. Судьба приготовила испытание.' : 'Natural 1. Fate has prepared a challenge.',
      messages: ru
        ? ['В таверне кто-то уже ждёт вас.', 'Древняя карта раскрыла новый путь.', 'NPC запомнит этот выбор.', 'В темноте шевельнулась легенда.']
        : ['Someone is already waiting in the tavern.', 'An ancient map reveals a new path.', 'An NPC will remember this choice.', 'A legend stirs in the dark.']
    },
    galleryTitle: ru ? 'Галерея миров' : 'World Gallery',
    gallery: ru
      ? ['Боевые карты', 'Таверны', 'Подземелья', 'Леса', 'Боссы', 'Моменты персонажей']
      : ['Battle Maps', 'Taverns', 'Dungeons', 'Forests', 'Boss Encounters', 'Character Moments'],
    reviewsTitle: ru ? 'Отзывы игроков' : 'Player Reviews',
    reviews: ru
      ? [
          ['Мария', 'Играла впервые и ни разу не почувствовала себя потерянной. Атмосфера была как в хорошем сериале.'],
          ['Илья', 'NPC живые, бои напряжённые, а последствия решений догоняли нас через несколько сессий.'],
          ['Анна', 'Лучшее корпоративное приключение: все включились, смеялись и спорили как настоящая партия.']
        ]
      : [
          ['Maria', 'It was my first game and I never felt lost. The atmosphere felt like a great series.'],
          ['Ilya', 'The NPCs felt alive, combat was tense, and our choices caught up with us sessions later.'],
          ['Anna', 'The best corporate adventure: everyone joined in, laughed and argued like a real party.']
        ],
    pricingTitle: ru ? 'Стоимость' : 'Pricing',
    pricing: ru
      ? [
          ['Первая Квестовая Ночь', 'Знакомство с игрой, готовые персонажи, один завершённый сюжет.', 'от 8 000 ₽'],
          ['Героическая Компания', 'Серия сессий, личные арки, карты, музыка и подготовка между играми.', 'от 18 000 ₽'],
          ['Легендарная Кампания', 'Долгий сезон с миром, фракциями, последствиями и индивидуальными материалами.', 'по запросу']
        ]
      : [
          ['First Quest', 'Game introduction, ready characters and one complete story.', 'from $120'],
          ['Heroic Party', 'A session arc with personal stories, maps, music and prep between games.', 'from $280'],
          ['Legendary Campaign', 'A long season with worldbuilding, factions, consequences and custom materials.', 'custom']
        ],
    faqTitle: 'FAQ',
    faq: ru
      ? [
          ['Нужен ли опыт игры?', 'Нет. Я объясню правила через действие и помогу создать героя.'],
          ['Можно ли играть онлайн?', 'Да. Провожу игры в Discord и на виртуальных столах.'],
          ['Сколько длится сессия?', 'Обычно 3-4 часа, но формат можно адаптировать под группу.'],
          ['Сколько игроков может участвовать?', 'Оптимально 3-6 игроков, для событий можно больше.']
        ]
      : [
          ['Do I need previous experience?', 'No. I teach the rules through play and help with character creation.'],
          ['Can we play online?', 'Yes. I run sessions in Discord and virtual tabletops.'],
          ['How long is a session?', 'Usually 3-4 hours, but the format can fit the group.'],
          ['How many players can join?', 'The sweet spot is 3-6 players, with larger event formats available.']
        ],
    booking: {
      title: ru ? 'Готовы начать приключение?' : 'Ready to begin your adventure?',
      subtitle: ru
        ? 'Расскажите о своей группе, желаемом формате и любимом жанре приключений.'
        : 'Tell me about your group, preferred format and favorite adventure style.',
      fields: ru
        ? ['Имя', 'Email', 'Telegram / Discord', 'Количество игроков', 'Формат', 'Опыт', 'Сообщение']
        : ['Name', 'Email', 'Telegram / Discord', 'Player Count', 'Preferred Format', 'Experience Level', 'Message'],
      submit: ru ? 'Отправить вестника' : 'Send Messenger',
      success: ru ? 'Ваш вестник отправлен. Скоро я свяжусь с вами.' : 'Your messenger has been sent. I will contact you soon.'
    },
    footer: ru ? 'Ваши решения создают легенду.' : 'Your choices create the legend.'
  };
}
