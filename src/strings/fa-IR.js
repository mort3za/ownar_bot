const strings = {
  direction: 'rtl',
  1: 'خوش آمدید',
  2: 'http://bit.ly/OwnarAndroid',
  3: 'http://bit.ly/OwnarIOS',
  4: 'لطفا یک عکس به عنوان زمینه واقعیت افزوده آپلود نمائید. این عکس بعدا در نرم‌افزار مانند یک بارکد به طور خودکار شناسایی خواهد شد.',
  5: 'لطفا راه ارتباطی مورد نظرتان را انتخاب کنید.',
  6: 'info@nikmodern.com',
  7: '@nikmodern_support',
  8: '🏢 درباره ما',
  9: '⚙️ تنظیمات',
  10: '✉️ تماس با ما',
  11: '📦 دانلود اپلیکیشن',
  12: '❔ راهنمایی',
  13: '➕ مارکر جدید',
  14: 'برای ساخت واقعیت‌افزوده جدید گزینه مارکر جدید را انتخاب نمائید.',
  15: '✅ انجام شد.',
  16: 'سیستم عامل خود را انتخاب نمائید.',
  17: 'اپل - iOS',
  18: 'اندروید',
  19: '🔙 بازگشت',
  20: 'یک مورد را انتخاب نمائید',
  // 21: 'حالا محتوای مورد نظر خود را ارسال کنید، محتوا می‌تواند یکی از موارد «ویدئو، شماره تماس، وبسایت، صوت و مکان» باشد.',
  21: 'حالا محتوای مورد نظر خود را ارسال کنید، در حال حاضر فقط محتوای ویدئویی در ربات پشتیبانی می‌شود.\n ویدئو باید با فرمت mp4 و حداکثر ۲۰ مگابایت باشد.',
  22: '✅ نمایش نتیجه',
  24: 'انجام شد.\nاگر بخواهید می‌توانید باز هم محتوای بیشتری ارسال کنید تا روی تصویر قرار گیرد.',
  25: 'تصویر بالا یک واقعیت‌افزوده است. با گرفتن دوربین گوشی (از داخل نرم‌افزار اونار) روی تصویر بالا، می‌توانید محتوای روی آن را مشاهده نمائید.',
  26: 'برای آشنایی بیشتر با این تکنولوژی عضو کانال ما شوید!\nhttps://t.me/ownar_ir',
  27: 'دریافت شد، لطفا کمی صبر کنید...',
  28: 'عملیاتی در حال اجرا نیست',
  29: 'ربات چکار می‌کند؟',
  30: 'با این ربات می‌توانید یک «واقعیت افزوده» به صورت رایگان بسازید.\nمی‌توانید محتوای خود (در حال حاضر فقط محتوای فیلم) را روی یک تصویر قرار دهید، به این صورت که یک عکس آپلود می‌کنید (که حکم بارکد را برای ربات دارد)، در مرحله بعد محتوای خود را ارسال می‌کنید و این محتوا به صورت مجازی با عکس پیوند می‌خورد. سپس با نصب نرم‌افزار «اونار» و گرفتن دوربین داخل نرم‌افزار روی عکس خود، محتوایی که روی عکس قرار گرفته بود نمایش داده می‌شود.\nمی‌توانید عکس خود را روی کاغذ چاپ کنید و یا روی یک بیلبورد بگذارید، برای نرم‌افزار اونار فرقی نمی‌کند و آن را با تکنولوژی پردازش تصویر آن را تشخیص می‌دهد.',
  31: 'چطور با ربات کار کنم؟',
  32: 'ابتدا دستور شروع را بزنید و سپس «ایجاد مارکر» را انتخاب نمائید. در این مرحله ربات از شما درخواست ارسال یک عکس می‌کند، این عکس در واقع نقش یک بارکد را دارد و تصویری است که سایر محتواها روی آن قرار می‌گیرند. تصویر باید دارای ویژگی‌های زیر باشد:\n۱. به صورت عکس ارسال شود (نه به صورت فایل). ۲. دارای تفاوت‌های بارز در نقاط مختلف آن باشد تا سیستم اونار بتواند آن را از روی خطوط و اشکال روی آن به راحتی از سایر تصاویر تشخیص دهد.\nبعد از ارسال تصویر، ربات از شما درخواست ارسال محتوا می‌کند، با ارسال یک فیلم کم حجم و با فرمت مناسب این مرحله هم تمام می‌شود. در مرحله آخر روی دکمه «نمایش نتیجه» کلیک کنید. برای دیدن نتیجه کار می‌توانید عکس خود را روی کاغذ چاپ کنید یا روی یک مانیتور دیگر باز کنید و با گوشی خود نرم‌افزار اونار را باز کرده و روی تصویر بگیرید تا نرم‌افزار با تشخیص تصویر، محتوای آن را از اینترنت به صورت خودکار دانلود کند و نمایش دهد.',
  33: 'کاربرد اونار چیست؟',
  34: 'واقعیت افزوده یا Augmented Reality در بسیاری از زمینه‌ها کاربرد دارد، از تبلیغات و گردشگری تا آموزش و سرگرمی. برای اطلاعات بیش‌تر می‌توانید عضو کانال اونار شوید: https://t.me/ownar_ir',
  35: 'مشکلی پیش آمده!',
  36: 'ابتدا قسمت آموزش کار با ربات را مطالعه نمائید و اگر در تشخیص تصویر مشکلی پیش آمده یک تصویر دیگر را امتحان کنید مثلا تصویر یک منظره با جزئیات مختلف، اگر مشکل حل نشد یا مشکل دیگری وجود داشت با ما از طریق آیدی @nikmodern_support ارتباط برقرار نمائید.',
  37: 'یکی از موارد زیر را انتخاب نمائید.',
  38: '🔙 بیخیال',
  39: 'دانلود نسخه اندروید نرم‌افزار اونار از طریق کافه‌بازار\nhttps://cafebazaar.ir/app/com.nikmodern.ownar/',
  40: 'دانلود نسخه iOS نرم‌افزار اونار از طریق اپ‌استور\nhttps://itunes.apple.com/us/app/ownar/id1247386794'
};

module.exports = strings;