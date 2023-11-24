function showNextContent(nextContainerId) {
  // Hide the current active container
  document.querySelector('.list_container.active').classList.remove('active');

  // Show the next container
  document.getElementById(nextContainerId).classList.add('active');
}