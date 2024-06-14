# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

markdown
Kodu kopyala
# Lab Reporting Application

Bu proje, laborantlar tarafından hasta raporlarının eklenip yönetilebildiği bir React uygulamasıdır. Bu belgede, projenin nasıl kurulacağı ve çalıştırılacağı adım adım açıklanmıştır.

## Gereksinimler

Bu projeyi çalıştırabilmek için aşağıdaki yazılımların sisteminize kurulu olması gerekmektedir:

- [Node.js](https://nodejs.org/) (v14 veya üstü)
- [npm](https://www.npmjs.com/) (Node.js ile birlikte gelir)
- [Git](https://git-scm.com/)

## Kurulum

### 1. Projeyi Klonlayın

İlk olarak, projenin bulunduğu GitHub deposunu klonlayın:

git clone https://github.com/yusufpeksen/lab-reporting.git
2. Proje Dizini İçine Girin
Klonlama işleminden sonra, proje dizinine girin:

Kodu kopyala
cd lab-reporting
3. Gerekli Bağımlılıkları Yükleyin
Projenin çalışabilmesi için gerekli olan bağımlılıkları yükleyin:

Kodu kopyala
npm install
Projeyi Çalıştırma
Geliştirme Sunucusunu Başlatın
Bağımlılıkları yükledikten sonra, geliştirme sunucusunu başlatın:

Kodu kopyala
npm start
Bu komut, uygulamanızı yerel olarak çalıştırır ve web tarayıcınızda http://localhost:3000 adresinde açılacaktır.

Kullanım
Rapor Ekleme ve Düzenleme
Yeni bir rapor eklemek için ana sayfada bulunan "Yeni Rapor Ekle" butonuna tıklayın.
Varolan bir raporu düzenlemek için, rapor listesindeki düzenleme ikonuna (kalem simgesi) tıklayın.
Rapor Silme
Bir raporu silmek için, rapor listesindeki silme ikonuna (çöp kutusu simgesi) tıklayın.
Arama ve Sıralama
Arama çubuğunu kullanarak raporlar arasında isim, soyisim, kimlik numarası veya laborant adı ile arama yapabilirsiniz.
Raporları tarih sırasına göre sıralamak için sıralama seçeneğini kullanabilirsiniz.
Yapılandırma
Eğer projede özel yapılandırmalar yapmanız gerekiyorsa, .env dosyasını kullanarak çevresel değişkenleri ayarlayabilirsiniz. Örnek bir .env dosyası şu şekilde olabilir:

Kodu kopyala
REACT_APP_API_URL=http://localhost:5000
Testler
Projedeki testleri çalıştırmak için aşağıdaki komutu kullanabilirsiniz:

Kodu kopyala
npm test
Dağıtım
Projeyi üretim ortamına dağıtmak için, aşağıdaki komutu çalıştırarak üretim için optimize edilmiş dosyaları oluşturabilirsiniz:

Kodu kopyala
npm run build
Bu komut, build dizininde optimize edilmiş ve minify edilmiş dosyaları oluşturur. Bu dosyaları, tercih ettiğiniz bir sunucuya veya hosting hizmetine yükleyebilirsiniz.

Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir pull request (çekme isteği) gönderin veya bir sorun (issue) açın. Katkılarınızı bekliyoruz!

Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.

İletişim
Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bizimle iletişime geçin:

Email: yusufpeksen77@gmail.com
