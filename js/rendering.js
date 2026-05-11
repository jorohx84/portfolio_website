



function loadSection(section) {
    const stack = document.getElementById('stack');
    const about = document.getElementById('about');
    console.log(stack);

    if (section === 'about') {
        about.classList.add('visible');
    } else {
        about.classList.remove('visible');
    }

    if (section === 'stack') {
        stack.classList.add('visible');
        renderSkillIcons();
    } else {
        stack.classList.remove('visible');
    }

}

function renderSkillIcons() {
    let skillIcon = document.getElementById("skillIcons");
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