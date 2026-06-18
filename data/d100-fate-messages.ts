import type {Locale} from '@/data/site-data';

const ruTiers = [
  [
    'Рок уже занёс клинок',
    'Тьма узнала ваше имя',
    'Судьба захлопнула дверь',
    'Древнее проклятие проснулось',
    'Надежда гаснет в холодном ветре',
    'Бездна смотрит в ответ',
    'Клятва обернулась цепью',
    'Враги услышали ваш шаг',
    'Последний факел почти погас',
    'Мир требует страшную цену'
  ],
  [
    'По следу крадётся беда',
    'Недобрый знак проступил на стали',
    'Старые долги нашли дорогу',
    'За ближайшей дверью ждёт ловушка',
    'Чужой шёпот проник в ваши сны',
    'Удача отвернулась на один шаг',
    'Тени собираются за спиной',
    'Верный путь скрывает предательство',
    'Ночь стала длиннее обычного',
    'Опасность уже совсем близко'
  ],
  [
    'Путь впереди окутан туманом',
    'Карта скрывает важную деталь',
    'Союзник колеблется в решающий миг',
    'След ведёт в забытые руины',
    'Ветер приносит запах грозы',
    'Добыча охраняется лучше, чем кажется',
    'Чья-то ложь скоро раскроется',
    'Тайный проход потребует жертвы',
    'Враг пока остаётся невидимым',
    'Испытание начинается без предупреждения'
  ],
  [
    'Судьба оставляет узкую тропу',
    'Случайная встреча изменит маршрут',
    'Старая легенда окажется правдой',
    'Загадка поддастся лишь терпеливым',
    'Неожиданный выбор разделит отряд',
    'Опасность можно обратить в преимущество',
    'Найденный ключ откроет не ту дверь',
    'Незнакомец предложит сомнительную помощь',
    'Потерянное можно вернуть',
    'Решение придётся принять до рассвета'
  ],
  [
    'Весы судьбы замерли в равновесии',
    'Мир внимательно ждёт вашего решения',
    'Ни свет, ни тьма пока не взяли верх',
    'Перед вами открыты два равных пути',
    'Случай вручает чистый лист',
    'Сегодня всё решит не удача, а выбор',
    'Знак можно истолковать двояко',
    'Тишина хранит и угрозу, и обещание',
    'Перекрёсток не подскажет верную дорогу',
    'История готова принять новый поворот'
  ],
  [
    'Попутный ветер наполняет паруса',
    'Нужная улика оказывается рядом',
    'Союзник приходит вовремя',
    'Скрытая дверь поддаётся нажиму',
    'Ваш замысел начинает складываться',
    'Враг допускает заметную ошибку',
    'Дорога становится безопаснее',
    'Доброе слово открывает чужое сердце',
    'Старая услуга возвращается помощью',
    'Удача осторожно идёт рядом'
  ],
  [
    'Судьба благосклонно кивает',
    'Ваш клинок находит слабое место',
    'Тайна сама оставляет подсказку',
    'Надёжный союз уже близок',
    'Препятствие обернётся возможностью',
    'Смелость вдохновит окружающих',
    'Потерянный след снова найден',
    'Вовремя сказанные слова изменят всё',
    'Редкая находка ждёт под рукой',
    'Ваше решение принесёт добрые плоды'
  ],
  [
    'Звёзды выстраиваются в вашу пользу',
    'Великая возможность открывает врата',
    'Даже враги признают вашу силу',
    'Древний артефакт откликается на зов',
    'Союз, казавшийся невозможным, состоится',
    'Слава опережает ваши шаги',
    'Опасность отступает перед решимостью',
    'Скрытая истина становится оружием',
    'Верный выбор изменит судьбу многих',
    'Победа уже различима на горизонте'
  ],
  [
    'Боги наблюдают с явным интересом',
    'Легенда начинает складываться вокруг вас',
    'Невозможный путь становится проходимым',
    'Великий враг впервые чувствует страх',
    'Судьбоносный союз скреплён',
    'Мир запомнит сегодняшний поступок',
    'Древняя сила признаёт достойного',
    'Ваше имя прозвучит в королевских залах',
    'Один смелый шаг спасёт целый край',
    'Триумф почти у вас в руках'
  ],
  [
    'Нити судьбы сияют золотом',
    'Само время уступает вашей воле',
    'Боги открывают дорогу герою',
    'Пророчество исполняется на ваших глазах',
    'Невозможное склоняется перед вами',
    'Короны и драконы запомнят этот день',
    'Ваш поступок станет новой легендой',
    'Свет разгоняет самую древнюю тьму',
    'Мир замирает перед великим свершением',
    'Абсолютный триумф. Судьба принадлежит вам'
  ]
];

