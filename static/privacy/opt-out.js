window.addEventListener('load', function (e) {
  toggleDisplay();
});
function toggleDisplay(e) {
  let exclusionState = window.localStorage.plausible_ignore === "true"
  if (exclusionState) {
    document.getElementById("plausible_button").innerHTML = 'Aktiviere Tracking'
    document.getElementById('plausible_active').classList.add('hidden')
    document.getElementById('plausible_inactive').classList.remove('hidden')
  } else {
    document.getElementById("plausible_button").innerHTML = 'Deaktiviere Tracking'
    document.getElementById('plausible_active').classList.remove('hidden')
    document.getElementById('plausible_inactive').classList.add('hidden')
  }
}
function toggleExclusion(e) {
  let exclusionState = window.localStorage.plausible_ignore === "true"
  if (exclusionState) {
    delete window.localStorage.plausible_ignore
  } else {
    window.localStorage.plausible_ignore = "true"
  }
  toggleDisplay();
}