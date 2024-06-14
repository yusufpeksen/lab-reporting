Lab Reporting Application
Bu proje, laborantlar tarafından hasta raporlarının eklenip yönetilebildiği bir React uygulamasıdır. Bu belgede, projenin nasıl kurulacağı ve çalıştırılacağı adım adım açıklanmıştır.

Gereksinimler
Bu projeyi çalıştırabilmek için aşağıdaki yazılımların sisteminize kurulu olması gerekmektedir:

Node.js (v14 veya üstü)
npm (Node.js ile birlikte gelir)
Git


1. Projeyi Klonlayın
İlk olarak, projenin bulunduğu GitHub deposunu klonlayın:

git clone https://github.com/yusufpeksen/lab-reporting.git

2. Proje Dizini İçine Girin
Klonlama işleminden sonra, proje dizinine girin:

cd lab-reporting

3. Gerekli Bağımlılıkları Yükleyin
Projenin çalışabilmesi için gerekli olan bağımlılıkları yükleyin:


npm install

Projeyi Çalıştırma
Geliştirme Sunucusunu Başlatın
Bağımlılıkları yükledikten sonra, geliştirme sunucusunu başlatın:

npm run dev

Bu komut, uygulamanızı yerel olarak çalıştırır ve web tarayıcınızda http://localhost:3000 (farkli ise terminalde gerekli bağlantı bulunur) adresinde açılacaktır.

Kullanım
Rapor Ekleme ve Düzenleme
Yeni bir rapor eklemek için: Ana sayfada bulunan "Yeni Rapor Ekle" butonuna tıklayın.
Varolan bir raporu düzenlemek için: Rapor listesindeki düzenleme ikonuna (kalem simgesi) tıklayın.
Rapor Silme
Bir raporu silmek için, rapor listesindeki silme ikonuna (çöp kutusu simgesi) tıklayın.

Arama ve Sıralama
Arama: Arama çubuğunu kullanarak raporlar arasında isim, soyisim, kimlik numarası veya laborant adı ile arama yapabilirsiniz.
Sıralama: Raporları tarih sırasına göre sıralamak için sıralama seçeneğini kullanabilirsiniz.
Yapılandırma
Eğer projede özel yapılandırmalar yapmanız gerekiyorsa, .env dosyasını kullanarak çevresel değişkenleri ayarlayabilirsiniz. Örnek bir .env dosyası şu şekilde olabilir:


Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir pull request (çekme isteği) gönderin veya bir sorun (issue) açın. Katkılarınızı bekliyoruz!

Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.

İletişim
Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bizimle iletişime geçin:

Email: ahmetpeksen77@gmail.com