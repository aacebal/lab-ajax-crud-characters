const charactersAPI = new APIHandler("https://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const id = $('#character-id').val();
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    const id = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const id = $('#update-id').val();
    const characterChanges = {
      name: $('#update-name').val(),
      occupation: $('#update-occupation').val(),
      debt: $('#update-debt').is(':checked'),
      weapon: $('#update-weapon').val()
    };
    charactersAPI.updateOneRegister (id, characterChanges);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      debt: $('#new-debt').is(':checked'),
      weapon: $('#new-weapon').val()
    };
    console.log(characterInfo);
    charactersAPI.createOneRegister(characterInfo);
  });
});
