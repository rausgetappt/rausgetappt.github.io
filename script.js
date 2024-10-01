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

// Event Listener hinzufügen, um die Checkboxen zu überwachen
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
  checkbox.addEventListener('change', filterDivs);
});

// Funktion, um die Divs basierend auf den Checkboxen zu filtern
function filterDivs() {
  // Checkboxen abrufen
  const checkA = document.getElementById('checka');
  const checkA1 = document.getElementById('checka1');
  const checkA2 = document.getElementById('checka2');

  // Alle Divs abrufen
  const divs = document.querySelectorAll('.fa, .fa1, .fa2');

  // Checken, ob alle Checkboxen nicht angekreuzt sind
  const noCheckboxChecked = !checkA.checked && !checkA1.checked && !checkA2.checked;

  divs.forEach(function(div) {
      // Falls keine Checkbox angekreuzt ist, alle Divs anzeigen
      if (noCheckboxChecked) {
          div.style.display = 'block';
      } else {
          // Falls Checkboxen angekreuzt sind, Divs entsprechend anzeigen oder verstecken
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

// Initiales Laden der Seite
filterDivs();


// ----------Back to top animation----------

window.onscroll = () => document.querySelector('.backtotop').classList.toggle('show', window.scrollY > document.documentElement.scrollHeight * 0.05);