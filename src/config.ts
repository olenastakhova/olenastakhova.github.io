// Контакты и настройки сайта — единственное место, где они меняются.
export const CONTACT = {
  email: 'stakhova@proton.me',
  phone: '+48 788 336 175',
  phoneHref: 'tel:+48788336175',
  whatsapp: 'https://wa.me/48788336175',
  telegram: '', // добавить ссылку https://t.me/<username>, когда будет — кнопка появится автоматически
  city: 'Kraków',
};

// FormSubmit: письма приходят на email выше.
// ВАЖНО: после первой отправки формы FormSubmit пришлёт на этот email письмо
// с подтверждением — нужно кликнуть "Activate". После активации в личном
// письме будет alias-строка — рекомендуется заменить email в endpoint на неё
// (чтобы адрес не был виден в исходниках страницы).
export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/stakhova@proton.me';

export const SITE = {
  url: 'https://olenastakhova.github.io',
  name: 'Olena Stakhova',
};

export const LANGS = [
  { code: 'pl', label: 'PL', path: '' },
  { code: 'uk', label: 'UA', path: 'uk/' },
  { code: 'en', label: 'EN', path: 'en/' },
  { code: 'ru', label: 'RU', path: 'ru/' },
] as const;
