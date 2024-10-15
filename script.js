// ----------Progressbar----------

const filled = document.querySelector('.filled');

function update() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update();


// ----------Checkbox keep state----------

document.querySelectorAll("input[type='checkbox']").forEach((element) => {element.click();});

function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  }
  
  function loadCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
    });
  }
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', saveCheckboxStates);
  });
  
  document.addEventListener('DOMContentLoaded', loadCheckboxStates);


// ----------Motorcycle filter----------

document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', filterDivs);
});

// Event Listener, welcher auf Änderungen der Checkboxen prüft
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', filterDivs);
});

// Funktion welche die divs filtert
function filterDivs() {
  // Checkboxen abrufen
  const checkA = document.getElementById('checka');
  const checkA1 = document.getElementById('checka1');
  const checkA2 = document.getElementById('checka2');

  // Prüft alle divs
  const divs = document.querySelectorAll('.fa, .fa1, .fa2');

  // Prüft ob keine Checkboxen angekreuzt sind
  const noCheckboxChecked = !checkA.checked && !checkA1.checked && !checkA2.checked;

  divs.forEach(function(div) {
      // Funktion wenn keine Checkboxen angekreuzt sind werden alle angezeigt
      if (noCheckboxChecked) {
          div.style.display = 'block';
      } else {
          // Wenn Checkboxen angekreuzt sind werden divs entsprechend shown/hidden
          if (
              (checkA.checked && div.classList.contains('fa')) ||
              (checkA1.checked && div.classList.contains('fa1')) ||
              (checkA2.checked && div.classList.contains('fa2'))
          ) {
              div.style.display = 'block';
          } else {
              div.style.display = 'none';
          }
      }
  });
}

// Lädt die Seite
filterDivs();


// ----------Back to top animation----------

window.onscroll = () => document.querySelector('.backtotop').classList.toggle('show', window.scrollY > document.documentElement.scrollHeight * 0.05);