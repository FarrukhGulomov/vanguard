/* ═══════════════════════════════════════════
   VANGUARD LOGISTICS — main.js
   Redesign: transasia.uz-inspired
═══════════════════════════════════════════ */
'use strict';

/* ─── i18n ─── */
const i18n = {
  ru: {
    'topbar.hours':'Пн–Вс: 24/7',
    'nav.services':'Услуги',
    'nav.routes':'Направления',
    'nav.transport':'Транспорт',
    'nav.warehouse':'Наш склад',
    'nav.about':'О нас',
    'nav.contact':'Контакты',
    'nav.cta':'Оставить заявку',
    'nav.routes.cis':'Узбекистан — СНГ',
    'nav.routes.baltics':'СНГ — Балтика',
    'nav.routes.europe':'Европа',
    'nav.routes.asia':'Юго-Восточная Азия',
    'nav.t1':'Автомобильный',
    'nav.t2':'Железнодорожный',
    'nav.t3':'Морской',
    'nav.t4':'Авиа',
    'hero.badge':'Транспортно-экспедиторская компания',
    'hero.title':'VANGUARD LOGISTICS',
    'hero.subtitle':'Комплексная доставка Ваших грузов',
    'hero.desc':'Международные и локальные перевозки по Узбекистану, СНГ, Европе и Юго-Восточной Азии. Надёжно. Своевременно. Под ключ.',
    'hero.cta1':'Рассчитать стоимость',
    'hero.cta2':'Оставить заявку',
    'hero.f1':'Страховое покрытие KAFOLAT',
    'hero.f2':'24/7 поддержка',
    'hero.f3':'8 лет на рынке',
    'hero.f4':'3000+ ТС',
    'stat.years.label':'лет на рынке',
    'stat.shipments.label':'перевозок',
    'stat.vehicles.label':'транспортных средств',
    'stat.clients.label':'постоянных клиентов',
    'services.label':'Что мы предлагаем',
    'services.title':'Услуги для вашего бизнеса',
    'svc.1.title':'Международные и локальные грузоперевозки',
    'svc.1.desc':'Доставка грузов любого объёма по всей территории Узбекистана и за рубеж. Полный контроль на каждом этапе.',
    'svc.2.title':'Малотоннажные перевозки',
    'svc.2.desc':'Транспортировка небольших партий груза малотоннажным транспортом. Быстро и экономично.',
    'svc.3.title':'Негабаритные и тяжеловесные грузы',
    'svc.3.desc':'Перевозка сложных грузов, требующих специального оборудования и маршрутного сопровождения.',
    'svc.4.title':'Морские, ЖД и авто перевозки',
    'svc.4.desc':'Мультимодальные решения. Подбираем оптимальный маршрут с учётом сроков и стоимости доставки.',
    'svc.5.title':'Таможенное оформление',
    'svc.5.desc':'Полное таможенное сопровождение, декларирование и сертификация. Работаем с любыми видами грузов.',
    'svc.6.title':'Хранение и перетарка контейнеров',
    'svc.6.desc':'Складирование грузов, консолидация и перетарка контейнеров. Ответственное хранение.',
    'svc.7.title':'Внутрипортовое экспедирование',
    'svc.7.desc':'Оформление транзитных грузов, экспедирование в портах и пограничных пунктах пропуска.',
    'svc.8.title':'Перевозка нерудных материалов',
    'svc.8.desc':'Транспортировка сыпучих и строительных материалов. Собственный автопарк и надёжные партнёры.',
    'svc.more':'Подробнее',
    'routes.label':'Куда мы доставляем',
    'routes.title':'Направления перевозок',
    'routes.cta':'Рассчитать маршрут',
    'route.1.title':'Узбекистан — СНГ',
    'route.1.desc':'Казахстан, Россия, Кыргызстан, Таджикистан, Беларусь, Украина',
    'route.1.li1':'Автомобильный транспорт',
    'route.1.li2':'Железная дорога',
    'route.1.li3':'Мультимодальные решения',
    'route.2.title':'СНГ — Балтика — Европа',
    'route.2.desc':'Литва, Латвия, Эстония, Польша, Германия, Турция и другие страны',
    'route.2.li1':'Контейнерные перевозки',
    'route.2.li2':'Сборные грузы',
    'route.2.li3':'Авиаперевозки',
    'route.3.title':'Юго-Восточная Азия',
    'route.3.desc':'Китай, Индия, Южная Корея, Япония, ОАЭ, Турция',
    'route.3.li1':'Морские перевозки',
    'route.3.li2':'Авиагрузы',
    'route.3.li3':'Таможенное оформление',
    'why.label':'Наши преимущества',
    'why.title':'Почему выбирают именно нас',
    'why.sub':'Мы предлагаем полный спектр логистических решений с гарантией качества на каждом этапе',
    'why.1.title':'Надёжность',
    'why.1.li1':'Соблюдаем сроки доставки',
    'why.1.li2':'Полная материальная ответственность',
    'why.1.li3':'Онлайн-контроль груза',
    'why.1.li4':'Страхование грузов KAFOLAT',
    'why.2.title':'Сервис',
    'why.2.li1':'Персональный менеджер',
    'why.2.li2':'Поддержка 24/7',
    'why.2.li3':'Быстрый документооборот (ЭДО)',
    'why.2.li4':'Прозрачное ценообразование',
    'why.3.title':'Ресурсы',
    'why.3.li1':'Собственный автопарк',
    'why.3.li2':'3000+ проверенных ТС',
    'why.3.li3':'Узбекистан — СНГ — Балтика',
    'why.3.li4':'Широкая партнёрская сеть',
    'about.label':'О компании',
    'about.title':'VANGUARD LOGISTICS',
    'about.since':'год основания',
    'about.mstat1':'выполненных перевозок',
    'about.text1':'Ориентирована на активное обслуживание растущей внешней торговли Узбекистана, Казахстана, России, Кыргызстана, Европы и Юго-Восточной Азии.',
    'about.text2':'Наша надёжность, оперативность и высокий уровень сервиса доказаны многими годами работы с внешнеторговыми компаниями, двадцатью пятью тысячами выполненных перевозок и высокой оценкой наших партнёров.',
    'about.text3':'Перевозим грузы всеми видами транспорта, осуществляем таможенное оформление и находим оптимальные решения для ваших логистических задач.',
    'about.m1':'Основание компании в г. Бухара',
    'about.m2':'Контейнерные, рефрижераторные, тентовые, негабаритные перевозки',
    'about.m3':'Выход на рынки Европы и Юго-Восточной Азии',
    'nav.warehouse':'Наш склад',
    'warehouse.label':'Хранение грузов',
    'warehouse.title':'Наш склад',
    'warehouse.sub':'Современный складской комплекс в Ташкенте для хранения, перетарки и консолидации грузов',
    'warehouse.badge':'Складской комплекс',
    'warehouse.stat1':'м² площадь',
    'warehouse.stat2':'охрана и видеонаблюдение',
    'warehouse.stat3':'климат-контроль',
    'warehouse.stat4':'страхование KAFOLAT',
    'warehouse.desc.title':'Надёжное хранение ваших грузов',
    'warehouse.desc.p1':'Наш складской комплекс расположен в Ташкенте и оснащён современным оборудованием для хранения грузов любой категории. Мы предоставляем полный спектр складских услуг — от ответственного хранения до перетарки и консолидации.',
    'warehouse.desc.p2':'Собственный парк погрузочной техники, строгий учёт товаров и страховое покрытие KAFOLAT гарантируют сохранность ваших грузов на каждом этапе.',
    'warehouse.cap1':'Интерьер склада',
    'warehouse.cap2':'Стеллажное хранение',
    'warehouse.cap3':'Погрузочная техника',
    'warehouse.cap4':'Зона погрузки',
    'warehouse.location':'г. Ташкент, Яккасарайский район',
    'warehouse.cta':'Оставить заявку на склад',
    'warehouse.f1.title':'Большая площадь',
    'warehouse.f1.desc':'5 000 м² — вместительный склад для хранения грузов любого объёма',
    'warehouse.f2.title':'Климат-контроль',
    'warehouse.f2.desc':'Температурный режим 0–25°C для хранения чувствительных грузов',
    'warehouse.f3.title':'Охрана 24/7',
    'warehouse.f3.desc':'Круглосуточная охранная служба и система видеонаблюдения',
    'warehouse.f4.title':'Погрузочная техника',
    'warehouse.f4.desc':'Современные вилочные погрузчики и складское оборудование',
    'warehouse.f5.title':'Перетарка и упаковка',
    'warehouse.f5.desc':'Консолидация, переупаковка и маркировка грузов на месте',
    'warehouse.f6.title':'Ответственное хранение',
    'warehouse.f6.desc':'Полная материальная ответственность и страхование KAFOLAT',
    'warehouse.net.title':'Наша складская сеть',
    'warehouse.net.uz':'Узбекистан',
    'warehouse.net.by':'Беларусь',
    'warehouse.net.lv':'Латвия',
    'warehouse.net.lt':'Литва',
    'warehouse.net.pl':'Польша',
    'warehouse.net.bonded':'Режимный',
    'warehouse.net.open':'Безрежимный',
    'calc.title':'Узнайте стоимость перевозки прямо сейчас',
    'calc.desc':'Оставьте заявку — менеджер рассчитает стоимость и свяжется с вами в течение 30 минут.',
    'calc.btn':'Рассчитать стоимость',
    'contact.label':'Свяжитесь с нами',
    'contact.title':'Оставить заявку',
    'contact.sub':'Заполните форму или позвоните нам — мы ответим в течение 30 минут',
    'contact.phone':'Телефон',
    'contact.email':'Email',
    'contact.address':'Адрес',
    'contact.address.val':'г. Ташкент, Яккасарайский район, МФЙ имени Абдуллы Каххара, ул. Бобура, д. 63, кв. 18',
    'contact.hours':'Режим работы',
    'contact.hours.val':'24/7 — Всегда на связи',
    'form.title':'Оставьте заявку',
    'form.name':'Имя *',
    'form.name.ph':'Ваше имя',
    'form.phone':'Телефон *',
    'form.email':'Email',
    'form.company':'Компания',
    'form.company.ph':'ООО Компания',
    'form.service':'Услуга',
    'form.service.ph':'Выберите услугу',
    'form.message':'Сообщение',
    'form.message.ph':'Опишите ваш груз, маршрут, сроки...',
    'form.submit':'Отправить заявку',
    'form.success':'Заявка принята! Мы свяжемся с вами в ближайшее время.',
    'form.err.phone':'Введите корректный номер телефона (только цифры)',
    'form.err.email':'Введите корректный email адрес',
    'modal.title':'Рассчитать стоимость',
    'modal.desc':'Заполните форму — мы рассчитаем и свяжемся с вами',
    'modal.company.ph':'Название компании',
    'modal.name.ph':'Ваше имя',
    'modal.email.ph':'E-mail',
    'modal.extra':'Дополнительная информация',
    'modal.extra.ph':'Тип груза, объемы и направление доставки',
    'modal.consent.pre':'Я даю согласие на обработку персональных данных в соответствии с ',
    'modal.consent.link':'"Политикой конфиденциальности"',
    'modal.consent.post':' сайта',
    'modal.submit':'Отправить',
    'footer.tagline':'Транспортно-экспедиторская компания. Комплексная доставка Ваших грузов.',
    'footer.services':'Услуги',
    'footer.directions':'Направления',
    'footer.contacts':'Контакты',
    'footer.rights':'Все права защищены.',
  },
  uz: {
    'topbar.hours':'Du–Ya: 24/7',
    'nav.services':'Xizmatlar',
    'nav.routes':'Yo\'nalishlar',
    'nav.transport':'Transport',
    'nav.about':'Biz haqimizda',
    'nav.contact':'Aloqa',
    'nav.cta':'Ariza qoldirish',
    'nav.routes.cis':'O\'zbekiston — MDH',
    'nav.routes.baltics':'MDH — Baltika',
    'nav.routes.europe':'Yevropa',
    'nav.routes.asia':'Janubi-Sharqiy Osiyo',
    'nav.t1':'Avtomobil',
    'nav.t2':'Temir yo\'l',
    'nav.t3':'Dengiz',
    'nav.t4':'Havo',
    'hero.badge':'Transport-ekspeditorlik kompaniyasi',
    'hero.title':'VANGUARD LOGISTICS',
    'hero.subtitle':'Yuklaringizni kompleks yetkazib berish',
    'hero.desc':'O\'zbekiston, MDH, Yevropa va Janubi-Sharqiy Osiyo bo\'ylab xalqaro va mahalliy tashish. Ishonchli. O\'z vaqtida. Kalit ostida.',
    'hero.cta1':'Narxni hisoblash',
    'hero.cta2':'Ariza qoldirish',
    'hero.f1':'KAFOLAT sug\'urta qoplamasi',
    'hero.f2':'24/7 qo\'llab-quvvatlash',
    'hero.f3':'8 yil bozorda',
    'hero.f4':'3000+ TS',
    'stat.years.label':'yil bozorda',
    'stat.shipments.label':'tashish',
    'stat.vehicles.label':'transport vositalar',
    'stat.clients.label':'doimiy mijozlar',
    'services.label':'Biz nima taklif qilamiz',
    'services.title':'Biznesingiz uchun xizmatlar',
    'svc.1.title':'Xalqaro va mahalliy yuk tashish',
    'svc.1.desc':'O\'zbekiston va xorijga istalgan hajmdagi yukni yetkazib berish.',
    'svc.2.title':'Yengil yuk tashish',
    'svc.2.desc':'Kichik partiya yuklarni yengil transport vositalarida tashish.',
    'svc.3.title':'Og\'ir va o\'lchamdan tashqari yuklar',
    'svc.3.desc':'Maxsus uskunalar talab qiluvchi murakkab yuklarni tashish.',
    'svc.4.title':'Dengiz, temir yo\'l va avtomobil tashish',
    'svc.4.desc':'Multimodal yechimlar. Optimal marshrut tanlaymiz.',
    'svc.5.title':'Bojxona rasmiylashtiruvi',
    'svc.5.desc':'To\'liq bojxona hamrohligi va sertifikatlash.',
    'svc.6.title':'Konteyner saqlash va qayta yuklash',
    'svc.6.desc':'Yuk saqlash, konsolidatsiya va qayta yuklash.',
    'svc.7.title':'Port ichidagi ekspeditorlik',
    'svc.7.desc':'Tranzit yuklarni rasmiylashtirish.',
    'svc.8.title':'Qurilish materiallari tashish',
    'svc.8.desc':'Ko\'chmas va qurilish materiallarini tashish.',
    'svc.more':'Batafsil',
    'routes.label':'Biz qayerga yetkazamiz',
    'routes.title':'Tashish yo\'nalishlari',
    'routes.cta':'Marshrutni hisoblash',
    'route.1.title':'O\'zbekiston — MDH',
    'route.1.desc':'Qozog\'iston, Rossiya, Qirg\'iziston, Tojikiston, Belarus, Ukraina',
    'route.1.li1':'Avtomobil transporti',
    'route.1.li2':'Temir yo\'l',
    'route.1.li3':'Multimodal yechimlar',
    'route.2.title':'MDH — Baltika — Yevropa',
    'route.2.desc':'Litva, Latviya, Estoniya, Polsha, Germaniya, Turkiya',
    'route.2.li1':'Konteyner tashish',
    'route.2.li2':'Yig\'ma yuklar',
    'route.2.li3':'Havo tashish',
    'route.3.title':'Janubi-Sharqiy Osiyo',
    'route.3.desc':'Xitoy, Hindiston, Janubiy Koreya, Yaponiya, BAA, Turkiya',
    'route.3.li1':'Dengiz tashish',
    'route.3.li2':'Havo yuklar',
    'route.3.li3':'Bojxona rasmiylashtiruvi',
    'why.label':'Bizning ustunliklarimiz',
    'why.title':'Nima uchun aynan bizni tanlashadi',
    'why.sub':'Har bosqichda sifat kafolati bilan to\'liq logistika yechimlarini taqdim etamiz',
    'why.1.title':'Ishonchlilik',
    'why.1.li1':'Yetkazib berish muddatlarini saqlaymiz',
    'why.1.li2':'To\'liq moddiy javobgarlik',
    'why.1.li3':'Yukni onlayn nazorat qilish',
    'why.1.li4':'KAFOLAT yuk sug\'urtasi',
    'why.2.title':'Xizmat',
    'why.2.li1':'Shaxsiy menejer',
    'why.2.li2':'24/7 qo\'llab-quvvatlash',
    'why.2.li3':'Tez hujjat aylanmasi (EDO)',
    'why.2.li4':'Shaffof narx belgilash',
    'why.3.title':'Resurslar',
    'why.3.li1':'O\'z avtoparkimiz',
    'why.3.li2':'3000+ tekshirilgan TS',
    'why.3.li3':'O\'zbekiston — MDH — Baltika',
    'why.3.li4':'Keng hamkorlar tarmog\'i',
    'about.label':'Kompaniya haqida',
    'about.title':'VANGUARD LOGISTICS',
    'about.since':'tashkil etilgan yil',
    'about.mstat1':'bajarilgan tashishlar',
    'about.text1':'O\'zbekiston, Qozog\'iston, Rossiya, Qirg\'iziston, Yevropa va Janubi-Sharqiy Osiyoning o\'sib borayotgan tashqi savdosini faol xizmat ko\'rsatishga yo\'naltirilgan.',
    'about.text2':'Bizning ishonchliligimiz ko\'p yillik ish tajribasi va yigirma besh ming bajarilgan tashishlar bilan isbotlangan.',
    'about.text3':'Barcha transport turlari bilan yuk tashiymiz va logistika vazifalaringiz uchun optimal yechimlar topamiz.',
    'about.m1':'Buxoro shahrida kompaniyaning tashkil etilishi',
    'about.m2':'Konteyner, refrijerator, tent, o\'lchamdan tashqari tashish',
    'about.m3':'Yevropa va Janubi-Sharqiy Osiyo bozorlariga chiqish',
    'nav.warehouse':'Bizning ombor',
    'warehouse.label':'Yuk saqlash',
    'warehouse.title':'Bizning ombor',
    'warehouse.sub':'Toshkentdagi zamonaviy omborxona — yuklarni saqlash, qayta yuklash va konsolidatsiya uchun',
    'warehouse.badge':'Omborxona kompleksi',
    'warehouse.stat1':'m² maydon',
    'warehouse.stat2':'qo\'riqlov va videokuzatuv',
    'warehouse.stat3':'iqlim nazorati',
    'warehouse.stat4':'KAFOLAT sug\'urtasi',
    'warehouse.desc.title':'Yuklaringizni ishonchli saqlash',
    'warehouse.desc.p1':'Omborxonamiz Toshkentda joylashgan bo\'lib, har qanday turdagi yuklarni saqlash uchun zamonaviy uskunalar bilan jihozlangan. Biz mas\'uliyatli saqlashdan tortib qayta yuklash va konsolidatsiyagacha to\'liq xizmatlar ko\'rsatamiz.',
    'warehouse.desc.p2':'O\'z yuklash texnikamiz, qat\'iy tovar hisobi va KAFOLAT sug\'urta qoplamasi har bosqichda yuklaringizning xavfsizligini kafolatlaydi.',
    'warehouse.cap1':'Ombor ichki ko\'rinishi',
    'warehouse.cap2':'Stellaj saqlash',
    'warehouse.cap3':'Yuklash texnikasi',
    'warehouse.cap4':'Yuklash zonasi',
    'warehouse.location':'Toshkent sh., Yakkasaroy tumani',
    'warehouse.cta':'Ombor uchun ariza qoldirish',
    'warehouse.f1.title':'Katta maydon',
    'warehouse.f1.desc':'5 000 m² — har hajmdagi yuklarni saqlash uchun sig\'imli omborxona',
    'warehouse.f2.title':'Iqlim nazorati',
    'warehouse.f2.desc':'Nozik yuklarni saqlash uchun 0–25°C harorat rejimi',
    'warehouse.f3.title':'24/7 qo\'riqlov',
    'warehouse.f3.desc':'Kechayu kunduz qo\'riqlov xizmati va videokuzatuv tizimi',
    'warehouse.f4.title':'Yuklash texnikasi',
    'warehouse.f4.desc':'Zamonaviy vilkali yuklagichlar va ombor uskunalari',
    'warehouse.f5.title':'Qayta yuklash va qadoqlash',
    'warehouse.f5.desc':'Konsolidatsiya, qayta qadoqlash va yuklarni belgilash',
    'warehouse.f6.title':'Mas\'uliyatli saqlash',
    'warehouse.f6.desc':'To\'liq moddiy javobgarlik va KAFOLAT sug\'urtasi',
    'warehouse.net.title':'Bizning omborxona tarmog\'imiz',
    'warehouse.net.uz':'O\'zbekiston',
    'warehouse.net.by':'Belarus',
    'warehouse.net.lv':'Latviya',
    'warehouse.net.lt':'Litva',
    'warehouse.net.pl':'Polsha',
    'warehouse.net.bonded':'Rejimli',
    'warehouse.net.open':'Rejimsiz',
    'calc.title':'Tashish narxini hoziroq bilib oling',
    'calc.desc':'Ariza qoldiring — menejer 30 daqiqa ichida siz bilan bog\'lanadi.',
    'calc.btn':'Narxni hisoblash',
    'contact.label':'Biz bilan bog\'laning',
    'contact.title':'Ariza qoldirish',
    'contact.sub':'Formani to\'ldiring yoki qo\'ng\'iroq qiling — 30 daqiqada javob beramiz',
    'contact.phone':'Telefon',
    'contact.email':'Email',
    'contact.address':'Manzil',
    'contact.address.val':'Toshkent sh., Yakkasaroy tumani, Abdulla Qahhor nomidagi MFY, Bobur ko\'chasi, 63-uy, 18-xonadon',
    'contact.hours':'Ish rejimi',
    'contact.hours.val':'24/7 — Har doim aloqadamiz',
    'form.title':'Ariza qoldiring',
    'form.name':'Ism *',
    'form.name.ph':'Ismingiz',
    'form.phone':'Telefon *',
    'form.email':'Email',
    'form.company':'Kompaniya',
    'form.company.ph':'MChJ Kompaniya',
    'form.service':'Xizmat',
    'form.service.ph':'Xizmatni tanlang',
    'form.message':'Xabar',
    'form.message.ph':'Yukingiz, marshrut, muddatlar haqida...',
    'form.submit':'Ariza yuborish',
    'form.success':'Ariza qabul qilindi! Tez orada siz bilan bog\'lanamiz.',
    'form.err.phone':'To\'g\'ri telefon raqamini kiriting (faqat raqamlar)',
    'form.err.email':'To\'g\'ri email manzilini kiriting',
    'modal.title':'Narxni hisoblash',
    'modal.desc':'Formani to\'ldiring — narxni hisoblab, siz bilan bog\'lanamiz',
    'modal.company.ph':'Kompaniya nomi',
    'modal.name.ph':'Ismingiz',
    'modal.email.ph':'E-mail',
    'modal.extra':'Qo\'shimcha ma\'lumot',
    'modal.extra.ph':'Yuk turi, hajmi va yetkazish yo\'nalishi',
    'modal.consent.pre':'Sayt ',
    'modal.consent.link':'"Maxfiylik siyosati"',
    'modal.consent.post':'ga muvofiq shaxsiy ma\'lumotlarni qayta ishlashga roziman',
    'modal.submit':'Yuborish',
    'footer.tagline':'Transport-ekspeditorlik kompaniyasi. Yuklaringizni kompleks yetkazib berish.',
    'footer.services':'Xizmatlar',
    'footer.directions':'Yo\'nalishlar',
    'footer.contacts':'Aloqa',
    'footer.rights':'Barcha huquqlar himoyalangan.',
  },
  en: {
    'topbar.hours':'Mon–Sun: 24/7',
    'nav.services':'Services',
    'nav.routes':'Directions',
    'nav.transport':'Transport',
    'nav.about':'About Us',
    'nav.contact':'Contact',
    'nav.cta':'Get a Quote',
    'nav.routes.cis':'Uzbekistan — CIS',
    'nav.routes.baltics':'CIS — Baltics',
    'nav.routes.europe':'Europe',
    'nav.routes.asia':'Southeast Asia',
    'nav.t1':'Road',
    'nav.t2':'Railway',
    'nav.t3':'Sea',
    'nav.t4':'Air',
    'hero.badge':'Transport & Forwarding Company',
    'hero.title':'VANGUARD LOGISTICS',
    'hero.subtitle':'Comprehensive Cargo Delivery',
    'hero.desc':'International and local freight across Uzbekistan, CIS, Europe and Southeast Asia. Reliable. On time. Turnkey.',
    'hero.cta1':'Get a Quote',
    'hero.cta2':'Leave a Request',
    'hero.f1':'KAFOLAT Insurance Coverage',
    'hero.f2':'24/7 Support',
    'hero.f3':'8 Years in Business',
    'hero.f4':'3000+ Vehicles',
    'stat.years.label':'years in business',
    'stat.shipments.label':'shipments',
    'stat.vehicles.label':'verified vehicles',
    'stat.clients.label':'regular clients',
    'services.label':'What we offer',
    'services.title':'Services for Your Business',
    'svc.1.title':'International & Local Freight',
    'svc.1.desc':'Delivery of any cargo volume across Uzbekistan and internationally.',
    'svc.2.title':'LTL Freight',
    'svc.2.desc':'Transportation of small cargo batches. Fast and cost-effective.',
    'svc.3.title':'Oversized & Heavy Cargo',
    'svc.3.desc':'Complex cargo requiring special equipment and escort.',
    'svc.4.title':'Sea, Rail & Road Transport',
    'svc.4.desc':'Multimodal solutions for optimal delivery.',
    'svc.5.title':'Customs Clearance',
    'svc.5.desc':'Full customs support, declaration and certification.',
    'svc.6.title':'Container Storage',
    'svc.6.desc':'Cargo storage, consolidation and trans-shipment.',
    'svc.7.title':'Port Forwarding',
    'svc.7.desc':'Processing transit cargo at ports and border crossings.',
    'svc.8.title':'Construction Materials',
    'svc.8.desc':'Bulk and construction material transport.',
    'svc.more':'Learn More',
    'routes.label':'Where we deliver',
    'routes.title':'Freight Directions',
    'routes.cta':'Calculate Route',
    'route.1.title':'Uzbekistan — CIS',
    'route.1.desc':'Kazakhstan, Russia, Kyrgyzstan, Tajikistan, Belarus, Ukraine',
    'route.1.li1':'Road Transport',
    'route.1.li2':'Railway',
    'route.1.li3':'Multimodal Solutions',
    'route.2.title':'CIS — Baltics — Europe',
    'route.2.desc':'Lithuania, Latvia, Estonia, Poland, Germany, Turkey',
    'route.2.li1':'Container Shipping',
    'route.2.li2':'Groupage Cargo',
    'route.2.li3':'Air Freight',
    'route.3.title':'Southeast Asia',
    'route.3.desc':'China, India, South Korea, Japan, UAE, Turkey',
    'route.3.li1':'Sea Freight',
    'route.3.li2':'Air Cargo',
    'route.3.li3':'Customs Clearance',
    'why.label':'Our Advantages',
    'why.title':'Why Choose Us',
    'why.sub':'We offer a full range of logistics solutions with quality guarantees at every stage',
    'why.1.title':'Reliability',
    'why.1.li1':'We meet delivery deadlines',
    'why.1.li2':'Full material responsibility',
    'why.1.li3':'Online cargo tracking',
    'why.1.li4':'KAFOLAT cargo insurance',
    'why.2.title':'Service',
    'why.2.li1':'Personal manager',
    'why.2.li2':'24/7 support',
    'why.2.li3':'Fast document workflow',
    'why.2.li4':'Transparent pricing',
    'why.3.title':'Resources',
    'why.3.li1':'Own vehicle fleet',
    'why.3.li2':'3000+ verified vehicles',
    'why.3.li3':'Uzbekistan — CIS — Baltics',
    'why.3.li4':'Wide partner network',
    'about.label':'About the Company',
    'about.title':'VANGUARD LOGISTICS',
    'about.since':'founded',
    'about.mstat1':'completed shipments',
    'about.text1':'Focused on actively serving the growing foreign trade of Uzbekistan, Kazakhstan, Russia, Kyrgyzstan, Europe and Southeast Asia.',
    'about.text2':'Our reliability and high service level have been proven by years of work and 25,000 completed shipments.',
    'about.text3':'We transport cargo by all types of transport and find optimal logistics solutions for your tasks.',
    'about.m1':'Company founded in Bukhara',
    'about.m2':'Container, refrigerated, tarpaulin, oversized transport',
    'about.m3':'Entry into European and Southeast Asian markets',
    'nav.warehouse':'Our Warehouse',
    'warehouse.label':'Cargo Storage',
    'warehouse.title':'Our Warehouse',
    'warehouse.sub':'Modern warehouse complex in Tashkent for storage, trans-shipment and cargo consolidation',
    'warehouse.badge':'Warehouse Complex',
    'warehouse.stat1':'m² area',
    'warehouse.stat2':'security & CCTV',
    'warehouse.stat3':'climate control',
    'warehouse.stat4':'KAFOLAT insurance',
    'warehouse.desc.title':'Reliable Storage for Your Cargo',
    'warehouse.desc.p1':'Our warehouse complex is located in Tashkent and equipped with modern facilities for storing all types of cargo. We provide a full range of warehouse services — from responsible storage to trans-shipment and consolidation.',
    'warehouse.desc.p2':'Our own fleet of loading equipment, strict inventory control and KAFOLAT insurance coverage guarantee the safety of your cargo at every stage.',
    'warehouse.cap1':'Warehouse Interior',
    'warehouse.cap2':'Rack Storage',
    'warehouse.cap3':'Loading Equipment',
    'warehouse.cap4':'Loading Bay',
    'warehouse.location':'Tashkent, Yakkasaray district',
    'warehouse.cta':'Request Warehouse Service',
    'warehouse.f1.title':'Large Area',
    'warehouse.f1.desc':'5,000 m² — spacious warehouse for storing cargo of any volume',
    'warehouse.f2.title':'Climate Control',
    'warehouse.f2.desc':'Temperature range 0–25°C for storing sensitive cargo',
    'warehouse.f3.title':'24/7 Security',
    'warehouse.f3.desc':'Round-the-clock security service and CCTV surveillance system',
    'warehouse.f4.title':'Loading Equipment',
    'warehouse.f4.desc':'Modern forklifts and warehouse machinery',
    'warehouse.f5.title':'Trans-shipment & Packing',
    'warehouse.f5.desc':'Consolidation, repackaging and cargo labelling on-site',
    'warehouse.f6.title':'Responsible Storage',
    'warehouse.f6.desc':'Full material liability and KAFOLAT insurance coverage',
    'warehouse.net.title':'Our Warehouse Network',
    'warehouse.net.uz':'Uzbekistan',
    'warehouse.net.by':'Belarus',
    'warehouse.net.lv':'Latvia',
    'warehouse.net.lt':'Lithuania',
    'warehouse.net.pl':'Poland',
    'warehouse.net.bonded':'Bonded',
    'warehouse.net.open':'Non-bonded',
    'calc.title':'Find out the shipping cost right now',
    'calc.desc':'Leave a request — a manager will calculate and contact you within 30 minutes.',
    'calc.btn':'Calculate Cost',
    'contact.label':'Get in Touch',
    'contact.title':'Leave a Request',
    'contact.sub':'Fill the form or call us — we respond within 30 minutes',
    'contact.phone':'Phone',
    'contact.email':'Email',
    'contact.address':'Address',
    'contact.address.val':'Tashkent, Yakkasaray district, Bobura St., 63, apt. 18',
    'contact.hours':'Working Hours',
    'contact.hours.val':'24/7 — Always available',
    'form.title':'Leave a Request',
    'form.name':'Name *',
    'form.name.ph':'Your name',
    'form.phone':'Phone *',
    'form.email':'Email',
    'form.company':'Company',
    'form.company.ph':'LLC Company',
    'form.service':'Service',
    'form.service.ph':'Select a service',
    'form.message':'Message',
    'form.message.ph':'Describe your cargo, route, deadlines...',
    'form.submit':'Send Request',
    'form.success':'Request received! We will contact you shortly.',
    'form.err.phone':'Please enter a valid phone number (digits only)',
    'form.err.email':'Please enter a valid email address',
    'modal.title':'Calculate Cost',
    'modal.desc':'Fill the form — we will calculate and contact you',
    'modal.company.ph':'Company Name',
    'modal.name.ph':'Your Name',
    'modal.email.ph':'E-mail',
    'modal.extra':'Additional Information',
    'modal.extra.ph':'Cargo type, volume and delivery direction',
    'modal.consent.pre':'I agree to the processing of personal data per the ',
    'modal.consent.link':'"Privacy Policy"',
    'modal.consent.post':' of this site',
    'modal.submit':'Send',
    'footer.tagline':'Transport & Forwarding Company. Comprehensive cargo delivery.',
    'footer.services':'Services',
    'footer.directions':'Directions',
    'footer.contacts':'Contacts',
    'footer.rights':'All rights reserved.',
  }
};

