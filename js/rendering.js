



// function loadSection(section) {
//     const stack = document.getElementById('stack');
//     const about = document.getElementById('about');

//     console.log(stack);

//     if (section === 'about') {
//         about.classList.add('visible');
//     } else {
//         about.classList.remove('visible');
//     }

//     if (section === 'stack') {
//         stack.classList.add('visible');
//         renderSkillIcons();
//     } else {
//         stack.classList.remove('visible');
//     }

// }



function loadSection(section) {
    if (window.innerWidth <= 1024) return
    removeVisible();
    removeLinks();
    const secRef = document.getElementById(section);
    const linkID = section + 'Link';
    const linkRef = document.getElementById(linkID);
    secRef.classList.add('visible');
    linkRef.classList.add('activated');
    // if (section === 'stack') {
    //     // renderSkillIcons();
    // }

}

function removeVisible() {
    const secs = document.getElementsByClassName('section')
    console.log(secs);
    for (const s of secs) {
        s.classList.remove('visible');
    }

}

function removeLinks() {
    const links = document.getElementsByClassName('navLink');
    for (const l of links) {
        l.classList.remove('activated');
    }
}



function renderSkillIcons() {


    let skillIcon = document.getElementById('skillIcons');
    console.log(skillIcon);
    if (!skillIcon) {
        console.log('nicht da');
        return

    }

    skillIcon.innerHTML = "";
    for (let index = 0; index < icons.length; index++) {
        const ICON = icons[index];
        skillIcon.innerHTML += ` <div class="flipCard" id="skillIcon${index}">
        <div class="flipCardInner">
        <div class="flipCardFront">
          <img src="${ICON.path}" loading="lazy" alt="">
        </div>
         <div class="flipCardBack">
         <span>${ICON.name}</span>
         </div>
      </div>
    </div>`;
    }

}