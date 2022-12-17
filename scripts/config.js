function openPlayerConfig(event){ //event.target (edit button)
    editedPlayer = +event.target.dataset.playerid; // variable 3amlo fi app js 

    playerConfigOverlayElement.style.display = 'block'
    backdropElement.style.display = 'block'
    formElement.firstElementChild.classList.remove('error');

}


function closePlayerConfig (){
    playerConfigOverlayElement.style.display = 'none'
    backdropElement.style.display = 'none'
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = ''; 

}


function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); 
  
    if (!enteredPlayername) { 
      // access first div in the form 
      event.target.firstElementChild.classList.add('error');
      errorsOutputElement.textContent = 'Please enter a valid name!';
      return;
    }
  
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  
    players[editedPlayer - 1].name = enteredPlayername; // to store data internally 
  
    closePlayerConfig();  
  }