/* ─── State ─── */
let currentLang = localStorage.getItem('vg_lang') || 'ru';
let countersStarted = false;

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang(currentLang);
  initHeader();
  initBurger();
  initNavDropdowns();
  initLangSwitchers();
  initSmoothScroll();
  initScrollSpy();
  initScrollTop();
  initForms();
  initCountryPicker();
  initAOS();
  initCounters();
  initServiceSlider();
});

/* ─── Language ─── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('vg_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang]?.[key];
    if (val === undefined) return;
    // preserve icon children
    const icons = [...el.querySelectorAll('i')];
    el.textContent = val;
    icons.forEach(ic => el.appendChild(ic));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = i18n[lang]?.[el.dataset.i18nPh];
    if (val) el.placeholder = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function initLangSwitchers() {
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.lang))
  );
}

/* ─── Header scroll ─── */
function initHeader() {
  const h = document.getElementById('header');
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', scrollY > 40), {passive:true});
}

/* ─── Burger ─── */
function initBurger() {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  let overlay = null;

  const close = () => {
    nav.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
    overlay?.remove(); overlay = null;
  };

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      overlay = Object.assign(document.createElement('div'), {onclick: close});
      Object.assign(overlay.style, {position:'fixed',inset:'0',zIndex:'997',background:'rgba(0,0,0,.5)'});
      document.body.appendChild(overlay);
    } else { overlay?.remove(); overlay = null; }
  });

  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ─── Nav Dropdowns (mobile toggle) ─── */
