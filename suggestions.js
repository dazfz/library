// Sugerencias para autocompletar con jQuery
$(document).ready(function () {
  // Captura el evento de cambio de valor en el campo de entrada de título
  $("#title").on("input", function () {
    var query = $(this).val();

    // Realiza una solicitud AJAX a la API de Google Books sin restricciones de inicio de título
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes",
      data: {
        q: query,
        maxResults: 40,
      },
      success: function (response) {
        // Procesa los datos de respuesta y muestra las sugerencias
        var suggestions = response.items.map(function (item) {
          return {
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : "",
            pages: item.volumeInfo.pageCount ? item.volumeInfo.pageCount : "",
          };
        });

        displaySuggestions(suggestions, query);
      },
    });
  });

  // Muestra las sugerencias en el menú desplegable
  function displaySuggestions(suggestions, query) {
    var suggestionsContainer = $("#suggestions");
    suggestionsContainer.empty();

    // Filtra las sugerencias que comiencen con el valor actual del campo de entrada de título
    var filteredSuggestions = suggestions.filter(function (suggestion) {
      return suggestion.title.toLowerCase().startsWith(query.toLowerCase());
    });

    // Crea elementos de opción para cada sugerencia
    filteredSuggestions.forEach(function (suggestion) {
      var option = $(
        '<div class="suggestion bg-gray-100 border border-gray-300 py-2 px-4 cursor-pointer"></div>'
      );
      option.text(suggestion.title);

      // Captura el evento de clic en una sugerencia
      option.on("click", function () {
        $("#title").val(suggestion.title);
        $("#author").val(suggestion.author);
        $("#pages").val(suggestion.pages);
        suggestionsContainer.empty();
      });

      suggestionsContainer.append(option);
    });
  }
});
