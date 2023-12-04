function addResponse() {
    const inputElement = document.getElementById('responseInput');
    const responseListElement = document.getElementById('responseList');

    const responseText = inputElement.value.trim();

    if (responseText !== '') {
      const listItem = document.createElement('li');
      listItem.className = 'responseItem';
      listItem.textContent = responseText;

      responseListElement.appendChild(listItem);

      inputElement.value = '';
      saveResponses();
    }
  }

  function saveResponses() {
    const responseListElement = document.getElementById('responseList');
    const responses = [];

    responseListElement.querySelectorAll('.responseItem').forEach(item => {
      responses.push(item.textContent);
    });

    localStorage.setItem('responses', JSON.stringify(responses));
  }

  function loadResponses() {
    const responseListElement = document.getElementById('responseList');
    const responses = JSON.parse(localStorage.getItem('responses')) || [];

    responseListElement.innerHTML = '';

    responses.forEach(responseText => {
      const listItem = document.createElement('li');
      listItem.className = 'responseItem';
      listItem.textContent = responseText;
      responseListElement.appendChild(listItem);
    });
  }

  loadResponses();

  // Add electric effect
  const electricEffect = document.getElementById('electricEffect');
  let isElectricOn = false;

  function toggleElectricEffect() {
    isElectricOn = !isElectricOn;
    electricEffect.style.backgroundImage = isElectricOn ? 'url("electric.gif")' : 'none';
  }

  toggleElectricEffect(); // Turn on by default