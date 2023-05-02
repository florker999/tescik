function aboutUs() {
    const root = document.createElement('div');
    root.id = 'root';

    const whiteBck = document.createElement('div');
    whiteBck.className = 'whiteBck';
    const header1 = document.createElement('h1');
    header1.innerHTML = "O nas";
    whiteBck.appendChild(header1);
    root.appendChild(whiteBck);

    const header2 = document.createElement('h1');
    header2.innerHTML = "Witamy serdecznie!";
    root.appendChild(header2);

    const p1 = document.createElement('p');
    p1.innerHTML = "Zapraszamy do naszego salonu przy ulicy Dąbrowskiego 1G.";
    
    const p2 = document.createElement('p');
    p2.innerHTML = "Właścicielem salonu jest Mistrzyni Fryzjerstwa Pani Joanna Paździor – fryzjer z ponad 25 letnim doświadczeniem. Pochodzi ona z rodziny w której to rodzice Olga i Tadeusz Matuszak byli również mistrzami fryzjerstwa i już od lat 50-tych prowadzili swój salon w polkowickim rynku. Teraz ona i jej córka, a wnuczka Państwa Matuszak kontynuują ten fach w Polkowicach przy ulicy Dąbrowskiego. Ot taka rodzinna tradycja 🙂";

    const p3 = document.createElement('p');
    p3.className = 'imp';
    p3.innerHTML = "Nasz salon fryzjerski jest stworzony dla  każdego kto ceni sobie najwyższą jakość usług, fachowość oraz profesjonalizm za rozsądną cenę.";

    const p4 = document.createElement('p');
    p4.innerHTML = "Jako zespół doświadczonych fryzjerów dokładamy największych starań, aby chwile spędzone w naszym salonie dostarczały satysfakcji najbardziej wymagającym klientom.  Nasi fryzjerzy to ludzie z bogatym doświadczeniem. Ich wiedza i umiejętności są stale wzbogacane przez uczestnictwo w pokazach i szkoleniach, a najnowsze trendy mody natychmiast wykorzystywane są w naszych salonach.";

    const p5 = document.createElement('p');
    p5.innerHTML = "Oferujemy pełen zakres usług fryzjerskich, służymy poradą w doborze fryzury, koloru jak i stylu. Naszym celem jest zadowolony klient, dlatego wszystkie usługi wykonujemy przy użyciu tylko najwyższej klasy kosmetyków na rynku takich firm jak: L’oreal, Matrix, Londa.";

    root.appendChild(p1);
    root.appendChild(p2);
    root.appendChild(p3);
    root.appendChild(p4);
    root.appendChild(p5);

    const iframe1 = document.createElement('iframe');
    iframe1.width = '560';
    iframe1.height = '315';
    iframe1.src = "https://www.youtube.com/embed/eWxGZ9B515U";
    iframe1.title = "YouTube video player";
    iframe1.frameBorder = "0";
    iframe1.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe1.allowfullscreen = true;
    iframe1.style = `
        display: block;
        margin: 0px auto;
    `;
    root.appendChild(iframe1);

    return root;
}

function mainPage() {
    const root = document.createElement('div');
    root.id = 'root';
    root.innerHTML = ` 
    <img src="./pictures/building.jpeg" alt="budynek" id="buildingPic"/>
    <div class="whiteBck">
        <h1>Najlepszy salon damsko-męski w mieście</h1>
    </div>
    <div class="gallery">
        <img src="./pictures/gallery/inside1.jpeg">
        <img src="./pictures/gallery/inside2.jpeg">
        <img src="./pictures/gallery/inside3.jpeg">
        <img src="./pictures/gallery/inside4.jpeg">
        <img src="./pictures/gallery/hair1.jpeg">
        <img src="./pictures/gallery/hair2.jpeg">
        <img src="./pictures/gallery/hair3.jpeg">
        <img src="./pictures/gallery/hair4.jpeg">
    </div>
    <div class="whiteBck">
        <h1>Odwiedź nas</h1>
    </div>
    <img src="./pictures/logo.jpeg" style="width: 100%; margin-top: 50px;">
    <div id="cocochanel">
        <p>“najlepszy kolor na całym świecie to taki, który wygląda na Tobie dobrze”</p>
        <p>-Coco Chanel</p>
    </div>
    <p id="description">Nasz salon fryzjerski jest stworzony dla każdego kto ceni sobie najwyższą jakość usług, fachowość oraz profesjonalizm za rozsądną cenę.</p>
    <div class="whiteBck">
        <h1>Umów się na wizytę przez Internet</h1>
        <img src="./pictures/zacheta.gif" style="display: block; margin: 0px auto;">
        <a href="https://booksy.com/pl-pl/4845_salon-fryzjerski-joanna_fryzjer_15439_polkowice" style="text-decoration: none;">
            <img src="./pictures/logo_booksy.jpg" style="display: block; margin: 0px auto; width: 50%;">
            <p id="booksyLink">Umów się</p>
        </a>
    </div>
    <div class="gallery">
        <img src="./pictures/gallery/hair5.jpeg">
        <img src="./pictures/mini_logo.jpg">
    </div>
    <h1 id="crazy">Poradzimy sobie z każdą fryzurą 🙂</h1>
    <img src="./pictures/psycho.jpg" style="width: 400px; margin: 5px auto;">
    <h1>Akceptujemy płatność kartą</h1>
    <img src="./pictures/karta.jpg" style="width: 400px; margin: 5px auto;">
</div>
    `;
    return (root);
}

function hideMenu() {
    menuWnd.style.animationName = 'hideMenu';
    shadow.style.animationName = 'hideShadow, moveShadowZ';
    shadow.style.animationDuration = '0.8s, 0.1s';
    shadow.style.animationDelay = '0s, 0.7s';
}

function menu() {
    const root = document.createElement('div');
    root.id = 'menu';

    const b1 = document.createElement('div');
    b1.id = 'closeMenuButton';
    b1.addEventListener('click', hideMenu);
    b1.innerHTML = "Zamknij menu";

    const b2 = document.createElement('div');
    b2.className = 'button';
    b2.innerHTML = "Strona główna";

    const b3 = document.createElement('div');
    b3.className = 'button';
    b3.innerHTML = "O nas";

    const b4 = document.createElement('div');
    b4.className = 'button';
    b4.innerHTML = "Booksy";

    const b5 = document.createElement('div');
    b5.className = 'button';
    b5.innerHTML = "Kontakt";

    root.appendChild(b1);
    root.appendChild(b2);
    root.appendChild(b3);
    root.appendChild(b4);
    root.appendChild(b5);

    return root;
}

const tabs = {
    mainPage: document.getElementById('main')
}