function initNavDropdowns() {
  document.querySelectorAll('.nav__item--dropdown').forEach(item => {
    item.querySelector('.nav__link--drop').addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });
}

/* ─── Smooth Scroll ─── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      const off = document.getElementById('header').offsetHeight + 12;
      window.scrollTo({top: t.getBoundingClientRect().top + scrollY - off, behavior:'smooth'});
    });
  });
}

/* ─── Scroll Spy ─── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__link');
  window.addEventListener('scroll', () => {
    const off = document.getElementById('header').offsetHeight + 60;
    let cur = '';
    sections.forEach(s => { if (scrollY >= s.offsetTop - off) cur = s.id; });
    links.forEach(l => {
      const h = l.getAttribute('href')?.replace('#','');
      l.classList.toggle('active', h === cur);
    });
  }, {passive:true});
}

/* ─── Scroll Top ─── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', scrollY > 500), {passive:true});
  btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
}

/* ─── Country Picker ─── */
function initCountryPicker() {
  const picker  = document.getElementById('countryPicker');
  const btn     = document.getElementById('countryBtn');
  const search  = document.getElementById('countrySearch');
  const list    = document.getElementById('countryList');
  const flagEl  = document.getElementById('selectedFlag');
  const codeEl  = document.getElementById('selectedCode');
  const hidden  = document.getElementById('phoneCode');
  if (!btn) return;

  const COUNTRIES = [
    { flag:'🇺🇿', name:'Uzbekistan',      code:'+998' },
    { flag:'🇷🇺', name:'Russia',           code:'+7'   },
    { flag:'🇰🇿', name:'Kazakhstan',       code:'+7'   },
    { flag:'🇰🇬', name:'Kyrgyzstan',       code:'+996' },
    { flag:'🇹🇯', name:'Tajikistan',       code:'+992' },
    { flag:'🇹🇲', name:'Turkmenistan',     code:'+993' },
    { flag:'🇦🇿', name:'Azerbaijan',       code:'+994' },
    { flag:'🇬🇪', name:'Georgia',          code:'+995' },
    { flag:'🇦🇲', name:'Armenia',          code:'+374' },
    { flag:'🇧🇾', name:'Belarus',          code:'+375' },
    { flag:'🇺🇦', name:'Ukraine',          code:'+380' },
    { flag:'🇲🇩', name:'Moldova',          code:'+373' },
    { flag:'🇱🇹', name:'Lithuania',        code:'+370' },
    { flag:'🇱🇻', name:'Latvia',           code:'+371' },
    { flag:'🇪🇪', name:'Estonia',          code:'+372' },
    { flag:'🇵🇱', name:'Poland',           code:'+48'  },
    { flag:'🇩🇪', name:'Germany',          code:'+49'  },
    { flag:'🇹🇷', name:'Turkey',           code:'+90'  },
    { flag:'🇨🇳', name:'China',            code:'+86'  },
    { flag:'🇰🇷', name:'South Korea',      code:'+82'  },
    { flag:'🇯🇵', name:'Japan',            code:'+81'  },
    { flag:'🇮🇳', name:'India',            code:'+91'  },
    { flag:'🇦🇪', name:'UAE',              code:'+971' },
    { flag:'🇬🇧', name:'United Kingdom',   code:'+44'  },
    { flag:'🇺🇸', name:'USA',              code:'+1'   },
  ];

  let selected = COUNTRIES[0];

  const renderList = (filter = '') => {
    const q = filter.toLowerCase();
    const items = filter
      ? COUNTRIES.filter(c => c.name.toLowerCase().includes(q) || c.code.includes(filter))
      : COUNTRIES;
    list.innerHTML = items.map(c => `
      <li class="mform__country-item${c === selected ? ' active' : ''}"
          data-code="${c.code}" data-flag="${c.flag}" data-name="${c.name}">
        <span class="mci-flag">${c.flag}</span>
        <span class="mci-name">${c.name}</span>
        <span class="mci-code">${c.code}</span>
      </li>`).join('');

    list.querySelectorAll('.mform__country-item').forEach(item => {
      item.addEventListener('click', () => {
        selected = { flag: item.dataset.flag, name: item.dataset.name, code: item.dataset.code };
        flagEl.textContent = selected.flag;
        codeEl.textContent = selected.code;
        hidden.value = selected.code;
        closeDrop();
        document.getElementById('phoneInput')?.focus();
      });
    });
  };

  const openDrop  = () => { picker.classList.add('open'); renderList(); setTimeout(() => search.focus(), 50); };
  const closeDrop = () => { picker.classList.remove('open'); search.value = ''; };

  btn.addEventListener('click', e => { e.stopPropagation(); picker.classList.contains('open') ? closeDrop() : openDrop(); });
  search.addEventListener('input', () => renderList(search.value));
  search.addEventListener('keydown', e => e.key === 'Escape' && closeDrop());
  document.addEventListener('click', e => { if (!picker.contains(e.target)) closeDrop(); });

  renderList();
}

