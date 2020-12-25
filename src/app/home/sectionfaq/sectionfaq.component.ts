import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionfaq',
  templateUrl: './sectionfaq.component.html',
  styleUrls: ['./sectionfaq.component.scss']
})
export class SectionfaqComponent implements OnInit {

  opened: boolean = false;
  faqs = [
    { title: "Netflix nedir?", description1: "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir yayın hizmetidir.", description2: "Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında. Her zaman keşfedilecek yeni bir şeyler var, üstelik her hafta yeni diziler ve filmler ekleniyor!" },
    { title: "Netflix'in maliyeti nedir?", description1: "Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 17,99 TL ile 41,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok." },
    { title: "Nerede izleyebilirim?", description1: "İstediğiniz yerde, istediğiniz zaman, sınırsız sayıda cihazda izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın.", description2: "Favori içeriklerinizi iOS, Android veya Windows 10 uygulamasıyla da indirebilirsiniz. Seyahatteyken ve internet bağlantısı olmadan izlemek için indirilenleri kullanın. Netflix'i her yere beraberinizde götürün." },
    { title: "Nasıl iptal ederim?", description1: "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun." },
    { title: "Netflix'te ne izleyebilirim?", description1: "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin." }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  show($event: any) {
    let child;

    if (this.opened) {
      let dd = document.querySelectorAll('.item-content')
      dd.forEach(item => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          this.opened = false;
        }
      })
      return;
    }

    if ($event.target.parentNode.nodeName == 'DIV') {
      child = $event.target.parentNode.lastChild;

    } else if($event.target.parentNode.nodeName == 'SPAN') {
      child = $event.target.parentNode.parentNode.parentNode.lastChild;

    } else if($event.target.parentNode.nodeName == 'svg') {
      child = $event.target.parentNode.parentNode.parentNode.parentNode.lastChild;

    } else {
      child = $event.target.parentNode.parentNode.lastChild;

    }



    if (child.classList.contains('active')) {
      child.classList.toggle('active');
      this.opened = false;
    } else {
      child.classList.toggle('active');
      this.opened = true;
    }
  }

}
