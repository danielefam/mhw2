function cambioImmagineLogoOver(event) {
    const nuova = document.querySelector('#fisso img');
    nuova.src = 'immagini/cambiologo.png';
}

function cambioImmagineLogoOut() {
    const nuova = document.querySelector('#fisso img');
    nuova.src = 'https://www.pistacchissimo.it/images/logo-pistacchissimo.png';
}


function apriMenu(event){
    const menu = document.querySelector('#blocco-recensioni nav');
    event.currentTarget.classList.add('hover');
    menu.classList.remove('hidden');
}

function chiudiMenu(){
    const menu = document.querySelector('#blocco-recensioni nav');
    const tasto = document.querySelector('#tasto-recensioni');
    tasto.classList.remove('hover');
    menu.classList.add('hidden');
}


function appendiTesto(event){
    const divDaModificare = document.querySelector('#main-section-visita');
    const bloccoScritta = document.createElement('div');
    const scritta = document.createElement('span');
    scritta.textContent = "Spero tu abbia comprato qualcosa!";

    divDaModificare.appendChild(bloccoScritta);
    bloccoScritta.appendChild(scritta);
    
    event.currentTarget.removeEventListener('click', appendiTesto);
}


function mostranascondiEpisodi() {
    const ep = document.querySelector('div#episodi2')    
    const bottone = document.querySelector('#bottone-episodi span') 

    if(ep.classList.contains('hidden')){
        ep.classList.remove('hidden');
        bottone.textContent = 'Nascondi';
    }
    else{
        ep.classList.add('hidden');
        bottone.textContent = 'Mostra altri episodi';
    }

}



function cambiaFooter() {
    const foot = document.querySelector('footer');
    const stileCorrente = document.querySelector('footer em')
    switch (foot.dataset.index) {
        case "0":
            foot.dataset.index = "1";
            stileCorrente.textContent = '(2 di 3)';
            break;
        case "1":
            foot.dataset.index = "2";
            foot.classList.add('originale')
            stileCorrente.textContent = '(3 di 3)';
            break;
        case "2":
            foot.dataset.index = "0";
            foot.classList.remove('originale')
            stileCorrente.textContent = '(1 di 3)';
            break;
    }
}





const bottoneCambioFooter = document.querySelector('footer button');
bottoneCambioFooter.addEventListener('click', cambiaFooter);

const bottoneAltriEpisodi = document.querySelector('#bottone-episodi button')
bottoneAltriEpisodi.addEventListener('click', mostranascondiEpisodi);

const cambioImmagine = document.querySelector('#fisso');
cambioImmagine.addEventListener('mouseover', cambioImmagineLogoOver);
cambioImmagine.addEventListener('mouseout', cambioImmagineLogoOut);

const visitaShop = document.querySelector('#main-section-visita a');
visitaShop.addEventListener('click', appendiTesto);

const menuRecensioni = document.querySelector('#tasto-recensioni');
menuRecensioni.addEventListener('mouseover', apriMenu);

const bloccoMenuRecensioni = document.querySelector('#blocco-recensioni span')
bloccoMenuRecensioni.addEventListener('mouseleave', chiudiMenu);