/* ─── Modal ─── */
function openModal() {
  document.getElementById('calcModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('calcModal').classList.remove('open');
  document.body.style.overflow = '';
}
// Event-listener based (avoids inline onclick CSP issues)
document.addEventListener('click', function(e) {
  if (e.target.closest('[data-open-modal]')) openModal();
  if (e.target.closest('[data-close-modal]')) closeModal();
});
document.addEventListener('keydown', e => e.key === 'Escape' && closeModal());

/* ─── Forms ─── */
function initForms() {
  const cf = document.getElementById('contactForm');
  if (cf) cf.addEventListener('submit', async e => {
    e.preventDefault();
    await handleSubmit(cf, 'formSubmit', 'formSuccess', 'formError');
  });

  const mf = document.getElementById('modalForm');
  if (mf) mf.addEventListener('submit', async e => {
    e.preventDefault();
    // Prepend +998 to the no-mask phone field before submitting
    const ph = mf.querySelector('input[data-no-mask]');
    if (ph && ph.value && !ph.value.startsWith('+')) ph.value = '+998' + ph.value.replace(/\D/g,'');
    await handleSubmit(mf, null, 'modalSuccess', null, true);
  });

  // Phone mask
  document.querySelectorAll('input[type=tel]:not([data-no-mask])').forEach(inp => {
    inp.addEventListener('input', () => {
      let v = inp.value.replace(/\D/g,'');
      if (!inp.value.startsWith('+')) v = (v.startsWith('998') ? '+' : '+998') + v;
      else v = '+' + v;
      inp.value = v.slice(0,13);
    });
  });

  // Phone: strip non-digits on input (allow leading +)
  const cfPhone = document.getElementById('cfPhone');
  if (cfPhone) {
    cfPhone.addEventListener('input', () => {
      const pos = cfPhone.selectionStart;
      const raw = cfPhone.value;
      const cleaned = raw.replace(/[^\d+\s\-()]/g, '');
      if (cleaned !== raw) {
        cfPhone.value = cleaned;
        cfPhone.setSelectionRange(pos - 1, pos - 1);
      }
      clearFieldErr('cfPhoneErr');
    });
    cfPhone.addEventListener('blur', () => validatePhone(cfPhone));
  }

  // Email: validate on blur
  const cfEmail = document.getElementById('cfEmail');
  if (cfEmail) {
    cfEmail.addEventListener('input', () => clearFieldErr('cfEmailErr'));
    cfEmail.addEventListener('blur', () => {
      if (cfEmail.value.trim()) validateEmail(cfEmail);
    });
  }
}

function clearFieldErr(id) {
  const el = document.getElementById(id);
  if (el) { el.textContent = ''; el.style.display = 'none'; }
}

function showFieldErr(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function validatePhone(inp) {
  const digits = (inp.value || '').replace(/\D/g, '');
  if (digits.length < 7) {
    const msg = i18n[currentLang]?.['form.err.phone'] || 'Invalid phone number';
    showFieldErr('cfPhoneErr', msg);
    return false;
  }
  clearFieldErr('cfPhoneErr');
  return true;
}

function validateEmail(inp) {
  const v = (inp.value || '').trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  if (!ok) {
    const msg = i18n[currentLang]?.['form.err.email'] || 'Invalid email address';
    showFieldErr('cfEmailErr', msg);
    return false;
  }
  clearFieldErr('cfEmailErr');
  return true;
}

async function handleSubmit(form, btnId, successId, errorId, isModal=false) {
  // Frontend validation
  const phoneInp = form.querySelector('#cfPhone');
  const emailInp = form.querySelector('#cfEmail');
  let valid = true;
  if (phoneInp && !validatePhone(phoneInp)) valid = false;
  if (emailInp && emailInp.value.trim() && !validateEmail(emailInp)) valid = false;
  if (!valid) return;

  const btn = btnId ? document.getElementById(btnId) : form.querySelector('button[type=submit]');
  const successEl = document.getElementById(successId);
  const errorEl = errorId ? document.getElementById(errorId) : null;
  const orig = btn.innerHTML;

  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  btn.disabled = true;
  if (errorEl) errorEl.style.display = 'none';
  successEl.style.display = 'none';

  const data = {};
  new FormData(form).forEach((v,k) => data[k] = v);
  data.lang = currentLang;

  try {
    const res = await fetch('/api/contact', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Error');
    successEl.style.display = 'flex';
    form.reset();
    if (isModal) setTimeout(() => { closeModal(); successEl.style.display='none'; }, 3200);
  } catch(err) {
    if (errorEl) { errorEl.textContent = err.message; errorEl.style.display = 'block'; }
  } finally {
    btn.innerHTML = orig;
    btn.disabled = false;
  }
}

/* ─── AOS ─── */
function initAOS() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const d = parseInt(en.target.dataset.aosDelay || 0);
      setTimeout(() => en.target.classList.add('aos-animate'), d);
      obs.unobserve(en.target);
    });
  }, {threshold:.1, rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el));
}

