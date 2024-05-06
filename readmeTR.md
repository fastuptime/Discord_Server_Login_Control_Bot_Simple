# 🤖 Discord Sec. Bot 🚀

Discord Sec. botu projeme hoş geldiniz! Bu bot, kullanıcı girişlerini yönetmek ve belirli bir süre sonra etkin olmayan kullanıcıları sunucudan atmak için tasarlanmıştır.

## 🛠️ Kurulum

1. Bu depoyu yerel makinenize klonlayın.
2. Bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Botu yapılandırmak için `config.js` dosyasındaki gerekli bilgileri doldurun.
4. Botu `node index.js` komutu ile çalıştırın.

## ⚙️ Yapılandırma

Botu yapılandırmak için, `config.js` dosyasına şu bilgileri sağlamanız gerekmektedir:

- `token`: Discord Geliştirici Portalı'ndan elde ettiğiniz botunuzun token'ı.
- `password`: Kullanıcıların bota giriş yapabilmek için gereken şifre.
- `prefix`: Komutları çağırmak için kullanılan önek (örneğin, `!`, `?`, `;`).
- `guildID`: Botun çalışacağı Discord sunucusunun ID'si.

## 📝 Kullanım

Bot çalıştırıldıktan sonra, kullanıcılar aşağıdaki komutlarla etkileşimde bulunabilirler:

- `!giriş <şifre>`: Sağlanan şifre doğruysa kullanıcıyı giriş yapar.
- Diğer komutlar: Belirtilen önek ile başlayan diğer komutlar geçersiz kabul edilir.

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LİSANS](LICENSE.md) dosyasına bakabilirsiniz.

## 📬 Geri Bildirim

Botla ilgili herhangi bir geri bildiriminiz, öneriniz veya sorununuz varsa, bu depoda bir sorun açabilir veya doğrudan benimle iletişime geçebilirsiniz.

Mutlu botlamalar! 👾