const enTiers = [
  ['Doom has raised its blade', 'Darkness has learned your name', 'Fate has barred the door', 'An ancient curse awakens', 'Hope fades in the cold wind', 'The abyss stares back', 'An oath becomes a chain', 'Your enemies hear your step', 'The final torch is dying', 'The world demands a terrible price'],
  ['Trouble stalks your trail', 'An ill omen marks the steel', 'Old debts find their way home', 'A trap waits beyond the next door', 'A foreign whisper enters your dreams', 'Fortune turns away for a moment', 'Shadows gather behind you', 'The surest road hides betrayal', 'The night grows longer than it should', 'Danger is drawing very close'],
  ['The road ahead is veiled in mist', 'The map conceals a vital detail', 'An ally hesitates at the crucial moment', 'The trail leads into forgotten ruins', 'The wind carries the scent of a storm', 'The prize is guarded better than it seems', 'Someone’s lie will soon unravel', 'A secret passage demands a sacrifice', 'The enemy remains unseen', 'The trial begins without warning'],
  ['Fate leaves a narrow path open', 'A chance meeting changes your course', 'An old legend proves true', 'Only patience will solve this riddle', 'An unexpected choice divides the party', 'Danger can still become an advantage', 'The found key opens the wrong door', 'A stranger offers questionable aid', 'What was lost may yet be reclaimed', 'The choice must be made before dawn'],
  ['The scales of fate stand balanced', 'The world waits for your decision', 'Neither light nor darkness has prevailed', 'Two equal roads lie before you', 'Chance offers a blank page', 'Choice, not luck, will decide today', 'The omen admits two meanings', 'Silence holds both threat and promise', 'The crossroads offers no counsel', 'The story awaits a new turn'],
  ['A fair wind fills your sails', 'The needed clue lies close at hand', 'An ally arrives just in time', 'The hidden door yields to pressure', 'Your plan begins to take shape', 'The enemy makes a visible mistake', 'The road ahead grows safer', 'A kind word opens a guarded heart', 'An old favor returns as aid', 'Fortune walks carefully beside you'],
  ['Fate nods with favor', 'Your blade finds the weak point', 'The mystery leaves its own clue', 'A steadfast alliance draws near', 'The obstacle becomes an opportunity', 'Your courage inspires those around you', 'The lost trail appears again', 'Timely words will change everything', 'A rare discovery waits nearby', 'Your choice will bear good fruit'],
  ['The stars align in your favor', 'A great opportunity opens its gates', 'Even enemies acknowledge your strength', 'An ancient artifact answers your call', 'An impossible alliance is forged', 'Glory travels ahead of you', 'Danger retreats before your resolve', 'Hidden truth becomes a weapon', 'The right choice changes many lives', 'Victory is visible on the horizon'],
  ['The gods watch with keen interest', 'A legend begins to form around you', 'The impossible road becomes passable', 'A mighty foe feels fear for the first time', 'A fateful alliance is sealed', 'The world will remember this deed', 'Ancient power recognizes the worthy', 'Your name will echo through royal halls', 'One brave step will save an entire realm', 'Triumph is almost within your grasp'],
  ['The threads of fate shine gold', 'Time itself yields to your will', 'The gods open the hero’s road', 'Prophecy unfolds before your eyes', 'The impossible bows before you', 'Crowns and dragons will remember this day', 'Your deed becomes a new legend', 'Light scatters the oldest darkness', 'The world holds its breath before greatness', 'Absolute triumph. Fate belongs to you']
];

export function getD100FateMessages(locale: Locale) {
  const tiers = locale === 'ru' ? ruTiers : enTiers;
  return tiers.flatMap((tier) => tier.map((message) => `${message}.`));
}