/* ─── Counter ─── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    if (!entries.some(e => e.isIntersecting) || countersStarted) return;
    countersStarted = true;
    document.querySelectorAll('.counter').forEach(el => {
      const target = +el.dataset.target;
      const dur = 2000, step = target / (dur / 16);
      let cur = 0;
      const tick = () => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString('ru');
        if (cur < target) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString('ru');
      };
      requestAnimationFrame(tick);
    });
  }, {threshold:.3});
  const s = document.querySelector('.stats');
  if (s) obs.observe(s);
}

/* ─── Service Slider ─── */
function initServiceSlider() {
  const track = document.getElementById('svcTrack');
  const slider = document.getElementById('svcSlider');
  const prevBtn = document.getElementById('svcPrev');
  const nextBtn = document.getElementById('svcNext');
  const dotsWrap = document.getElementById('svcDots');

  if (!track) return;

  const cards = track.querySelectorAll('.svc-card');
  const total = cards.length;
  let current = 0;
  let cardW = 0;
  let visible = 0;
  let maxIdx = 0;

  const calcSizes = () => {
    cardW = cards[0].offsetWidth + 24; // gap=24
    visible = Math.floor(slider.offsetWidth / cardW);
    maxIdx = Math.max(0, total - visible);
    current = Math.min(current, maxIdx);
    renderDots();
    updateSlider();
  };

  const renderDots = () => {
    dotsWrap.innerHTML = '';
    for (let i = 0; i <= maxIdx; i++) {
      const d = document.createElement('button');
      d.className = 'slider__dot' + (i === current ? ' active' : '');
      d.setAttribute('aria-label', `Слайд ${i+1}`);
      d.onclick = () => { current = i; updateSlider(); startAuto(); };
      dotsWrap.appendChild(d);
    }
  };

  const updateSlider = () => {
    track.style.transform = `translateX(-${current * cardW}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= maxIdx;
    dotsWrap.querySelectorAll('.slider__dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  };

  // Auto-play
  let autoTimer = null;
  const startAuto = () => {
    stopAuto();
    autoTimer = setInterval(() => {
      current = current >= maxIdx ? 0 : current + 1;
      updateSlider();
    }, 4000);
  };
  const stopAuto = () => { clearInterval(autoTimer); autoTimer = null; };

  prevBtn.addEventListener('click', () => { if (current > 0) { current--; updateSlider(); } startAuto(); });
  nextBtn.addEventListener('click', () => { if (current < maxIdx) { current++; updateSlider(); } startAuto(); });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);

  // Touch/swipe
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; stopAuto(); }, {passive:true});
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0 && current < maxIdx) { current++; updateSlider(); }
      if (dx > 0 && current > 0) { current--; updateSlider(); }
    }
    startAuto();
  });

  calcSizes();
  startAuto();
  window.addEventListener('resize', calcSizes, {passive:true});
}
