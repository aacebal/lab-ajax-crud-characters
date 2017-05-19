class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters",
      method: "GET",
      success: function (fullList){
        fullList.forEach((oneCharacter) => {
          const newCharacter =
          `<div class="character-info">
            <div class="name">Character Name: ${oneCharacter.name}</div>
            <div class="occupation">Character Occupation: ${oneCharacter.occupation}</div>
            <div class="debt">Character Debt: ${oneCharacter.debt}</div>
            <div class="weapon">Character Weapon: ${oneCharacter.weapon}</div>
          </div>`;

          $('.characters-container').append(newCharacter);
        });
      },
      error: function (err) {
      console.log(err);
      }
  });
  }

  getOneRegister (id) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/" +id,
      method: "GET",
      success: function (theCharacter){
        $('.name').append(theCharacter.name);
        $('.occupation').append(theCharacter.occupation);
        $('.debt').append(theCharacter.debt);
        $('.weapon').append(theCharacter.weapon);
      },
      error: function (err) {
        console.log(err);
      }
  });
  }

  createOneRegister (characterInfo) {
      $.ajax({
        url: this.BASE_URL + "/characters",
        method: "POST",
        data: characterInfo,
        success: function (theCharacter){
          console.log (theCharacter);
        },
        error: function (err) {
          console.log(err);
        }
    });
}

  updateOneRegister (id, characterChanges) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "PUT",
      data: characterChanges,
      success: function (theCharacter){
        console.log (theCharacter);
      },
      error: function (err) {
        console.log(err);
      }
  });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters/" +id,
      method: "DELETE",
      success: function (theCharacter){
        console.log(theCharacter);
      },
      error: function (err) {
        console.log(err);
      }
  });
  }
}
